import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import QRCode from 'qrcode.react'; 
import QRCodeModal from './QRCodeModal/QRCodeModal';
import vcf from 'vcf';
import { openDB } from 'idb';
import unorm from 'unorm';
import NoteModal from './NotesModal/NoteModal';
import Modal from '../../../components/Modal/Modal';
import GoogleReviewsLogo from './Logos/googlereview.png';
import './CardComponent.css';
import axios from 'axios';


const  FacebookLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465';
const InstagramLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465';
const LinkedInLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465';
const UrlLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467';
const MapsLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-google-maps-old.svg?v=1712083465';
const YouTubeLogo = "https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-youtube.svg?v=1712083465";
const PaypalLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-paypal.svg?v=1712083465'
const TiktokLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933'
const TwitterLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-twitterx.svg?v=1712083465'
const SpotifyLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify.png?v=1712083467'
const VintedLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/vinted.jpg?v=1712083466'
const NotesLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932'
const StandvirtualLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933'
const OlxLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932'
const PiscapiscaLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932'
const CustojustoLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932'


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
  vinted,
  standvirtual,
  olx,
  piscapisca,
  custojusto,
  linkId
}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  
  let mapsUrl;

  const [clickCounts, setClickCounts] = useState({
    google_reviews: 0,
    instagram: 0,
    facebook: 0,
    linkedin: 0,
    youtube: 0,
    paypal: 0,
    twitter: 0,
    tiktok: 0,
    spotify: 0,
    vinted: 0,
    notes: 0,
    address: 0,
    standvirtual: 0,
    olx: 0,
    piscapisca: 0,
    custojusto: 0,
    url: 0
  });

  useEffect(() => {
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
  }, [profile_image_url]);

  const openQRCodeModal = () => {
    setShowQRCode(true);
  };

  const closeQRCodeModal = () => {
    setShowQRCode(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openGoogleMaps = () => {
    mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
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
      const key = 'profileImage';
      const data = {
        key,
        url: profile_image_url,
        data: imageBlob,
      };
      store.put(data);
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
      const imageUrl = profile_image_url;
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      saveImageToIndexedDB(blob);
      setImage(blob);
      setLoading(false);
      if (onLoad) {
        onLoad();
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result); // This will return the Base64 string
      };
      reader.onerror = () => {
        reject(new Error('Failed to read blob as Base64.'));
      };
      reader.readAsDataURL(blob); // Read the Blob as a data URL
    });
  };

  const saveToContacts = async () => {
    try {
      const card = new vcf();
      const imageBuffer = await loadImageFromIndexedDB();
  
      // Check if the image was found in IndexedDB
      if (!imageBuffer) {
        console.error('Image not found in IndexedDB.');
        return;
      }
  
      // Convert the image Blob to a Base64 string
      const base64Image = await convertBlobToBase64(imageBuffer);
      console.log('Base64 Image:', base64Image); // Log the Base64 image
  
      // Function to remove diacritics from a string
      const removeDiacritics = (str) => unorm.nfkd(str).replace(/[\u0300-\u036f]/g, '');
  
      // Decode fields from the URL and remove diacritics
      const decodedUsername = removeDiacritics(decodeURIComponent(username));
      const decodedTitle = removeDiacritics(decodeURIComponent(title));
      const decodedNotes = removeDiacritics(decodeURIComponent(notes));
      const decodedAddress = removeDiacritics(decodeURIComponent(address));
  
      // Add standard vCard fields
      card.add('n', [decodedUsername]);
      card.add('fn', [decodedUsername]);
      card.add('org', company);
      card.add('tel', phone);
      card.add('email', email);
      card.add('title', [decodedTitle]);
      card.add('url', `https://app.bravanfc.com/${id}/cards/${card_id}`);
  
      // Add the profile image in Base64 format if it exists
      if (base64Image) {
        const imageBase64 = base64Image.split(',')[1]; // Remove the data URL prefix
        card.add('photo', `;ENCODING=BASE64;TYPE=JPEG:${imageBase64}`);
      }
  
      // Add social profiles only if they exist
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
      if (notes) {
        card.add('note', [decodedNotes]);
      }
      if (twitter) {
        card.add('x-socialprofile', twitter, { type: 'Twitter' });
      }
      if (paypal) {
        card.add('x-socialprofile', paypal, { type: 'Paypal' });
      }
      if (tiktok) {
        card.add('x-socialprofile', tiktok, { type: 'TikTok' });
      }
      if (spotify) {
        card.add('x-socialprofile', spotify, { type: 'Spotify' });
      }
      if (vinted) {
        card.add('x-socialprofile', vinted, { type: 'Vinted' });
      }
      if (olx) {
        card.add('x-socialprofile', olx, { type: 'Olx' });
      }
      if (standvirtual) {
        card.add('x-socialprofile', standvirtual, { type: 'standvirtual' });
      }
      if (piscapisca) {
        card.add('x-socialprofile', piscapisca, { type: 'piscapisca' });
      }
      if (custojusto) {
        card.add('x-socialprofile', custojusto, { type: 'custojusto' });
      }
  
      // Add the address
      card.add('adr', [decodedAddress]);
  
      // Convert the card to a string and log it
      const vCardData = card.toString('3.0');
      console.log(vCardData);
  
      // Create a Blob from the vCard data and initiate download
      const vcard_blob = new Blob([new TextEncoder().encode(vCardData)], {
        type: 'text/vcard;charset=utf-8',
      });
      window.location.href = URL.createObjectURL(vcard_blob);
      URL.revokeObjectURL(vcard_blob);
    } catch (error) {
      console.error('Error saving to contacts:', error);
    }
  };
  

  const handleCloseNotes = () => {
    setIsNotesOpen(false);
  };

  const handleOpenNotes = () => {
    setIsNotesOpen(true);
  };

  const handleGetInTouch = () => {
    try {
      openModal();
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  };

  const handleClick = (socialMedia) => {
    const updatedCounts = { ...clickCounts, [socialMedia]: clickCounts[socialMedia] + 1 };
    setClickCounts(updatedCounts);
    axios.post(`https://${process.env.REACT_APP_HOST}/api/${linkId}/leads`, updatedCounts)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error sending click counts:', error);
      });
  };


  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-background" fetchpriority="high" style={{ backgroundImage: `url(${background_image_url || 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava_Front4-removebg-preview.png?v=1712164655'})` }}></div>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img className="card-image" rel='preload' loading="lazy" fetchpriority="high" src={profile_image_url || 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195'} alt="Profile" />
          </>
        )}
      </div>
      <div className="card-body">
        <h5>{username}</h5>
          <h3><span>{company}</span></h3>
          <p>{title}</p>
        <div className="card-buttons">
          <button onClick={saveToContacts}>SAVE CONTACT</button>
        <button className="fab" onClick={handleGetInTouch}>
          EXCHANGE CONTACT
        </button>
        </div>
        <div className="social-icons-container"> 
        <div className="social-icons">
     
        
        <div className="qr-code-container" onClick={openQRCodeModal}>
        <QRCode
          value={`https://app.bravanfc.com/${id}/cards/${card_id}`}
          style={{ height: "55px", width: "55px", borderRadius:"10px" }}
        />
         </div>
         {url && <a href={url} onClick={() => handleClick('url')}><img rel='preload' className="url" loading="lazy" src={UrlLogo} alt="Url" focusable /></a>}
      {google_reviews && <a href={google_reviews} onClick={() => handleClick('google_reviews')}><img rel='preload' loading="lazy" src={GoogleReviewsLogo} alt="Instagram" focusable /></a>}
      {instagram && <a href={instagram} onClick={() => handleClick('instagram')}><img rel='preload' loading="lazy" src={InstagramLogo} alt="Instagram" focusable /></a>}
      {facebook && <a href={facebook} onClick={() => handleClick('facebook')}><img rel='preload' loading="lazy" src={FacebookLogo} alt="Facebook" focusable /></a>}
      {linkedin && <a href={linkedin} onClick={() => handleClick('linkedin')}><img rel='preload' loading="lazy" src={LinkedInLogo} alt="LinkedIn" focusable /></a>}
      {youtube && <a href={youtube} onClick={() => handleClick('youtube')}><img rel='preload' loading="lazy" src={YouTubeLogo} alt="YouTube" focusable /></a>}
      {paypal && <a href={paypal} onClick={() => handleClick('paypal')}><img rel='preload' loading="lazy" src={PaypalLogo} alt="Paypal" focusable /></a>}
      {twitter && <a href={twitter} onClick={() => handleClick('twitter')}><img rel='preload' loading="lazy" src={TwitterLogo} alt="Twitter" focusable /></a>}
      {tiktok && <a href={tiktok} onClick={() => handleClick('tiktok')}><img rel='preload' loading="lazy" src={TiktokLogo} alt="TikTok" focusable  style={{ height: "80px", width: "80px"}} /></a>}
      {spotify && <a  href={spotify} onClick={() => handleClick('spotify')}><img rel='preload' className='spotify' loading="lazy" src={SpotifyLogo} alt="Spotify" focusable /></a>}
      {vinted && <a  href={vinted} onClick={() => handleClick('vinted')}><img rel='preload' className='spotify' loading="lazy" src={VintedLogo} alt="Vinted" focusable style={{ borderRadius:"20px"}} /></a>}
      {notes && <a onClick={() => {handleClick('notes'); handleOpenNotes()}}><img rel='preload' loading="lazy"style={{ height:"60px"}} src={NotesLogo} alt="Notes" focusable /></a>}
    {address && <a href={mapsUrl} onClick={() => {handleClick('address'); openGoogleMaps()}}><img rel='preload' loading='lazy' src={MapsLogo}  alt='Maps' focusable/></a>}
      {standvirtual && <a href={standvirtual} onClick={() => handleClick('standvirtual')}><img rel='preload' loading='lazy' src={StandvirtualLogo} style={{height:"60px", borderRadius:"10px"}} alt='standvirtual' focusable/></a>}
      {olx && <a href={olx} onClick={() => handleClick('olx')}><img rel='preload' loading='lazy' src={OlxLogo} alt='olx' focusable style={{height:"60px", borderRadius:"10px"}}/></a>}
      {piscapisca && <a href={piscapisca} onClick={() => handleClick('piscapisca')}><img rel='preload' loading='lazy' src={PiscapiscaLogo} alt='piscapisca' focusable style={{height:"60px", borderRadius:"10px"}}/></a>}
      {custojusto && <a href={custojusto} onClick={() => handleClick('custojusto')}><img rel='preload' loading='lazy' src={CustojustoLogo} alt='custojusto' focusable style={{height:"60px", borderRadius:"10px"}}/></a>}
        </div>
      </div>
      </div>
      <p style={{color:'white'}}>Powered by <a style={{color:'white'}} href="https://bravanfc.com" target='_blank'>BRAVA</a></p>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NoteModal isOpen={isNotesOpen} background_image={background_image_url} profile_image_url={profile_image_url} closeModal={handleCloseNotes} notes={notes} />
      <QRCodeModal
        isOpen={showQRCode}
        onClose={closeQRCodeModal}
        id={id}
        card_id={String(card_id)}
      />

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