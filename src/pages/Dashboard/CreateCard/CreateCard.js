import React, { useState, useEffect , useMemo} from 'react';
import { useParams, useNavigate } from 'react-router';
import "./CreateCard.scss";
import UploadModal from './uploadModal/UploadModal';
import axios from 'axios';
import Cookie from 'js-cookie';
import CardComponent from '../../../pages/Card/CardComponent/CardComponent';

const CreateCard = ({initialValues, isEditing,  cardId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileImagePreview, setProfileImagePreview] = useState('');
  const [backgroundImagePreview, setBackgroundImagePreview] = useState('');
  const [profileImageName, setProfileImageName] = useState('Profile Image');
  const [backgroundImageName, setBackgroundImageName] = useState('Background Image');
  const [formData, setFormData] = useState({
    id: '', // Add id to the initial state
    username: '',
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
    custojusto:'',
    address: '',
    ...initialValues // Merges initial values with default ones
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const createcardKey = `${formData.profilePicture}-${formData.background_image}`;

  useEffect(() => {
    if (initialValues && initialValues.cards && initialValues.cards.length > 0) {
      const firstCard = initialValues.cards[0]; // Extract the first card from the array
      setFormData(prevData => ({
        ...prevData,
        ...firstCard
      }));
    }
  }, [initialValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (file) => {
    setFormData(prevData => ({
      ...prevData,
      profilePicture: file,
    }));
    setProfileImagePreview(URL.createObjectURL(file));
    setProfileImageName(file.name);
  };

  const handleBackgroundImageChange = (file) => {
    setFormData(prevData => ({
      ...prevData,
      background_image: file,
    }));
    setBackgroundImagePreview(URL.createObjectURL(file));
    setBackgroundImageName(file.name);
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
  
    try {
      const formDataToSubmit = new FormData();
      // Append form data here...
      for (const key in formData) {
        // Check if it's a file type input
        if (key === 'profilePicture' || key === 'background_image') {
          // If it's a file, append the file object directly
          if (formData[key] instanceof File) {
            formDataToSubmit.append(key, formData[key]);
          }
        } else {
          // If it's not a file, append its value
          formDataToSubmit.append(key, formData[key]);
        }
      }
  
      let method;
      let endpoint;

      if (isEditing) {
        method = 'put';
        endpoint = `https://${process.env.REACT_APP_HOST}/api/updatecard/${id}/${cardId}`; 
        console.log('cardid',cardId)// Adjust endpoint for updating card
      } else {
        method = 'post';
        endpoint = `https://${process.env.REACT_APP_HOST}/api/createcard`; // Endpoint for creating new card
      }

      const response = await axios({
        method: method,
        url: endpoint,
        data: formDataToSubmit,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        navigate(`/${id}/dashboard/my-card`);
      }
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className='createcard-container'>
      <div className="msform">
       
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
                        <input type="text" name="username" placeholder="Name" value={formData.username} onChange={handleInputChange} required />

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
                      <div className="col">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="profile-picture-container">
                        <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450" alt="Upload Icon" className="upload-icon" />
                        <input
                          id="profilePictureInput"
                          name="profilePicture"
                          type="file"
                          onChange={(e) => handleProfilePictureChange(e.target.files[0])}
                          className="file-input"
                        />
                        <label htmlFor="profilePictureInput" className="file-label">
                          {profileImageName}
                        </label>
                      </div>
                      <div className="profile-picture-container">
                        <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/upload.png?v=1713209450" alt="Upload Icon" className="upload-icon" />
                        <input
                          id="backgroundImageInput"
                          name="background_image"
                          type="file"
                          onChange={(e) => handleBackgroundImageChange(e.target.files[0])}
                          className="file-input"
                        />
                        <label htmlFor="backgroundImageInput" className="file-label">
                          {backgroundImageName}
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
                 key={createcardKey}
                 email={formData.email}
                 username={formData.username}
                 phone={formData.phone}
                 company={formData.company}
                 title={formData.position}
                 instagram={formData.instagram}
                 facebook={formData.facebook}
                 linkedin={formData.linkedin}
                 url={formData.url}
                 notes={formData.notes}
                 background_image_url={backgroundImagePreview || 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava_Front4-removebg-preview.png?v=1712164655'}
                 profile_image_url={profileImagePreview || 'https://cdn.shopify.com/s/files/1/0733/7767/7577/files/brava.jpg?v=1713204195'}
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
                 loading={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;