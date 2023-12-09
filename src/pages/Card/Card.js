import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import './Card.scss';
import CardComponent from './CardComponent/CardComponent';

function Cards() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null); // Initialize as null
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_HOST}/api/${userId}/cards`,{ withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setCards(response.data.cards);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }, [userId]);

  if (userData === null) {
    // Check for userData to be null instead of !userData
    return (
      <div className="cards-container">
        <h1>My Cards</h1>
        {loading && <div className="spinner-container"><div className="spinner"></div></div>}
        <div className="nav-tiles">
          {/* ... */}
        </div>
      </div>
    );
  }

  return (
    <div className="cards-container">
      {loading && <div className="spinner-container"><div className="spinner"></div></div>}
      <div className="nav-tiles">
        <div className="tiles">
          {!loading &&
            cards.map((card) => <CardComponent key={card.card_id} {...card} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
