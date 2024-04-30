import React, { useState } from 'react';
import './ContactComponent.scss';

function ContactComponent({ user_id, contact_id, name, company, email, message, contact_date, phone, sector }) {
  const isMobile = window.innerWidth <= 1000;
  const formattedDate = new Date(contact_date).toLocaleDateString();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="contacts">
      <div className="contact">
        <dl className="contact-details">
          <div>
            <dt>{name}, {company}</dt>
          </div>
          <div>
            <dd style={{marginRight:"80px"}}>{email}</dd>
          </div>
          <div>
            <dd>{phone}</dd>
          </div>
          <div>
            <dd>{sector}</dd>
          </div>
          {!isMobile && (
            <div>
              <dd style={{marginLeft:'-10px'}}>{formattedDate}</dd>
            </div>
          )}
          <div className={`contact-message ${isMobile ? 'full-width-message' : ''}`}>
            <dt>
                <button onClick={toggleModal}>Read Message</button>
            </dt>
          </div>
        </dl>
      </div>
      {isModalOpen && (
      <div className="lead-modal">
      <div className="lead-modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <h2 className='lead-modal-name'>Message</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          {phone && (
            <button onClick={() => window.location.href = `tel:${phone}`}>Call {name}</button>
          )}
          {email && (
            <button onClick={() => window.location.href = `mailto:${email}`}>Email {email}</button>
          )}
        </div>
      </div>
    </div>
      )}
    </div>
  );
}

export default ContactComponent;
