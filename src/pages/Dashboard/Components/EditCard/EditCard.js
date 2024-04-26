import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import Cookie from 'js-cookie';
import CreateCard from '../../CreateCard/CreateCard';

const EditCard = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const sessionToken = Cookie.get('session_token');
        if (!sessionToken) {
          navigate('/login');
          return;
        }
        const response = await axios.get(`https://${process.env.REACT_APP_HOST}/api/${userId}/dashboard/cards`); // Adjust the API endpoint
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [userId, navigate]);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.put(`https://${process.env.REACT_APP_HOST}/api/updatecard`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Card updated:', response.data);
      navigate(`/${userId}/dashboard/my-card`);
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div>
      {cardData && <CreateCard initialValues={cardData} onSubmit={handleSubmit} isEditing={true} />}
 {/* Pass card data as initialValues */}
    </div>
  );
};

export default EditCard;