import React, { useState, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router';
import "./Overview.scss"
import Leads from './Components/Leads/Leads';
import Card from '../Cards/Cards'
import CreateCard from '../CreateCard/CreateCard';
import EditCard from '../Components/EditCard/EditCard';

import Cookie from 'js-cookie';
import SideNavigation
 from '../Components/SideNavigation/SideNavigation';
import Account from '../Account/Account'
import { Edit } from 'react-feather';



const OverviewContent = ({ contactData }) => {
  const host = process.env.REACT_APP_HOST;
  const isMobile = window.innerWidth <= 1000;
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const contactCounter = contactData ? contactData.length : 0;
  const {tab} = useParams()
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(tab || 'overview');

  const contactsPerPage = 5;

  // Calculate indexes of contacts to display on the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  var currentContacts = '';
  if (contactData) {
    currentContacts = contactData.slice(indexOfFirstContact, indexOfLastContact);
  }


  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    if (contactData && contactData.length > 0) {
      setUserId(contactData[0].user_id);
    }
  }, [contactData]);

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
		<div className="overview-body-main-content">
          {selectedTab === 'overview' && (
            <section className="service-section">
             Analytics
            </section>
          )}
		  {selectedTab === 'my-card' && <Card/>}  
		  {selectedTab === 'edit-card' && <EditCard/>}
          {selectedTab === 'leads' && <Leads contactData={contactData} />}
		  {selectedTab === 'account' && <Account/>}
          {/* Add more conditions for other tabs */}
        </div>
        </div>


       
      </div>
    </div>
  );
};

export default OverviewContent;