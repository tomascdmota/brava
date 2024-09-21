import React, { useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import QRCode from 'qrcode.react';
import vcf from 'vcf';
import { openDB } from 'idb';
import unorm from 'unorm';
import axios from 'axios';

import QRCodeModal from './QRCodeModal/QRCodeModal';
import NoteModal from './NotesModal/NoteModal';
import Modal from '../../../components/Modal/Modal';

import './CardComponent.css';

// Import all logos at the top level
import GoogleReviewsLogo from './Logos/googlereview.png';
const FacebookLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465';
const InstagramLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465';
const LinkedInLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465';
const UrlLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467';
const MapsLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-google-maps-old.svg?v=1712083465';
const YouTubeLogo = "https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-youtube.svg?v=1712083465";
const PaypalLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-paypal.svg?v=1712083465';
const TiktokLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933';
const TwitterLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-twitterx.svg?v=1712083465';
const SpotifyLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify.png?v=1712083467';
const VintedLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/vinted.jpg?v=1712083466';
const NotesLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932';
const StandvirtualLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933';
const OlxLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932';
const PiscapiscaLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932';
const CustojustoLogo = 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932';

const s3Client = new S3({
  region: 'eu-west-2',
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

const initIndexedDB = async () => {
  try {
    return await openDB('brava-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('images')) {
          db.createObjectStore('images', { keyPath: 'key' });
        }
      },
    });
  } catch (error) {
    console.error('Error initializing IndexedDB:', error);
    throw error;
  }
};

const saveImageToIndexedDB = async (imageBlob, url) => {
  try {
    const db = await initIndexedDB();
    const tx = db.transaction('images', 'readwrite');
    const store = tx.objectStore('images');
    const key = 'profileImage';
    await store.put({ key, url, data: imageBlob });
    await tx.complete;
  } catch (error) {
    console.error('Error storing image in IndexedDB:', error);
  }
};

const loadImageFromIndexedDB = async () => {
  try {
    const db = await initIndexedDB();
    const entry = await db.get('images', 'profileImage');
    return entry ? entry.data : null;
  } catch (error) {
    console.error('Error loading from IndexedDB:', error);
    return null;
  }
};

const fetchImageUrl = async (imageUrl) => {
  const urlObject = new URL(imageUrl);
  const key = decodeURIComponent(urlObject.pathname.replace(/^\//, ''));
  const command = new GetObjectCommand({ Bucket: process.env.REACT_APP_BUCKET, Key: key });
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  const response = await fetch(signedUrl);
  const blob = await response.blob();
  return URL.createObjectURL(blob); // Create URL from Blob
};

const useImage = (profile_image_url) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        const cachedImage = await loadImageFromIndexedDB(); // Load from IndexedDB if needed
        if (cachedImage && isMounted) {
          setImage(URL.createObjectURL(new Blob([cachedImage])));
          setLoading(false);
          return;
        }

        // Fetch the image from S3 and set it
        const imageUrl = await fetchImageUrl(profile_image_url);
        if (isMounted) {
          setImage(imageUrl);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error in useImage:', error);
        if (isMounted) setLoading(false);
      }
    };

    loadImage();
    return () => { isMounted = false; };
  }, [profile_image_url]);

  return [image, loading];
};



