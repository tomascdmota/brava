import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import vcf from 'vcf';
import { openDB } from 'idb';
import unorm from 'unorm';
import Modal from '../../../components/Modal/Modal';
import FacebookLogo from './Logos/facebook.png';
import InstagramLogo from './Logos/instagram.svg';
import LinkedInLogo from './Logos/linkedin.png';
import NotesLogo from './Logos/notes.png';
import GoogleReviewsLogo from './Logos/googlereview.png';
import UrlLogo from './Logos/url.png';
import YouTubeLogo from "./Logos/youtube.svg";

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
  youtube,
  google_reviews,
  notes,
  url,
}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const Region = process.env.REACT_APP_S3_REGION;
  const Bucket = process.env.REACT_APP_BUCKET;

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
        url: profile_image_url, // Add the URL if it's necessary for your use case
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

      return entry ? entry.data : null;
    } catch (error) {
      console.error('Error loading from IndexedDB:', error);
      return null;
    }
  };

  const fetchImage = async () => {
    try {
      // If there is no profile_image_url, skip fetching image
      if (!profile_image_url) {
        setLoading(false);
        if (onLoad) {
          onLoad();
        }
        return;
      }

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

      if (!imageBuffer) {
        console.error('Image not found in IndexedDB.');
        return;
      }

      // Set basic properties

      // Manually encode special characters in the names
      const removeDiacritics = (str) => unorm.nfkd(str).replace(/[\u0300-\u036f]/g, '');
      const decodedUsername = removeDiacritics(decodeURIComponent(username));
      const decodedTitle = removeDiacritics(decodeURI(title))
      // Set structured name with properly encoded values
      card.add('n', [decodedUsername]);

      // Set formatted name with the full, properly encoded name
      card.add('fn', [decodedUsername]);

      card.add('org', company);
      card.add('tel', phone);
      card.add('email', email);

      // Set additional properties
    

      // ...

    
      card.add('title', decodedTitle);
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
      if (youtube) {
        card.add('x-socialprofile', youtube, { type: 'Youtube' });
      }
      if (google_reviews) {
        card.add('x-socialprofile', google_reviews, { type: 'Google' });
      }
      if(notes) {
        card.add('')
      }

      // Extract the S3 key from the profile_image_url
      const urlObject = new URL(profile_image_url);
      const imageKey = decodeURIComponent(urlObject.pathname.replace(/^\//, ''));

      // Generate a pre-signed URL for the image
      const imageURL = await generatePresignedURL(imageKey);

      // Set image URL in vCard directly
      card.add('photo', imageURL);

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
        quality: 0.8, // Adjust the quality as needed
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
  
      const { maxWidth, maxHeight, quality, maxFileSize } = options;
  
      // Calculate new dimensions while maintaining the aspect ratio
      let width = image.width;
      let height = image.height;
  
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
  
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
  
      // Create a new canvas with the final dimensions
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
  
      // Draw the resized image on the canvas
      context.drawImage(image, 0, 0, width, height);
  
      // Convert the canvas content to a Blob with additional compression
      const resizedBlob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg', quality);
      });
  
      // Check if the file size is within the specified limit
      if (resizedBlob.size > maxFileSize) {
        return resizeAndCompressImage(resizedBlob, {
          maxWidth,
          maxHeight,
          quality: quality - 0.1, // Adjust compression quality
          maxFileSize,
        });
      }
  
      return resizedBlob;
    } catch (error) {
      console.error('Error resizing and compressing image:', error);
      return null;
    }
  };

  const generatePresignedURL = async (imageKey) => {
    try {
      // If there is no profile_image_url, return a default placeholder URL
      if (!profile_image_url) {
        // Replace 'https://placekitten.com/200/200' with your desired placeholder URL
        return 'https://placekitten.com/200/200';
      }

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

      // Generate a pre-signed URL
      const signedURL = await getSignedUrl(s3Client, new GetObjectCommand(params));
  
      // Fetch the image to get the base64-encoded representation
      const response = await fetch(signedURL);
      const imageBlob = await response.blob();
  
      // Convert the Blob to base64 using FileReader
      const base64EncodedImage = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(imageBlob);
      });
  
      return base64EncodedImage;
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
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-background" style={{ backgroundImage: `url(${background_image_url})` }}></div>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {profile_image_url && <img className="card-image" src={profile_image_url} alt="Profile" />}
          </>
        )}
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <p>{title}</p>
        <div className="card-buttons">
          <button onClick={saveToContacts}>Save</button>
          <button onClick={handleGetInTouch}>Get in touch</button>
        </div>
        <div className="social-icons">
          <a href={url}><img src={UrlLogo} alt="Url" focusable /></a>
          <a href={google_reviews}><img src={GoogleReviewsLogo} alt="Instagram" focusable /></a>
          {instagram && <a href={instagram}><img src={InstagramLogo} alt="Instagram" focusable /></a>}
          {facebook && <a href={facebook}><img src={FacebookLogo} alt="Facebook" focusable /></a>}
          {linkedin && <a href={linkedin}><img src={LinkedInLogo} alt="LinkedIn" focusable /></a>}
          <a href={youtube}><img src={YouTubeLogo} alt="YouTube" focusable /></a>
          <a  href={notes}><img style={{marginBottom: "10px"}} src={NotesLogo} alt="Notes" focusable /></a>
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
  profile_image_url: PropTypes.string,
  onLoad: PropTypes.func,
  card_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardComponent;
