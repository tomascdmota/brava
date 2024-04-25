import React, { useState, useEffect, useRef } from 'react';
import './dashboard.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import OverviewContent from './Overview/Overview';
import Cards from './Cards/Cards';
import Cookie from 'js-cookie';

export function Dashboard() {
  const { id: userId, tab } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const isDataFetched = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionToken = Cookie.get('session_token');
        if (!sessionToken) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`https://${process.env.REACT_APP_HOST}/api/${userId}/dashboard`, { withCredentials: true });
        setUserData(response.data);
        console.log('Response data:', response.data);

        if (response.data && response.data.length > 0) {
          localStorage.setItem('profile_image_url', response.data[0]?.profile_image_url);
          localStorage.setItem('username', response.data[0]?.username);
        }

        isDataFetched.current = true;
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (userId && !isDataFetched.current) {
      console.log('making request');
      fetchData();
    }
  }, [userId, navigate]);

  return (
    <div>
     {userData && (
        <Header header_username={userData[0]?.username} profile_picture={userData[0]?.profile_image_url} />
      )}
      <div className="dashboard-body">
        {/* Pass the selected tab to the OverviewContent component */}
        <OverviewContent selectedTab={tab}  contactData={userData} />
        {/* Render Cards component */}
        {tab === 'cards' && <Cards contactData={userData} />}
        {/* Add other tab content here */}
      </div>
    </div>
  );
}

export default Dashboard;