const CardComponent = ({
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
}) => {
  const [image, loading] = useImage(profile_image_url);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [clickCounts, setClickCounts] = useState({});

  const mapsUrl = useMemo(() => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, [address]);

  const handleClick = useCallback((socialMedia) => {
    setClickCounts(prev => {
      const updatedCounts = { ...prev, [socialMedia]: (prev[socialMedia] || 0) + 1 };
      axios.post(`https://${process.env.REACT_APP_HOST}/api/${linkId}/leads`, updatedCounts)
        .catch((error) => console.error('Error sending click counts:', error));
      return updatedCounts;
    });
  }, [linkId]);

  const saveToContacts = useCallback(async () => {
    try {
      const card = new vcf();
      const imageBuffer = await loadImageFromIndexedDB();
  
      if (!imageBuffer) {
        console.error('Image not found in IndexedDB.');
        return;
      }
  
      const removeDiacritics = (str) => unorm.nfkd(str).replace(/[\u0300-\u036f]/g, '');
      const decodedUsername = removeDiacritics(decodeURIComponent(username));
      const decodedTitle = removeDiacritics(decodeURIComponent(title));
      const decodedNotes = removeDiacritics(decodeURIComponent(notes));
      const decodedAddress = removeDiacritics(decodeURIComponent(address));
  
      card.add('n', [decodedUsername]);
      card.add('fn', [decodedUsername]);
      card.add('org', company);
      card.add('tel', phone);
      card.add('email', email);
      card.add('title', [decodedTitle]);
      card.add('url', `https://app.bravanfc.com/${id}/cards/${card_id}`);
  
      // Add social media profiles
      const socialProfiles = { facebook, instagram, linkedin, youtube, twitter, paypal, tiktok, spotify, vinted };
      Object.entries(socialProfiles).forEach(([platform, url]) => {
        if (url) card.add('x-socialprofile', url, { type: platform.charAt(0).toUpperCase() + platform.slice(1) });
      });
  
      if (notes) card.add('note', [decodedNotes]);
      if (address) card.add('adr', [decodedAddress]);
  
      const imageURL = await getSignedUrl(s3Client, new GetObjectCommand({ Bucket: process.env.REACT_APP_BUCKET, Key: profile_image_url }));
      const encodedImage = await fetchAndEncodeImage(imageURL);
      if (encodedImage) {
        card.add('photo', profile_image_url, { encoding: 'b', type: 'image/jpeg' });
      }
  
      const vCardData = card.toString('3.0');
      const vcard_blob = new Blob([new TextEncoder().encode(vCardData)], { type: 'text/vcard;charset=utf-8' });
      
      window.location.href = URL.createObjectURL(vcard_blob);
      URL.revokeObjectURL(vcard_blob);
    } catch (error) {
      console.error('Error saving to contacts:', error);
    }
  }, [username, title, notes, address, company, phone, email, id, card_id, profile_image_url]);

  const socialIcons = useMemo(() => ({
    url: { logo: UrlLogo, alt: 'Url' },
    google_reviews: { logo: GoogleReviewsLogo, alt: 'Google Reviews' },
    instagram: { logo: InstagramLogo, alt: 'Instagram' },
    facebook: { logo: FacebookLogo, alt: 'Facebook' },
    linkedin: { logo: LinkedInLogo, alt: 'LinkedIn' },
    youtube: { logo: YouTubeLogo, alt: 'YouTube' },
    paypal: { logo: PaypalLogo, alt: 'Paypal' },
    twitter: { logo: TwitterLogo, alt: 'Twitter' },
    tiktok: { logo: TiktokLogo, alt: 'TikTok' },
    spotify: { logo: SpotifyLogo, alt: 'Spotify' },
    vinted: { logo: VintedLogo, alt: 'Vinted' },
    notes: { logo: NotesLogo, alt: 'Notes' },
    address: { logo: MapsLogo, alt: 'Maps' },
    standvirtual: { logo: StandvirtualLogo, alt: 'Standvirtual' },
    olx: { logo: OlxLogo, alt: 'OLX' },
    piscapisca: { logo: PiscapiscaLogo, alt: 'Piscapisca' },
    custojusto: { logo: CustojustoLogo, alt: 'Custojusto' }
  }), []);

  useEffect(() => {
    if (!loading && onLoad) onLoad();
  }, [loading, onLoad]);

  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-background" style={{ backgroundImage: `url(${background_image_url || 'default_background_url'})` }} />
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img className="card-image" src={profile_image_url || 'default_profile_image_url'} alt="Profile" loading="lazy" />
        )}
      </div>
      <div className="card-body">
        <h5>{username}</h5>
        <h3><span>{company}</span></h3>
        <p>{title}</p>
        <CardButtons saveToContacts={saveToContacts} openModal={() => setIsModalOpen(true)} />
        <SocialIcons
          socialIcons={socialIcons}
          socialLinks={{ url, google_reviews, instagram, facebook, linkedin, youtube, paypal, twitter, tiktok, spotify, vinted, notes, address: mapsUrl, standvirtual, olx, piscapisca, custojusto }}
          handleClick={handleClick}
          openNotes={() => setIsNotesOpen(true)}
        />
        <div className="qr-code-container" onClick={() => setShowQRCode(true)}>
          <QRCode value={`https://app.bravanfc.com/${id}/cards/${card_id}`} style={{ height: "55px", width: "55px", borderRadius: "10px" }} />
        </div>
      </div>
      <p style={{color:'white'}}>Powered by <a style={{color:'white'}} href="https://bravanfc.com" target='_blank' rel="noopener noreferrer">BRAVA</a></p>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <NoteModal isOpen={isNotesOpen} background_image={background_image_url} profile_image_url={profile_image_url} closeModal={() => setIsNotesOpen(false)} notes={notes} />
      <QRCodeModal isOpen={showQRCode} onClose={() => setShowQRCode(false)} id={id} card_id={String(card_id)} />
    </div>
  );
};

