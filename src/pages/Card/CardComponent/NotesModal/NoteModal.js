import React from 'react';
import './NoteModal.scss';
import axios from 'axios';

const NoteModal = ({ isOpen, closeModal, notes, background_image, loading, profile_image_url }) => {

  return (
    <>
      {isOpen && (
        <div className="note-modal">
          <div className="note-modal-background" onClick={closeModal}></div>
          <div className="note-modal-content">
            <button className="modal-close" onClick={closeModal}>X</button> {/* Close button */}
            <div className="note-card-component-header">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <img className="note-card-image" rel='preload' loading="lazy" src={profile_image_url || 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195'} alt="Profile" />
                </>
              )}
            </div>
            <div className="note-box">
              <img src={background_image}/>
              <h1>Extra Information</h1>
              <p>{notes}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
