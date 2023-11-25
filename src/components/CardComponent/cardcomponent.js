import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { S3, GetObjectCommand } from '@aws-sdk/client-s3';

function CardComponent({ email, phone, company, profile_image_url }) {
  const [image, setImage] = useState(null);
  const accessKeyId = "AKIAS74Z5OF3XZBMVMOE";
  const secretAccessKey = "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";
  const region = "eu-west-2";
  const Bucket = "brava-bucket";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const s3Client = new S3({
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
          region: "eu-west-2"
        });

        const key = new URL(profile_image_url).pathname.replace(/^\//, '');
        const getObjectParams = {
          Bucket,
          Key: encodeURIComponent(key),
        };

        const command = new GetObjectCommand(getObjectParams);
        const response = await s3Client.send(command);

        const imageInfo = imageType(await response.Body.getReader().read());
        const imageType = response.ContentType; // Adjust if necessary
        const blob = new Blob([response.Body], { type: imageInfo.mime });
        const imageUrl = URL.createObjectURL(blob);

        setImage(imageUrl);

        // Log the rendered HTML of the image element
        
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
   
    fetchImage();

    return () => {
      if(image) {
        URL.revokeObjectURL(image);
      }
    }
  }, [profile_image_url, Bucket, region, accessKeyId, secretAccessKey]);
  useEffect(() => {
    // Log the rendered HTML of the image element
    console.log('Rendered HTML of Image:', document.querySelector('.card-header img'));

    // Check for any errors in the console
    const errorMessages = document.querySelector('.card-header img').outerHTML.match(/<img .*?alt="Profile".*?>/i);
    if (errorMessages) {
      console.error('Image Error Messages:', errorMessages);
    }
  }, [image]);

  return (
    <div className="card">
      <div className="card-header">
        {/* Log the imageUrl to the console */}
        {console.log('Render Image URL:', image)}
        <img src={image} alt="Profile" />
      </div>
      <div className="card-body">
        <h3>{company}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

CardComponent.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  profile_image_url: PropTypes.string.isRequired,
};

export default CardComponent;