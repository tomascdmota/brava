import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png" alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <br></br><span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.phone}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{props.followers}</h1>
					<h2 className="smaller-text">Followers</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">{props.likes}</h1>
					<h2 className="smaller-text">Likes</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{props.photos}</h1>
					<h2 className="smaller-text">Photos</h2>
				</div>
			</div>
            
		</div>
	);
}

export default ProfileCard;