CardComponent.propTypes = {
  card_id: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profile_image_url: PropTypes.string,
  background_image_url: PropTypes.string,
  onLoad: PropTypes.func,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
  google_reviews: PropTypes.string,
  address: PropTypes.string,
  youtube: PropTypes.string,
  notes: PropTypes.string,
  url: PropTypes.string,
  paypal: PropTypes.string,
  tiktok: PropTypes.string,
  twitter: PropTypes.string,
  spotify: PropTypes.string,
  vinted: PropTypes.string,
  standvirtual: PropTypes.string,
  olx: PropTypes.string,
  piscapisca: PropTypes.string,
  custojusto: PropTypes.string,
  linkId: PropTypes.string.isRequired,
};

export default React.memo(CardComponent);

// CardButtons component
const CardButtons = React.memo(({ saveToContacts, openModal }) => (
  <div className="card-buttons">
    <button onClick={saveToContacts}>SAVE CONTACT</button>
    <button className="fab" onClick={openModal}>EXCHANGE CONTACT</button>
  </div>
));

CardButtons.propTypes = {
  saveToContacts: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

// SocialIcons component
const SocialIcons = React.memo(({ socialIcons, socialLinks, handleClick, openNotes }) => (
  <div className="social-icons-container">
    <div className="social-icons">
      {Object.entries(socialLinks).map(([platform, link]) => {
        if (!link) return null;
        const { logo, alt } = socialIcons[platform];
        const onClick = platform === 'notes' ? openNotes : () => handleClick(platform);
        const href = platform === 'notes' ? undefined : link;
        return (
          <a key={platform} href={href} onClick={onClick}>
            <img rel='preload' loading="lazy" src={logo} alt={alt} />
          </a>
        );
      })}
    </div>
  </div>
));

SocialIcons.propTypes = {
  socialIcons: PropTypes.object.isRequired,
  socialLinks: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  openNotes: PropTypes.func.isRequired,
};

// Utility functions

const fetchAndEncodeImage = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    return await resizeAndCompressImage(imageBlob, {
      maxWidth: 800,
      maxHeight: 800,
      quality: 0.9,
    });
  } catch (error) {
    console.error('Error fetching, resizing, and encoding image:', error);
    return null;
  }
};

const resizeAndCompressImage = async (blob, options) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const { maxWidth, maxHeight, quality } = options;
      let [width, height] = [img.width, img.height];

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        },
        'image/jpeg',
        quality
      );
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
};