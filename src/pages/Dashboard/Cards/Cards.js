import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import './Cards.scss';
import Header from '../Components/Header';
import CardComponent from '../../../components/CardComponent/cardcomponent';

function Cards() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3306/api/${userId}/dashboard/cards`)
      .then((response) => {
        setUserData(response.data);
        setCards(response.data.cards);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [userId]);

  if (!userData) {
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
      <h1>My Cards</h1>
      {loading && <div className="spinner-container"><div className="spinner"></div></div>}
      <div className="nav-tiles">
        <div className="tiles">
          {!loading &&
            cards.map((card) => <div className='iphone-x' ><CardComponent key={card.id} {...card} /></div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;