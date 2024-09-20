import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import './Card.scss';
const CardComponent = lazy(() => import('./CardComponent/CardComponent'));

function Cards() {
  const { id: userId, cardId } = useParams();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://srv597605.hstgr.cloud:4001/api/card/${cardId}`)
      .then((response) => {
        const card = response.data; // Directly use the card object
        setCardData(card);

        // Preload LCP image
        const preloadLink = document.createElement('link');
        preloadLink.href = card.profile_image_url; // Preload the profile image
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);
      })
      .catch((error) => {
        console.error('Error fetching card:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cardId]);

  if (loading) {
    return (
      <div className="cards-container">
        <div className="spinner-container"><div className="spinner"></div></div>
      </div>
    );
  }

  // Once data is fetched, render the card with the fetched data
  return (
    <div className="cards-container">
      <Suspense fallback={<div>Loading card...</div>}>
        <CardComponent {...cardData} /> {/* Spread the card data directly */}
      </Suspense>
    </div>
  );
}

export default Cards;
