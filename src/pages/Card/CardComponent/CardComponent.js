import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import vcf from 'vcf';
import { openDB } from 'idb';
import unorm from 'unorm';
import Modal from '../../../components/Modal/Modal';
import NotesLogo from './Logos/notes.png';
import GoogleReviewsLogo from './Logos/googlereview.png';
import './CardComponent.css';


const  FacebookLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465';
const InstagramLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465';
const LinkedInLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465';
const UrlLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467';
const MapsLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-google-maps-old.svg?v=1712083465';
const YouTubeLogo = "https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-youtube.svg?v=1712083465";
const PaypalLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-paypal.svg?v=1712083465'
const TiktokLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-tiktok.svg?v=1712083465'
const TwitterLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-twitterx.svg?v=1712083465'
const SpotifyLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify.png?v=1712083467'
const VintedLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/vinted.jpg?v=1712083466'




function CardComponent({
  card_id,
  id,
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
  google_reviews,
  address,
  youtube,
  notes,
  url,
  paypal,
  tiktok,
  twitter,
  spotify,
  vinted
}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey =  process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const Region =  process.env.REACT_APP_S3_REGION;
  const Bucket =  process.env.REACT_APP_BUCKET;
  let mapsUrl;
  console.log(id)

  useEffect(() => {
    console.log('CardComponent useEffect triggered');
  
    let isMounted = true;
  
    const loadImageAndSetState = async () => {
  
      const imageBuffer = await loadImageFromIndexedDB();
  
      if (isMounted) {
        if (imageBuffer) {
          const blob = new Blob([imageBuffer], { type: 'image/jpg' });
          setImage(blob);
          setLoading(false);
        } else {
          fetchImage();
        }
      }
    };
  
    loadImageAndSetState();
  
    return () => {
      isMounted = false;
  
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, []);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openGoogleMaps = () => {
    // Construct the Google Maps URL with the address as a query parameter
     mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;

    // Open a new window or tab with the Google Maps URL
    window.open(mapsUrl, '_blank');
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
  
      if (!imageBuffer) {
        console.error('Image not found in IndexedDB.');
        return;
      }
  
      // Set basic properties
  
      // Manually encode special characters in the names
      const removeDiacritics = (str) => unorm.nfkd(str).replace(/[\u0300-\u036f]/g, '');
      const decodedUsername = removeDiacritics(decodeURIComponent(username));
      const decodedTitle = removeDiacritics(decodeURIComponent(title));
      const decodedNotes = removeDiacritics(decodeURIComponent(notes))
      const decodedAddress = removeDiacritics(decodeURIComponent(address))
      // Set structured name with properly encoded values
      card.add('n', [decodedUsername]);
  
      // Set formatted name with the full, properly encoded name
      card.add('fn', [decodedUsername]);
  
      card.add('org', company);
      card.add('tel', phone);
      card.add('email', email);
  
      // Set additional properties
      card.add('title', [decodedTitle]);
      card.add('url', `https://app.bravanfc.com/${id}/cards/${card_id}`);
  
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
      if(notes) {
        card.add('note', [decodedNotes])
      }
      if(twitter){
        card.add('x-socialprofile', twitter, {type: 'Twitter'});
      }
      if(paypal){
        card.add('x-socialprofile', paypal, {type: "Paypal"});
      }
      if(tiktok){
        card.add('x-socialprofile', tiktok, {type: "TikTok"});
      }
      if(spotify){
        card.add('x-socialprofile', spotify, {type: "Spotify"});
      }
      if(vinted){
        card.add('x-socialprofile', vinted, {type: "Vinted"});
      }
  
  
      // Set address
      card.add('adr', [decodedAddress]);

      // Extract the S3 key from the profile_image_url
      const urlObject = new URL(profile_image_url);
      const imageKey = decodeURIComponent(urlObject.pathname.replace(/^\//, ''));
  
      // Generate a pre-signed URL for the image
      const imageURL = await generatePresignedURL(imageKey);
  
      const encodedImage = await fetchAndEncodeImage(imageURL);
      if (!encodedImage) {
        console.error('Error fetching and encoding image.');
        return;
      }
  
      // Set image in vCard
      card.add('photo', encodedImage, { encoding: 'b', type: 'image/jpeg' });
  
      // Generate vCard data as a string
      const vCardData = card.toString('3.0');
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
       // Redirect the user to the vCard file
    window.location.href = URL.createObjectURL(vcard_blob);

    // Release the object URL
    URL.revokeObjectURL(vcard_blob);
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
        maxWidth: 800,
        maxHeight: 800,
        quality: 0.9, // Adjust the quality as needed
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
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-background" style={{ backgroundImage: `url(${background_image_url})` }}></div>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {profile_image_url && <img className="card-image" rel='preload'  loading="lazy" src={profile_image_url} alt="Profile" />}
          </>
        )}
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <h5>{username}</h5>
        <p>{title}</p>
        <div className="card-buttons">
          <button onClick={saveToContacts}>Save</button>
        <button className="fab" onClick={handleGetInTouch}>
          Get in touch
        </button>
        </div>
        <div className="social-icons">
          {url && <a href={url}><img rel='preload' className="url" loading="lazy" src={UrlLogo} alt="Url" focusable /></a>}
          {google_reviews && <a href={google_reviews}><img rel='preload' loading="lazy" src={GoogleReviewsLogo} alt="Instagram" focusable /></a>}
          {instagram && <a href={instagram}><img rel='preload' loading="lazy"src={InstagramLogo} alt="Instagram" focusable /></a>}
          {facebook && <a href={facebook}><img rel='preload' loading="lazy"src={FacebookLogo} alt="Facebook" focusable /></a>}
          {linkedin && <a href={linkedin}><img rel='preload' loading="lazy"src={LinkedInLogo} alt="LinkedIn" focusable /></a>}
          {youtube && <a href={youtube}><img rel='preload' loading="lazy"src={YouTubeLogo} alt="YouTube" focusable /></a>}
          {paypal &&<a href={paypal}><img rel='preload' loading="lazy"src={PaypalLogo} alt="Paypal" focusable /></a>}
          {twitter &&<a href={twitter}><img rel='preload' loading="lazy"src={TwitterLogo} alt="Twitter" focusable /></a>}
          {tiktok &&<a href={tiktok}><img rel='preload' loading="lazy"src={TiktokLogo} alt="TikTok" focusable /></a>}
          {spotify &&<a  href={spotify}><img rel='preload' className='spotify' loading="lazy"src={SpotifyLogo} alt="Spotify" focusable /></a>}
          {vinted &&<a  href={vinted}><img rel='preload' className='spotify' loading="lazy"src={VintedLogo} alt="Vinted" focusable /></a>}
          {notes && <a  href={notes}><img rel='preload' loading="lazy"style={{marginBottom: "10px"}} src={NotesLogo} alt="Notes" focusable /></a>}
          {address && <a href={mapsUrl} onClick={openGoogleMaps}><img rel='preload' loading='lazy' src={MapsLogo} alt='Maps' focusable/></a>}
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