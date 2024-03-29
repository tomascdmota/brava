import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import './Card.scss';
const CardComponent = lazy(() => import('./CardComponent/CardComponent'));

function Cards() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null); // Initialize as null
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_HOST}/api/${userId}/cards`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setCards(response.data.cards);
  
        // Preload LCP image
        const lcpImageUrls = response.data.cards.map((card) => card.profile_image_url);
  
        lcpImageUrls.forEach((imageUrl) => {
          const preloadLink = document.createElement('link');
          preloadLink.href = imageUrl;
          preloadLink.rel = 'preload';
          preloadLink.as = 'image';
          document.head.appendChild(preloadLink);
        });
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }, [userId]);

  // Render loading indicator while data is being fetched
  if (loading) {
    return (
      <div className="cards-container">
        <h1>My Cards</h1>
        <div className="spinner-container"><div className="spinner"></div></div>
      </div>
    );
  }

  // Once data is fetched, render the page with the fetched data
  return (
    <div className="cards-container">
      <div className="nav-tiles">
        <div className="tiles">
          {cards.map((card) => (
            <Suspense key={card.card_id} fallback={<div>Loading card...</div>}>
              <CardComponent {...card} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
