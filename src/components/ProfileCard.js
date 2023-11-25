import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ProfileCard.scss";

function ProfileCard() {
  const { id: userId } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all cards for the user
        const cardResponse = await axios.get(`http://localhost:3306/api/${userId}/profile`);
        const cardData = cardResponse.data;

        if (cardResponse.status === 200) {
          setCards(cardData.cards || []); // Provide a default empty array if cards is undefined
        } else {
          console.error(cardData.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to initiate the data fetch
  }, [userId]);

  return (
    <div>
      <div class="iphone-x">
		<i>Speaker</i>
		<b>Camera</b>
		<s>10:24</s>
		
		</div>
    </div>
  );
}

export default ProfileCard;