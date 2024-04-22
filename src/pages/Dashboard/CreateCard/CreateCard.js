import React, { useState, useEffect , useMemo} from 'react';
import { useParams, useNavigate } from 'react-router';
import "./CreateCard.scss";
import UploadModal from './uploadModal/UploadModal';
import axios from 'axios';
import Cookie from 'js-cookie';
import CardComponent from '../../../pages/Card/CardComponent/CardComponent';

const CreateCard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureLabel, setProfilePictureLabel] = useState('Profile Picture');
  const [backgroundImageLabel, setBackgroundImageLabel] = useState('Background Image');
  const [showUploadModal, setShowUploadModal] = useState(false);
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
    background_image: '',
    tiktok:'',
    spotify:'',
    twitter:'',
    paypal:'',
    vinted:'',
    notes:'',
    standvirtual:'',
    olx:'',
    piscapisca:'',
    custojusto:''
  });

  const navigate = useNavigate();
  const { id: id } = useParams();
  const createcardKey = useMemo(() => `${formData.profilePicture}-${formData.background_image}`, [formData.profilePicture, formData.background_image]);
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

    // Load images from local storage
    const profilePicture = localStorage.getItem('profileImageURL');
    const backgroundImage = localStorage.getItem('backgroundImageURL');

    if (profilePicture) {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: profilePicture,
      }));
    }

    if (backgroundImage) {
      setFormData((prevData) => ({
        ...prevData,
        background_image: backgroundImage,
      }));
    }
  }, []);

  // Open Modal
  const openUploadModal = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const inputName = e.target.name;
      if (inputName === 'profilePicture') {
        setProfilePictureLabel(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem('profileImageURL', event.target.result);
        };
        reader.readAsDataURL(file);
      } else if (inputName === 'backgroundImage') {
        setBackgroundImageLabel(file.name);
        const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem('backgroundImageURL', event.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleImageChanges = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImageLabel(file.name);
      setFormData((prevData) => ({
        ...prevData,
        background_image: file.name,
      }));
    } else {
      setBackgroundImageLabel('Background Image');
    }
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
    formDataToSubmit.append('userId', id);
    formDataToSubmit.append('tiktok', formData.tiktok);
    formDataToSubmit.append('spotify', formData.spotify);
    formDataToSubmit.append('twitter', formData.twitter);
    formDataToSubmit.append('paypal', formData.paypal);
    formDataToSubmit.append('vinted', formData.vinted);
    formDataToSubmit.append('notes', formData.notes);
    formDataToSubmit.append('standvirtual', formData.standvirtual);
    formDataToSubmit.append('olx', formData.olx);
    formDataToSubmit.append('piscapisca', formData.piscapisca);
    formDataToSubmit.append('custojusto', formData.custojusto);
  
    // Append profile image data
    const profilePictureFileName = localStorage.getItem('profileImageUrl');
    if (profilePictureFileName) {
      console.log('Profile Picture:', profilePictureFileName);
      formDataToSubmit.append('profilePicture', profilePictureFileName);
    }
  
    // Append background image file from localStorage if it exists
    const backgroundImageFileName = localStorage.getItem('backgroundImage');
    if (backgroundImageFileName) {
      console.log('Background Image:', backgroundImageFileName);
      formDataToSubmit.append('background_image', backgroundImageFileName);
    }
  
    // Log the form data
    console.log('Form Data:', formDataToSubmit);
  
    try {
      const response = await axios.post(
        `https://${process.env.REACT_APP_HOST}/api/createcard`,
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
        localStorage.removeItem('profileImageURL');
        localStorage.removeItem('backgroundImageURL');
        navigate(`/${response.data.userId}/dashboard/cards`);
      } else {
        console.error("Error creating card:", response.data);
        alert('Error creating card')
        // Handle the error (e.g., show an error message to the user)
      }
    } catch (err) {
      console.log("Error creating card", err);
      alert("There was an error creating your card", err);
    }
  };
  

  return (
    <div className='createcard-container'>
      <div className="msform">
        {/* Modal for uploading profile picture and background image */}
        {showUploadModal && (
          <UploadModal
            handleImageChange={handleImageChange}
            handleImageChanges={handleImageChanges}
            handleCloseModal={handleCloseModal}
            handleSubmit={handleSubmit} 
            handlePrevious={() => setShowUploadModal(false)} // Close modal on previous button click
          />
        )}
        <div className='createcard-container'>
          <div className="card-content">
            <div className="side-navigation">
              <ul>
                <li className={currentStep >= 1 ? 'active' : ''}>Card Setup</li>
                <li className={currentStep >= 2 ? 'active' : ''}>Social Media</li>
              
              </ul>
            </div>
            <div className="msform">
              <form id="msform" onSubmit={handleSubmit} encType="multipart/form-data">
                {currentStep === 1 && (
                  <fieldset>
                    <h2 className="fs-title">Setup your data</h2>
                    <p className='fs-subtitle'>We'll guide you through the process of adding the data displayed in your card</p>
                    <div className="row">
                      <div className="col">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="col">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="col">
                        <label>Phone</label>
                        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label>Company</label>
                        <input type="text" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleInputChange} />
                      </div>
                      <div className="col">
                        <label>Position</label>
                        <input type="text" name="position" placeholder="Position (optional)" value={formData.position} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" >
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} style={{ float: 'left' }} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="profile-picture-container">
                        <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450" alt="Upload Icon" className="upload-icon" />
                        <input
                          name="profilePicture"
                          id="profilePictureInput"
                          onChange={handleImageChange}
                          className="file-input"
                          onClick={openUploadModal}
                        />
                        <label htmlFor="profilePictureInput" className="file-label">
                          {profilePictureLabel}
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
                    </div>
                  </fieldset>
                )}
                {currentStep === 2 && (
                  <fieldset>
                    <h2 className="fs-title">Social Profiles</h2>
                    <h3 className="fs-subtitle">Your presence on the social network</h3>

                    <div className="social-input-container-wrapper">
                    <div className="social-input-container">
                      <div className="social-input">
                        <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-instagram.svg?v=1712083465" className='social' alt="Instagram" />
                        <input
                          type="text"
                          name="instagram"
                          placeholder="Instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-facebook.svg?v=1712083465' className='social' alt="Facebook" />
                        <input
                          type="text"
                          name="facebook"
                          placeholder="Facebook"
                          value={formData.facebook}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/icons8-linkedin.svg?v=1712083465' className='social' alt="LinkedIn" />
                        <input
                          type="text"
                          name="linkedin"
                          placeholder="Linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/url.png?v=1712083467' className='social' alt="URL" />
                        <input
                          type="text"
                          name="url"
                          placeholder="Url"
                          value={formData.url}
                          onChange={handleInputChange}
                        />
                      </div>
                       <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/tiktok.png?v=1713213933' className='social' alt="tiktok" />
                        <input
                          type="text"
                          name="tiktok"
                          placeholder="tiktok"
                          value={formData.tiktok}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/spotify_bcf3311d-41be-49a9-8cec-d1bdc9363c4d.png?v=1713213932' className='social' alt="Spotify" />
                        <input
                          type="text"
                          name="spotify"
                          placeholder="spotify"
                          value={formData.spotify}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                   
                    </div>
                    <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/twitter.svg?v=1713213932' className='social' alt="Twitter" />
                        <input
                          type="text"
                          name="twitter"
                          placeholder="Twitter"
                          value={formData.twitter}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/paypal.png?v=1713213933' className='social' alt="paypal" />
                        <input
                          type="text"
                          name="paypal"
                          placeholder="paypal"
                          value={formData.paypal}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/Vinted.png?v=1713213932' className='social' alt="vinted" style={{width:"100px", height:"60px",marginRight:"-20px",marginLeft:"-20px"}}/>
                        <input
                          type="text"
                          name="vinted"
                          placeholder="vinted"
                          value={formData.vinted}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/standvirtual.png?v=1713213933' className='social' alt="standvirtual" />
                        <input
                          type="text"
                          name="standvirtual"
                          placeholder="standvirtual"
                          value={formData.standvirtual}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/olx.png?v=1713213932' className='social' alt="olx" />
                        <input
                          type="text"
                          name="olx"
                          placeholder="olx"
                          value={formData.olx}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/piscapisca.png?v=1713213932' className='social' alt="piscapisca" />
                        <input
                          type="text"
                          name="piscapisca"
                          placeholder="piscapisca"
                          value={formData.piscapisca}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/custojusto.png?v=1713213932' className='social' alt="custojusto" style={{width:"100px", height:"60px",marginRight:"-35px",marginLeft:"-20px"}} />
                        <input
                          type="text"
                          name="custojusto"
                          placeholder="custojusto"
                          value={formData.custojusto}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="social-input">
                        <img src='https://cdn.shopify.com/s/files/1/0733/7767/7577/files/notes.png?v=1713213932' className='social' alt="notes" />
                        <input
                          type="text"
                          name="notes"
                          placeholder="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                    
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
                      className="next action-button"
                      value="Submit"
                      onClick={handleSubmit}
                    />
                  </fieldset>
                )}
                
              </form>
            </div>
            <div className="createcard-component">
              {/* Render CardComponent here */}
              <CardComponent
               key={createcardKey}// Added key prop to force rerender when images change
                email={formData.email}
                username={formData.name}
                phone={formData.phone}
                company={formData.company}
                title={formData.position}
                instagram={formData.instagram}
                facebook={formData.facebook}
                linkedin={formData.linkedin}
                url={formData.url}
                notes={formData.notes}
                background_image_url={formData.background_image}
                profile_image_url={formData.profilePicture}
                address={formData.address}
                tiktok={formData.tiktok}
                spotify={formData.spotify}
                twitter={formData.twitter}
                paypal={formData.paypal}
                vinted={formData.vinted}
                standvirtual={formData.standvirtual}
                olx={formData.olx}
                piscapisca={formData.piscapisca}
                custojusto={formData.custojusto}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
