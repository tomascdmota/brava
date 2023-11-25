import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import "./Cards.scss";
import Header from '../Components/Header';
import CardComponent from '../../../components/CardComponent/cardcomponent'; // Update the path

function Cards() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState();
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3306/api/${userId}/dashboard/cards`)
      .then(response => {
        setUserData(response.data);
        setCards(response.data.cards);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, [userId]);

  if (!userData) {
    return (
      <div className='cards-container'>
      <Header />
      <h1>My Cards</h1>
      <div className='nav-tiles'>
        <div className="tiles">
          <article className="tile" onClick={() => navigate(`/${userId}/dashboard/createcard`)}>
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h2>
                <span>Let's create your first card!</span>
              </h2>
            </div>
          </article>
          <article className="tile" style={{ backgroundColor: "#bdbbb7" }}>
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Personal</span>
                <span>N/A</span>
              </h3>
            </div>
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Work</span>
                <span>N/A</span>
              </h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
  }

  return (
    <div className='cards-container'>
      <Header />
      <h1>My Cards</h1>
      <div className='nav-tiles'>
        <div className="tiles">
          {cards.map(card => (
            <CardComponent key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;