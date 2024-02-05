import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import axios from "axios";
import "./ExtendedCardComponent.scss";

function ExtendedCardComponent({
  email,
  card_id,
  phone,
  username,
  company,
  title,
  onLoad,
  facebook,
  linkedin,
  instagram,
  url,
  profile_image_url,
}) {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [userData, setUserData] = useState(null)
  const {id: userId} = useParams()

  
  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await fetch(`/${userId}/dashboard`);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const fetchImage = async () => {
      try {
        const response = await fetch(`/images/${encodeURIComponent(profile_image_url)}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }
  
        const blob = await response.blob();
  
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
  
        setLoading(false);
  
        if (onLoad) {
          onLoad(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
  
    fetchUserdata();
    fetchImage();
  }, [profile_image_url, onLoad, userId]);
 

  return (
    <div class="center">

    <div class="extended-card">
      <div class="additional">
        <div class="user-card">
          <img src={profile_image_url}/>
        </div>
      </div>
      <div class="general">
      <div class="more-info">
          <h1>{company}</h1>
          <div class="coords">
            <span>{title}</span>
          </div>
          <div class="coords">
            <span>{username}</span>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  );
}

ExtendedCardComponent.propTypes = {
  cardData: PropTypes.object,
  onSaveContact: PropTypes.func.isRequired,
  onExchangeContact: PropTypes.func.isRequired,
  company: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  profile_image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  card_id: PropTypes.number.isRequired,
};

export default ExtendedCardComponent;