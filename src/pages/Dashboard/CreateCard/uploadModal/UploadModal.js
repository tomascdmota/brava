import React, { useState } from 'react';
import "./UploadModal.scss";

const UploadModal = ({ handleCloseModal, handleImagesUpload }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleBackgroundImageChange = (e) => {
    if (e && e.target && e.target.files && e.target.files.length > 0) {
      setBackgroundImage(e.target.files[0]);
    } else {
      console.error('Event object or its properties are undefined.');
    }
  };
  
  
  const handleSubmit = () => {
    // Pass the selected images to the parent component
    handleProfilePictureChange(profilePicture);
    handleBackgroundImageChange(backgroundImage);
    
    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="upload-modal">
      <button className="modal-close-button" onClick={handleCloseModal}>
        &times;
      </button>
      <h2 className="title">Profile Picture</h2>
      <h3 className="subtitle">Upload your profile picture</h3>
      <div className="profile-picture-container">
        <input
          name="profilePicture"
          id="profilePictureInput"
          type="file" // Change input type to "file"
          onChange={handleProfilePictureChange} // Use handleProfilePictureChange
          className="file-input"
        />
        <label htmlFor="profilePictureInput" className="file-label">
          Profile Picture
        </label>
      </div>
      <h2 className="title">Background Image</h2>
      <h3 className="subtitle">Upload your background image</h3>
      <div className="background-image-container">
        <input
          name="background_image"
          id="backgroundImageInput"
          type="file" // Change input type to "file"
          onChange={handleBackgroundImageChange} // Use handleBackgroundImageChange
          className="file-input"
        />
        <label htmlFor="backgroundImageInput" className="file-label">
          Background Image
        </label>
      </div>
      <input
        type="button"
        name="submit"
        className="submit action-button"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default UploadModal;
