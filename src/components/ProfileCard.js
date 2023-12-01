import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ProfileCard.scss";
import ExtendedCardComponent from "./ExtendedCardComponent/ExtendedCardComponent";

function ProfileCard() {
  const { id: userId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardResponse = await axios.get(`http://${process.env.REACT_APP_HOST}:4001/api/${userId}/cards`);
        const cardData = cardResponse.data;
        
        console.log("Card Data:", cardData); // Add this line
  
        if (cardResponse.status === 200) {
          setCards(cardData.cards || []);
        } else {
          console.error(cardData.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [userId, setCards]);
  console.log(cards);
  return (
    <div className="profile-card-container">
      <div>
      <h1 className="profile-title">PICK A CARD</h1>
      </div>
    {cards.map((card) => {
  return <ExtendedCardComponent key={card.card_id} {...card} />;
})}
    </div>
  );
}

export default ProfileCard;