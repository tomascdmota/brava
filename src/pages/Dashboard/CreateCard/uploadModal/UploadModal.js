import React, { useState } from 'react';
import "./UploadModal.scss";

const UploadModal = ({ handleCloseModal }) => {
  const [profilePictureLabel, setProfilePictureLabel] = useState('Upload Profile Picture');
  const [backgroundImageLabel, setBackgroundImageLabel] = useState('Upload Background Image');

  const handleImageChangeAndSave = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePictureLabel(file.name);
      saveImageToLocalStorage(file, 'profileImageURL');
    }
  };
  
  const saveImageToLocalStorage = (file, localStorageKey) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      localStorage.setItem(localStorageKey, event.target.result);
    };
    reader.readAsDataURL(file);
  };
  
  
  const handleImageChangesAndSave = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImageLabel(file.name);
      saveImageToLocalStorage(file, 'backgroundImageURL');
    }
  };

  const handleSubmit = () => {
    // Reset old items in localStorage
    localStorage.removeItem('profileImageUrl');
    localStorage.removeItem('backgroundImageUrl');
  
    // Save new items to localStorage
    const profilePictureFileInput = document.getElementById('profilePictureInput');
    const backgroundImageFileInput = document.getElementById('backgroundImageInput');
  
    if (profilePictureFileInput && profilePictureFileInput.files.length > 0) {
      const profilePictureFile = profilePictureFileInput.files[0];
      localStorage.setItem('profileImageUrl', profilePictureFile.name); // Changed from 'profilePicture' to 'profileImageUrl'
      console.log('Profile Picture saved to localStorage:', profilePictureFile.name);
    }
  
    if (backgroundImageFileInput && backgroundImageFileInput.files.length > 0) {
      const backgroundImageFile = backgroundImageFileInput.files[0];
      localStorage.setItem('backgroundImageUrl', backgroundImageFile.name); // Changed from 'backgroundImage' to 'backgroundImageUrl'
      console.log('Background Image saved to localStorage:', backgroundImageFile.name);
    }
  
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
          type="file"
          name="profilePicture"
          id="profilePictureInput"
          accept="image/*"
          onChange={handleImageChangeAndSave}
          className="file-input"
        />
        <label htmlFor="profilePictureInput" className="file-label">
          {profilePictureLabel}
        </label>
      </div>
      <h2 className="title">Background Image</h2>
      <h3 className="subtitle">Upload your background image</h3>
      <div className="profile-picture-container">
        <input
          type="file"
          name="backgroundImage"
          id="backgroundImageInput"
          accept="image/*"
          onChange={handleImageChangesAndSave}
          className="file-input"
        />
        <label htmlFor="backgroundImageInput" className="file-label">
          {backgroundImageLabel}
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
