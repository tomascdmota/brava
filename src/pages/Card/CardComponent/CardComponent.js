import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import vcf from 'vcf';
import './CardComponent.css';

function CardComponent({
  email,
  username,
  phone,
  company,
  title,
  profile_image_url,
  onLoad,
  facebook,
  linkedin,
  instagram,
  url,
}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessKeyId = "AKIAS74Z5OF3XZBMVMOE";
  const secretAccessKey = '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'; 
  const Region = 'eu-west-2';
  const Bucket = 'brava-bucket';

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      try {
        const s3Client = new S3({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region: Region,
        });

        const key = new URL(profile_image_url).pathname.replace(/^\//, '');
        const getObjectParams = {
          Bucket,
          Key: encodeURIComponent(key),
        };

        const command = new GetObjectCommand(getObjectParams);
        const response = await s3Client.send(command);

        if (!isMounted) {
          return;
        }

        const chunks = [];
        const streamReader = response.Body.getReader();

        while (true) {
          const { done, value } = await streamReader.read();

          if (done) {
            break;
          }

          chunks.push(value);
        }

        const arrayBuffer =
          chunks.length > 1 ? chunks.reduce((a, b) => [...a, ...b]) : chunks[0];
        const imageBuffer = new Uint8Array(arrayBuffer);

        const blob = new Blob([imageBuffer], { type: response.ContentType });
        const imageUrl = URL.createObjectURL(blob);

        setImage(imageUrl);
        setLoading(false);

        if (onLoad) {
          onLoad();
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;

      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [profile_image_url, Bucket, Region, accessKeyId, secretAccessKey, onLoad]);

  const saveToContacts = async () => {
    try {
      const card = vcf();

      // Set basic properties
      card.set('fn', username);
      card.set('organization', company);
      card.set('tel', phone, { type: 'work' });
      card.set('email', email, { type: 'work' });

      // Set additional properties
      card.set('title', title);
      card.set('url', url);

      // Set social media properties
      card.set('facebook', facebook);
      card.set('instagram', instagram);
      card.set('linkedin', linkedin);

      // Set image as a custom property
      if (image) {
        // Convert the image data to base64
        const base64Image = await fetch(image).then((response) => response.blob()).then((blob) => new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.readAsDataURL(blob);
        }));

        card.set('x-photo', base64Image);
      }

      // Generate vCard data as a string
      const vCardData = card.toString('3.0'); // Specify the vCard version, e.g., '3.0' or '4.0'

      // Create a Blob from the vCard data
      const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });

      // Create a data URI from the Blob
      const blobUrl = URL.createObjectURL(blob);

      // Open a new URL to prompt the user to add the contact
      window.open(blobUrl);
    } catch (error) {
      console.error('Error saving to contacts:', error);
    }
  };

  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img className="card-image" src={image} alt="Profile" />
        )}
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <p>{title}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <div className='card-buttons'>
          <button onClick={saveToContacts}>Save</button>
          <button >Get in touch</button>
        </div>
        <SocialIcon
          href={facebook}
          bgColor="transparent"
          fgColor="#9003c4"
          style={{ height: '55px', borderTop: 'none' }}
          network="facebook"
          target="_blank"
        />
        <SocialIcon
          href={instagram}
          bgColor="transparent"
          fgColor="#9003c4"
          style={{ height: '55px', borderTop: 'none' }}
          network="instagram"
          target="_blank"
        />
        <SocialIcon
          href={linkedin}
          bgColor="transparent"
          fgColor="#9003c4"
          style={{ height: '55px', borderTop: 'none' }}
          network="linkedin"
          target="_blank"
        />
        <SocialIcon
          href={url}
          bgColor="transparent"
          fgColor="#9003c4"
          style={{ height: '55px', borderTop: 'none' }}
          network="sharethis"
          target="_blank"
        />
      </div>
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