import React, { useEffect, useState } from 'react';
import './Header.scss';
import axios from 'axios';
import { useParams } from 'react-router';

function Header(props) {
  const { activeTab, onTabClick } = props;
  const {id} = useParams();
 

  return (
    <div className="header-container">
      <header className="dashboard-header">
        <div className="dashboard-header-logo">
          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" alt="Logo" />
            </span>
            <h1 className="logo-title">
             Brava
            </h1>
          </div>
        </div>
        <div className="dashboard-header-navigation">
          <div className="tabs">
            
            <a onClick={() => onTabClick('overview')} href={`/${id}/dashboard/overview`} className={activeTab === 'overview' ? 'active' : ''}>
              Overview
            </a>
            <a onClick={() => onTabClick('profiles')} href={`/${id}/dashboard/profiles`} className={activeTab === 'profiles' ? 'active' : ''}>
              Profiles
            </a>
            <a onClick={() => onTabClick('cards')} href={`/${id}/dashboard/cards`} className={activeTab === 'cards' ? 'active' : ''}>
              Cards
            </a>
            <a onClick={() => onTabClick('account')}  href={`/${id}/dashboard/account`} className={activeTab === 'account' ? 'active' : ''}>
              Account
            </a>
          </div>
        </div>
        <div className="dashboard-header-actions">
          <button className="user-profile">
            <span>{props.username}</span>
            <span>
              <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" alt="User Avatar" />
            </span>
          </button>
        </div>
        <div className="dashboard-header-mobile">
          <button className="icon-button large">
            <i className="ph-list"></i>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;