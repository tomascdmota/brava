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

  return (
    <div>
      {cardData && (
        <CreateCard initialValues={cardData?.cards[0]} cardId={cardData.cards[0]?.card_id} isEditing={true} />
      )}
    </div>
  );
};

export default EditCard;
