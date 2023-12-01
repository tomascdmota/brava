import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
import "./CreateCard.css";
import { CiGlobe } from "react-icons/ci";
import axios from 'axios';
import Header from '../Components/Header'
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const CreateCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    instagram: '',
    url: '',
    facebook: '',
    linkedin: '',
    image: '',
    background_image: ''
  });

  const navigate = useNavigate();
  const { id: id } = useParams();

  useEffect(() => {
		// Check if the session_token cookie exists
		const sessionToken = Cookie.get('session_token');
	
		if (!sessionToken) {
		  // Redirect to the login page if the cookie does not exist
		  navigate('/login');
		}
	  }, [navigate]);


  useEffect(() => {
    // Load the saved data from local storage on component mount
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };
  
  const handleImageChanges = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      background_image: file,
    }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('company', formData.company);
    formDataToSubmit.append('position', formData.position);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('instagram', formData.instagram);
    formDataToSubmit.append('facebook', formData.facebook);
    formDataToSubmit.append('linkedin', formData.linkedin);
    formDataToSubmit.append('url', formData.url);
    formDataToSubmit.append('profilePicture', formData.profilePicture);
    formDataToSubmit.append('background_image', formData.background_image);
    formDataToSubmit.append('userId', id);
  
    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_HOST}:4001/api/createcard`,
        formDataToSubmit,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
  
      if (response.status === 201 || response.status === 204) {
        localStorage.removeItem('formData');
        navigate(`/${response.data.userId}/dashboard/cards`);
      } else {
        console.error("Error creating card:", response.data);
        // Handle the error (e.g., show an error message to the user)
      }
    } catch (err) {
      console.log("Error creating card", err);
    }
  };




  return (
    <div className='createcard-container'>
      <Header/>
    <div className="msform">
      <ul id="progressbar">
        <li className={currentStep >= 1 ? 'active' : ''}>Card Setup</li>
        <li className={currentStep >= 2 ? 'active' : ''}>Social Media</li>
        <li className={currentStep >= 3 ? 'active' : ''}>Profile Picture</li>
      </ul>
      
      <form id="msform" onSubmit={handleSubmit} encType="multipart/form-data">
        {currentStep === 1 && (
          
          <fieldset>
            <h2 className="fs-title">Personal data</h2>
            <h3 className="fs-subtitle">This is step 1</h3>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <input type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleInputChange} />
            <input type="text" name="position" placeholder="Position (optional)" value={formData.position} onChange={handleInputChange} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )}
        {currentStep === 2 && (
          <fieldset>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
        
          <div className="social-input">
            <FontAwesomeIcon icon={faInstagram}  fontSize="25px"/>
            <input
              type="text"
              name="instagram"
              placeholder="Instagram"
              value={formData.instagram}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="social-input">
            <FontAwesomeIcon icon={faFacebook}  fontSize="25px"/>
            <input
              type="text"
              name="facebook"
              placeholder="Facebook"
              value={formData.facebook}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="social-input">
            <FontAwesomeIcon icon={faLinkedin}  fontSize="25px"/>
            <input
              type="text"
              name="linkedin"
              placeholder="Linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="social-input">
          <CiGlobe fontSize="25px"/>
            <input
              type="text"
              name="twitter"
              placeholder="Url"
              value={formData.twitter}
              onChange={handleInputChange}
            />
          </div>
        
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
            onClick={handlePrevious}
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
            onClick={handleNext}
          />
        </fieldset>
        )}
        {currentStep === 3 && (
          <fieldset>
          <h2 className="fs-title">Profile Picture</h2>
          <h3 className="fs-subtitle">Upload your profile picture</h3>
          <div className="profile-picture-container">
          <input
              type="file"
              name="profilePicture"
              id="profilePictureInput"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            <label htmlFor="profilePictureInput" className="file-label">
              Choose an image
            </label>
          </div>
          <div className="profile-picture-container">
              <input
                  type="file"
                  name="background_image"
                  id="backgroundImageInput"
                  accept="image/*"
                  onChange={handleImageChanges}
                  className="file-input"
                />
            <label htmlFor="backgroundImageInput" className="file-label">
              Choose an image
            </label>
          </div>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
            onClick={handlePrevious}
          />
          <input
            type="submit"
            name="submit"
            className="submit action-button"
            value="Submit"
          />
        </fieldset>
        )}
      </form>
    </div>
    </div>
  );
};

export default CreateCard
