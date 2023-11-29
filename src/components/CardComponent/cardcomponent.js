import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';
import './cardcomponent.css';

function CardComponent({
  email,
  card_id,
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
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID; // Replace with your AWS access key
  const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY; // Replace with your AWS secret key
  const Bucket = process.env.REACT_APP_BUCKET;
  const Region = process.env.REACT_APP_S3_REGION;

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async (imageType, imageUrl, setImageCallback) => {
      try {
        const s3Client = new S3({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region: Region,
        });

        const key = new URL(imageUrl).pathname.replace(/^\//, '');
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

        const imageObjectURL = URL.createObjectURL(blob);

        setImageCallback(imageObjectURL);
      } catch (error) {
        console.error(`Error fetching ${imageType} image:`, error);
      }
    };

    const fetchProfileImage = () => {
      fetchImage('profile', profile_image_url, setProfileImage);
    };

    const fetchBackgroundImage = () => {
      fetchImage('background', background_image_url, setBackgroundImage);
    };

    const fetchImages = async () => {
      await Promise.all([fetchProfileImage(), fetchBackgroundImage()]);

      setLoading(false);

      if (onLoad) {
        onLoad();
      }
    };

    fetchImages();

    return () => {
      isMounted = false;

      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }

      if (backgroundImage) {
        URL.revokeObjectURL(backgroundImage);
      }
    };
  }, [profile_image_url, background_image_url, Bucket, Region, accessKeyId, secretAccessKey, onLoad]);

  return (
    <div className={`card-component ${loading ? 'loading' : ''}`}>
       <div className="card-background"  style={{ backgroundImage: `url(${backgroundImage})` }}> </div>
      <div className="card-component-header">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img className="card-image" src={profileImage} alt="Profile" />
        )}
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <p>{title}</p>
        <p>{email}</p>
        <p>{phone}</p>
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