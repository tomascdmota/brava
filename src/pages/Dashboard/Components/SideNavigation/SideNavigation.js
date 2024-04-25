import React, { useState } from 'react';
import './SideNavigation.scss';

const SideNavigation = ({ handleTabClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="overview-body-navigation">
      <nav className="side-navigation">
        <a onClick={(event) => handleTabClick('overview', event)} href="#" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/dashboard.svg?v=1713982497" alt="Dashboard" className="nav-icon" />
          <span>Dashboard</span>
        </a>
        <div className="dropdown-wrapper">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/account-balance-wallet.svg?v=1713982779" alt="Cards" className="nav-icon" />
            <span>Cards</span>
          </div>
          {showDropdown && (
            <ul className="dropdown-content">
              <li onClick={(event) => handleTabClick('my-card', event)}>My Card</li>
              <li onClick={(event) => handleTabClick('edit-card', event)}>Edit Card</li>
            </ul>
          )}
        </div>
        <a onClick={(event) => handleTabClick('leads', event)} href="#" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/mail.svg?v=1713983246" alt="Leads" className="nav-icon" />
          <span>Leads</span>
        </a>
        <a href="#" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/calendar-today.svg?v=1713983141" alt="Calendar" className="nav-icon" />
          <span>Calendar</span>
        </a>
        <a onClick={(event) => handleTabClick('account', event)} href="#" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/settings.svg?v=1713983432" alt="Settings" className="nav-icon" />
          <span>Settings</span>
        </a>
        <a href="https://bravanfc.com" target="_blank" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/local-grocery-store.svg?v=1713983431" alt="Store" className="nav-icon" />
          <span>Store</span>
        </a>
        <a href="#" className="nav-link">
          <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/logout.svg?v=1713983567" alt="Logout" className="nav-icon" />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default SideNavigation;
