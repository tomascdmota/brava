import React, { useState } from 'react';
import { useParams } from 'react-router';
import './SocialMediaModal.css'
import axios from 'axios';







function SocialMediaModal({isOpen, onClose}) {

    const [selectedSocials, setSelectedSocials] = useState({
        googleReview: '',
        instagram: '',
        facebook: '',
        url: '',
        tiktok: '',
        twitter: '',
        youtube: '',
        portfolio1: '',
        portfolio2: '',
        portfolio3: '',
        portfolio4: ''
    })

    const {id: userId} = useParams()


  const handleChange = (e) => {
    const { name, value } = e.target;
    selectedSocials((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://${process.env.REACT_APP_HOST}:4001/api/${userId}/message`, selectedSocials).then((res)=> {
        if(res.status == 200) {
            alert("Message sent successfuly")
            setSelectedSocials({
                name: '',
                email:'',
                message: ''
            })
        } 
        
    }).catch((err) => {
        console.log(err);
    })
        // Add your logic to handle form submission
        console.log('Form submitted:', selectedSocials);
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
              placeholder='Name'
              value={selectedSocials.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={selectedSocials.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder='What would you like to say?'
              value={selectedSocials.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
  </>
  )
}

export default SocialMediaModal;