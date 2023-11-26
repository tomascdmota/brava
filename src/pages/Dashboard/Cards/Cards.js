import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import './Cards.scss';
import Header from '../Components/Header';
import CardComponent from '../../../components/CardComponent/cardcomponent';

function Cards() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null); // Initialize as null
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3306/api/${userId}/dashboard/cards`)
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
        <Header />
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
      <Header />
      <h1 className='title'>My Cards</h1>
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