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
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey =  process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const Region =  process.env.REACT_APP_S3_REGION;
  const Bucket =  process.env.REACT_APP_BUCKET;

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
  
      return entry ? entry.data : null;
    } catch (error) {
      console.error('Error loading from IndexedDB:', error);
      return null;
    }
  };

  const fetchImage = async () => {
    try {
      if (!profile_image_url || !background_image_url) {
        // Skip fetching image if profile URL or background image is null
        setLoading(false);
        return;
      }

      const s3Client = new S3({
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
        region: Region,
      });

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
      setImage(blob);
      setLoading(false);

      if (onLoad) {
        onLoad();
      }
    } catch (error) {
      if (profile_image_url && background_image_url) {
        console.error('Error fetching image:', error);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadImageAndSetState = async () => {
      if (!profile_image_url || !background_image_url) {
        // Skip loading image if profile URL or background image is null
        setLoading(false);

        if (onLoad) {
          onLoad();
        }

        return;
      }

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
  }, [profile_image_url, background_image_url, Bucket, Region, accessKeyId, secretAccessKey, onLoad]);

  const saveToContacts = async () => {
    // ... (unchanged)
  };

  const handleGetInTouch = () => {
    try {
      openModal();
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  };

  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-background" style={{ backgroundImage: `url(${background_image_url})` }}> </div>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Skip rendering the image if profile URL or background image is null */}
            {profile_image_url && background_image_url && <img className="card-image" src={profile_image_url} alt="Profile" />}
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
          <a href={url}><LinkIcon focusable/></a>
          <a href={url}><ReviewsIcon href="" focusable /></a>
          <a href={url}><InstagramIcon href={instagram} focusable/></a>
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