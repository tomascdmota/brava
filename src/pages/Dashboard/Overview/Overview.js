import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import "./Overview.scss"
import Leads from './Components/Leads/Leads';
import Card from '../Cards/Cards'
import GraphComponent from './Components/Graph/Graph';
import EditCard from '../Components/EditCard/EditCard';

import Cookie from 'js-cookie';
import SideNavigation from '../Components/SideNavigation/SideNavigation';
import Account from '../Account/Account'
import { Edit } from 'react-feather';

const OverviewContent = ({ contactData, userId, leadsData }) => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(tab || 'overview');

  const contactsPerPage = 5;

  // Calculate indexes of contacts to display on the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  var currentContacts = '';
  if (Array.isArray(contactData) && contactData.length > 0) {
    // Calculate indexes of contacts to display on the current page
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    
    // Slice the contactData array to get the contacts for the current page
    currentContacts = contactData.slice(indexOfFirstContact, indexOfLastContact);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    if (contactData && contactData.length > 0) {
      // No need to setUserId here since userId is passed as a prop
      console.log("User ID:", userId);
    }
  }, [contactData, userId]);

  const handleTabClick = (tab) => {
    navigate(`/${userId}/dashboard/${tab}`);
    setSelectedTab(tab)
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sessionToken = Cookie.get('session_token');
    if (!sessionToken) {
      navigate('/login');
    }
  }, [navigate]);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="overview">
        <SideNavigation handleTabClick={handleTabClick} /> 
        <div className="overview-body-main-content">
          {selectedTab === 'overview' && (
           <GraphComponent leadsData={leadsData}/>
          )}
          {selectedTab === 'my-card' && <Card />}
          {selectedTab === 'edit-card' && <EditCard />}
          {selectedTab === 'leads' && <Leads leadsData={leadsData}  userId={userId}/>}
          {selectedTab === 'account' && <Account />}
          {/* Add more conditions for other tabs */}
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
