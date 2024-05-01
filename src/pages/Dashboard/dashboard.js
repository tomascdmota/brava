import React, { useState, useEffect, useRef } from 'react';
import './dashboard.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import OverviewContent from './Overview/Overview';
import Cards from './Cards/Cards';
import Cookie from 'js-cookie';
import GraphComponent from './Overview/Components/Graph/Graph';

export function Dashboard() {
  const { id: userId, tab } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [leadsData, setLeadsData] = useState(null);
  const [contactData, setContactData] = useState(null)
  const isDataFetched = useRef(false);

  useEffect(() => {

    // Check if userId exists before making the API call
    if (!userId) return;

    // Check if data is being fetched to avoid redundant API calls
    if (isDataFetched.current) {
      return;
    }

    const fetchData = async () => {
      try {
        const sessionToken = Cookie.get('session_token');
        if (!sessionToken) {
          navigate('/login');
          return;
        }
    
        const response = await axios.get(`http://localhost:4001/api/${userId}/dashboard`, { withCredentials: true });
    
        // Extract username and profile_image_url from the response data object
        const { username, profile_image_url } = response.data.userData;
    
        // Set userData state with extracted data
        setUserData({ username, profile_image_url });
    
        // Set leadsData state with extracted data
        setLeadsData(response.data.leadsData);
        setContactData(response.data.contactsData)
        
        // Store username and profile image URL in localStorage
        localStorage.setItem('profile_image_url', profile_image_url);
        localStorage.setItem('username', username);
    
        // Update the ref to indicate that data has been fetched
        isDataFetched.current = true;
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    // Fetch data only if userId exists and data is not being fetched
    fetchData();
  }, [userId, navigate]);
 
  
  return (
    <div>
      {/* Render the Header component with default values if userData is null */}
      <Header header_username={userData ? userData.username : 'Loading...'} profile_picture={userData ? userData.profile_image_url : 'default_profile_picture_url'} />
      <div className="dashboard-body">
        {/* Pass the selected tab to the OverviewContent component */}
        <OverviewContent selectedTab={tab}  contactData={contactData} username={userData?.username} userId={userId} leadsData={leadsData}/>
        {/* Render Cards component */}
        {tab === 'cards' && <Cards contactData={userData} />}
        {/* Add other tab content here */}
      </div>
    </div>
  );
}

export default Dashboard;
