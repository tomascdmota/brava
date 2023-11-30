import React, { useState } from 'react';
import './dashboard.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Components/Header';
import OverviewContent from './Overview/Overview'; // Import your content components
import ProfilesContent from '../Profile/profile';
import CardsContent from './Cards/Cards';
import AccountContent from './Account/Account';
import Cookie from 'js-cookie';

export function Dashboard() {
	const { id: userId } = useParams();
	const [activeTab, setActiveTab] = useState('overview');
	const [userData, setUserData] = useState(null);
	const navigate = useNavigate();
	const handleTabClick = (tab) => {
	  setActiveTab(tab);
	};

	useEffect(() => {
		// Check if the session_token cookie exists
		const sessionToken = Cookie.get('session_token');
	
		if (!sessionToken) {
		  // Redirect to the login page if the cookie does not exist
		  navigate('/login');
		}
	  }, [navigate]);
	
  
	useEffect(() => {
		const fetchUserProfile = async () => {
		  try {
			const response = await axios.get(`http://${process.env.REACT_APP_HOST}:3306/api/${userId}/dashboard`, { withCredentials: true });
			setUserData(response.data)
		  } catch (error) {
			console.log('Error fetching data:', error);
		  }
		};
	  
		// Call the fetchUserProfile function when the component mounts
		fetchUserProfile();
	  }, [userId, navigate]);

	

	  
	if (!userData) {
	  return <div>Loading...</div>;
	}
  
	return (
	  <div>
		<div className="dashboard">
		  <Header username={userData.username} activeTab={activeTab} onTabClick={handleTabClick} />
		  <div className="dashboard-body">
			{/* Render content based on the active tab */}
			{activeTab === 'overview' && <OverviewContent userId={userData.id} username={userData.username} />}
			{activeTab === 'profiles' && <ProfilesContent userId={userData.id} />}
			{activeTab === 'cards' && <CardsContent />}
			{activeTab === 'account' && <AccountContent userId={userData.id} />}
		  </div>
		</div>
	  </div>
	);
  }
  
  export default Dashboard;