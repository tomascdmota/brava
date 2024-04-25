import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Modal.css'
import axios from 'axios';




const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    sector:'',
    phone:'',
    email: '',
    message: '',
  });

  const {id: userId} = useParams()


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {...formData, terms: e.target.terms.checked}

  axios.post(`https://${process.env.REACT_APP_HOST}/api/${userId}/message`, updatedFormData)
  .then((res) => {
    console.log('Response Headers:', res.headers);
    if (res.status === 200) {
      alert("Message sent successfully");
      setFormData({
        name: '',
        company: '',
        sector:'',
        phone:'',
        email: '',
        message: '',
        terms: false,
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
         <h2 className='modal-title'>Exchange Contact</h2>
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
           <label htmlFor="phone">Phone:</label>
           <input
             type="phone"
             id="phone"
             name="phone"
             placeholder=''
             value={formData.phone}
             onChange={handleChange}
             required
           />
           <label htmlFor="sector">Sector:</label>
           <input
             type="sector"
             id="sector"
             name="sector"
             placeholder=''
             value={formData.sector}
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
          
           <div className='terms-container'>
             <input
               type="checkbox"
               id="terms"
               name="terms"
               required
             />
             <label htmlFor="terms">I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">terms and conditions</a></label>
           </div>
           <button className='submit-button' type="submit">Submit</button>
           <button className="close-button" onClick={onClose}>X</button>
         </form>
       </div>
     </div>
     
      )}
    </>
  );
};

export default Modal;
