import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import './cardcomponent.css';
import { SocialIcon } from 'react-social-icons'

function CardComponent({ email, phone, company, title, profile_image_url, onLoad, facebook, linkedin, instagram, url }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessKeyId = 'AKIAS74Z5OF3XZBMVMOE';
  const secretAccessKey = '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';
  const region = 'eu-west-2';
  const Bucket = 'brava-bucket';

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const s3Client = new S3({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region: 'eu-west-2',
        });

        const key = new URL(profile_image_url).pathname.replace(/^\//, '');
        const getObjectParams = {
          Bucket,
          Key: encodeURIComponent(key),
        };

        const command = new GetObjectCommand(getObjectParams);
        const response = await s3Client.send(command);

        // ReadableStream to Uint8Array
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

        // Convert Uint8Array to Blob
        const blob = new Blob([imageBuffer], { type: response.ContentType });

        const imageUrl = URL.createObjectURL(blob);

        setImage(imageUrl);
        setLoading(false);

        // Callback to notify that the card is loaded
        if (onLoad) {
          onLoad();
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [profile_image_url, Bucket, region, accessKeyId, secretAccessKey, onLoad]);

  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
      <div className="card-component-header">
        
          <img className='card-image' src={image} alt="Profile" />
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <p>{title}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <SocialIcon href={facebook} bgColor='transparent' fgColor='black' style={{height: "55px", borderTop: "none"}}  network='facebook' target='blank'/>
        <SocialIcon href={instagram} bgColor='transparent' fgColor='black' style={{height: "55px", borderTop: "none"}} network='instagram' target='blank'/>
        <SocialIcon href={linkedin} bgColor='transparent' fgColor='black' style={{height: "55px", borderTop: "none"}} network='linkedin' target='blank'/>
        <SocialIcon href={url} bgColor='transparent' fgColor='black' style={{height: "55px", borderTop: "none"}} network='sharethis' target='blank'/>
      
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
};

export default CardComponent;