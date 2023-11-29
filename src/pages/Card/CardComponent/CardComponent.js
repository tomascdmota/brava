  import React, { useEffect, useState } from 'react';
  import PropTypes from 'prop-types';
  import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
  import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
  import vcf from 'vcf';
  import ImageCompressor from 'image-compressor';
  import { openDB } from 'idb';
  import unorm from 'unorm';
  import Modal from '../../../components/Modal/Modal';
  import LinkIcon from '@mui/icons-material/Public';
  import ReviewsIcon from '@mui/icons-material/Reviews';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import NotesIcon from '@mui/icons-material/Description';

  import './CardComponent.css';

  function CardComponent({
    email,
    username,
    phone,
    company,
    title,
    profile_image_url,
    background_image_url,
    onLoad,
    facebook,
    linkedin,
    instagram,
    url,
  }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shortenedUrl, setShortenedUrl] = useState('')
    const accessKeyId = 'AKIAS74Z5OF3XZBMVMOE';
    const secretAccessKey = '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';
    const Region = 'eu-west-2';
    const Bucket = 'brava-bucket';

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const initIndexedDB = async () => {
      try {
        const db = await openDB('brava-db', 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains('images')) {
              const imagesStore = db.createObjectStore('images', { keyPath: 'key' });
              imagesStore.createIndex('url', 'url', { unique: true });
            }
          },
        });
        return db;
      } catch (error) {
        console.error('Error initializing IndexedDB:', error);
        throw error;
      }
    };

   
  
    const saveImageToIndexedDB = async (imageBlob) => {
      try {
        const db = await initIndexedDB();
        const tx = db.transaction('images', 'readwrite');
        const store = tx.objectStore('images');
    
        // Use a unique key, such as the S3 key, assuming it's unique for each image
        const key = 'profileImage';
        
        // Create an object with a URL (if needed) and the image data
        const data = {
          key,
          url: profile_image_url,  // Add the URL if it's necessary for your use case
          data: imageBlob,
        };
    
        // Store the data in IndexedDB
        store.put(data);
    
        // Complete the transaction
        await tx.complete;
    
        console.log('Image stored in IndexedDB:', data);
      } catch (error) {
        console.error('Error storing image in IndexedDB:', error);
      }
    };

    const loadImageFromIndexedDB = async () => {
      try {
        const db = await initIndexedDB();
        const tx = db.transaction('images');
        const store = tx.objectStore('images');
        const entry = await store.get('profileImage');
    
        if (entry) {
          console.log('Retrieved imageBuffer:', entry.data);
        }
    
        return entry ? entry.data : null;
      } catch (error) {
        console.error('Error loading from IndexedDB:', error);
        return null;
      }
    };

    const fetchImage = async () => {
      try {
        const s3Client = new S3({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region: Region,
        });
    
        // Parse the profile_image_url to extract the S3 key
        const urlObject = new URL(profile_image_url);
        const key = decodeURIComponent(urlObject.pathname.replace(/^\//, ''));
    
        const getObjectParams = {
          Bucket,
          Key: key,
        };
    
        const command = new GetObjectCommand(getObjectParams);
        const response = await s3Client.send(command);
    
       
    
        const blob = new Blob([response.Body], { type: response.ContentType });
        saveImageToIndexedDB(blob);
        // Save the image Blob directly to the state
        setImage(blob);
        setLoading(false);
    
        if (onLoad) {
          onLoad();
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    useEffect(() => {
      let isMounted = true;

      const loadImageAndSetState = async () => {
        const imageBuffer = await loadImageFromIndexedDB();

        if (imageBuffer) {
          const blob = new Blob([imageBuffer], { type: 'image/jpg' });
          setImage(blob);
          setLoading(false);
        } else {
          fetchImage();
        }
      };

      loadImageAndSetState();

      return () => {
        isMounted = false;

        if (image) {
          URL.revokeObjectURL(image);
        }
      };
    }, [profile_image_url, Bucket, Region, accessKeyId, secretAccessKey, onLoad]);


  
    const saveToContacts = async () => {
      try {
        const card = new vcf();
        const imageBuffer = await loadImageFromIndexedDB();
        console.log("Image buffer:", imageBuffer)
    
        if (!imageBuffer) {
          console.error('Image not found in IndexedDB.');
          return;
        }
    
        // Set basic properties
    
        // Manually encode special characters in the names
        const removeDiacritics = (str) => unorm.nfkd(str).replace(/[\u0300-\u036f]/g, '');
        const decodedUsername = removeDiacritics(decodeURIComponent(username));
    
        // Set structured name with properly encoded values
        card.add('n', [decodedUsername]);
    
        // Set formatted name with the full, properly encoded name
        card.add('fn', [decodedUsername]);
    
        card.add('org', company);
        card.add('tel', phone);
        card.add('email', email);
    
        // Set additional properties
        card.add('title', title);
        card.add('url', url);
    
        // Set social media properties
        if (facebook) {
          card.add('x-socialprofile', facebook, { type: 'Facebook' });
        }
        if (instagram) {
          card.add('x-socialprofile', instagram, { type: 'Instagram' });
        }
        if (linkedin) {
          card.add('x-socialprofile', linkedin, { type: 'Linkedin' });
        }
    
        // Extract the S3 key from the profile_image_url
        const urlObject = new URL(profile_image_url);
        const imageKey = decodeURIComponent(urlObject.pathname.replace(/^\//, ''));
    
        // Generate a pre-signed URL for the image
        const imageURL = await generatePresignedURL(imageKey);
    
        // Check if the image can be fetched and encoded successfully
        const encodedImage = await fetchAndEncodeImage(imageURL);
        if (!encodedImage) {
          console.error('Error fetching and encoding image.');
          return;
        }

        console.log("Encoded image",encodedImage)
        // Set image in vCard
        card.add('photo', encodedImage, { encoding: 'b', type: 'image/jpeg' });  // Use 'image/png' or 'image/jpeg' based on the actual image type
    
        // Generate vCard data as a string
        const vCardData = card.toString();
        console.log(vCardData);
    
        // Create a Blob from the vCard data with explicit UTF-8 encoding
        const vcard_blob = new Blob([new TextEncoder().encode(vCardData)], {
          type: 'text/vcard;charset=utf-8',
        });
    
        // Open a new URL to prompt the user to add the contact
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(vcard_blob);
        downloadLink.download = 'contact.vcf';
    
        // Trigger a click event to simulate a download prompt
        downloadLink.click();
    
        // Release the object URLs
        URL.revokeObjectURL(downloadLink.href);
      } catch (error) {
        console.error('Error saving to contacts:', error);
      }
    };
    
    // Function to fetch and encode the image
    const fetchAndEncodeImage = async (imageUrl) => {
      try {
        const response = await fetch(imageUrl);
        const imageBlob = await response.blob();
    
        // Resize and compress the image with a lower quality
        const resizedAndCompressedBase64 = await resizeAndCompressImage(imageBlob, {
          maxWidth: 200,
          maxHeight: 200,
          quality: 0.5, // Adjust the quality as needed
        });
    
        return resizedAndCompressedBase64;
      } catch (error) {
        console.error('Error fetching, resizing, and encoding image:', error);
        return null;
      }
    };
    
    const resizeAndCompressImage = async (blob, options) => {
      try {
        const image = new Image();
        image.src = URL.createObjectURL(blob);
    
        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });
    
        const { maxWidth, maxHeight, quality } = options;
    
        let width = image.width;
        let height = image.height;
    
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
    
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
    
        // Draw the image on the canvas progressively
        context.drawImage(image, 0, 0, width, height);
    
        // Convert the canvas content to a blob
        const resizedBlob = await new Promise((resolve) => {
          canvas.toBlob(resolve, 'image/jpeg', quality);
        });
    
        // Convert the resized blob to base64
        const resizedBlobBuffer = await new Response(resizedBlob).arrayBuffer();
        const resizedBlobBase64 = btoa(
          new Uint8Array(resizedBlobBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    
        return resizedBlobBase64;
      } catch (error) {
        console.error('Error resizing and compressing image:', error);
        return null;
      }
    };
    
    
    
    const generatePresignedURL = async (imageKey) => {
      try {
        const s3Client = new S3({
          region: 'eu-west-2',
          credentials: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
          },
        });
    
        const params = {
          Bucket: 'brava-bucket',
          Key: imageKey,
          Expires: 900,
        };
    
        const signedURL =  getSignedUrl(s3Client, new GetObjectCommand(params));
        console.log(signedURL)
        return signedURL;
      } catch (error) {
        console.error('Error generating pre-signed URL:', error);
        throw error;
      }
    };



    const handleGetInTouch = () => {
      try {
        // Instead of triggering a download, open the modal
        openModal();
      } catch (error) {
        console.error('Error opening modal:', error);
      }
    };

    return (
      <div className={`card-component ${loading ? 'loading' : ''}`}  >
        <div className="card-background"  style={{ backgroundImage: `url(https://cdn.wallpapersafari.com/25/32/pP8ouZ.jpg)` }}> </div>
        <div className="card-component-header" >
         
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
            <img className="card-image" src={profile_image_url} alt="Profile" />
          </>
          )}
        </div>
        <div className="card-body">
          <h3>{company}</h3>
          <p>{title}</p>
          <div className='card-buttons'>
            <button onClick={saveToContacts}>Save</button>
            <button onClick={handleGetInTouch}>Get in touch</button>
          </div>
          <div className='social-icons'>
          <a href={url}><LinkIcon  focusable/></a>
          <a href={url}><ReviewsIcon href=""focusable /></a>
          <a href={url}><InstagramIcon href={instagram}focusable/></a>
          <a href={url}><FacebookIcon href={facebook} focusable/></a>
          <a href={url}><NotesIcon focusable/></a>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  }


  CardComponent.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    profile_image_url: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
    card_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  export default CardComponent;