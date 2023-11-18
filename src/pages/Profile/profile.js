import {useEffect, useState} from 'react'
import './profile.css';
import { useParams } from 'react-router-dom';
import axios from "axios"

function Profile() {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3306/api/profile/${id}`);
                setUserData(response.data);
            } catch(error){
                console.log("Error fetchin data:", error);
            }
        }

        fetchUserProfile();
    }, [id]);

    if(!userData) {
        return <div>Loading...</div>;
    }

  return (
    <div>
       

        <div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{userData.username}</h3>
    <h4>{userData.email}</h4>
	<h6>REMAX</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Social Media</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
</div>

<footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this
		<a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>
		- Design made by
		<a target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
	</p>
</footer>
    </div>
  )
}

export default Profile