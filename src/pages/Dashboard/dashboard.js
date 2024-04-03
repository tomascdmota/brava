import React, { useState, useEffect, useRef } from 'react';
import './dashboard.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import OverviewContent from './Overview/Overview';
import Cards from './Cards/Cards';
import Cookie from 'js-cookie';

export function Dashboard(event) {
 
  const { id: userId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const isDataFetched = useRef(false); // Ref to track if data fetching is done
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionToken = Cookie.get('session_token');
        
        if (!sessionToken) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`http://localhost:4001/api/${userId}/dashboard`, { withCredentials: true });
        setUserData(response.data);
        localStorage.setItem('profile_image_url', userData[0]?.profile_image_url);
        localStorage.setItem('username', userData[0]?.username);
        
        isDataFetched.current = true; // Set to true after data fetching
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    // Fetch data only if userId is available and data fetching is not done yet
    if (userId && !isDataFetched.current) {
      console.log('making request');
      fetchData();
   
    }
  }, [userId, navigate]);


  return (
    <div>
      {/* Render the header and tabs */}
      <Header header_username={userData ? userData[0]?.username : ''} profile_picture={userData ? userData[0]?.profile_image_url:''} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="dashboard-body">
        {/* Render content based on the active tab */}
        {activeTab === 'overview' && <OverviewContent contactData={userData} />}
        {activeTab === 'cards' && <Cards contactData={userData} />}
        {activeTab === 'overview' && <OverviewContent contactData={userData} />}
        {/* Add other tab content here */}
      </div>
    </div>
  );
}

export default Dashboard;
