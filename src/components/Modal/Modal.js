import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Modal.css'
import axios from 'axios';




const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const {id: userId} = useParams()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  axios.post(`https://${process.env.REACT_APP_HOST}/api/${userId}/message`, formData)
  .then((res) => {
    console.log('Response Headers:', res.headers);
    if (res.status === 200) {
      alert("Message sent successfully");
      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      });
    }
  })
  .catch((err) => {
    console.log(err.response.status);
    console.log(err);
  });


    // Add your logic to handle form submission
    console.log('Form submitted:', formData);
    onClose(); // Close the modal after submission
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            <h2>GET IN TOUCH</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=''
                value={formData.name}
                onChange={handleChange}
                required
              />
               <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder=''
                value={formData.company}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=''
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder='What would you like to say?'
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
