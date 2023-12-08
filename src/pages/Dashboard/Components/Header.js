import React, { useEffect, useState, useRef } from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';

function Header(props) {
  const { activeTab, onTabClick } = props;
  const {id} = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 1000;
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleSwipe = (event) => {
      const startX = event.changedTouches[0].clientX;
      const endX = event.changedTouches[event.changedTouches.length - 1].clientX;

      if (startX - endX > 50) {
        // Swipe left (closing the menu)
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchend', handleSwipe);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchend', handleSwipe);
    };
  }, []);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header-container">
      <header className={`dashboard-header ${isMenuOpen ? 'menu-open' : ''}`}>
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
              {/*<img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" alt="User Avatar" />*/}
            </span>
          </button>
        </div>
        { isMobile && ( <div>
        <div className="dashboard-header-mobile">
        <MenuIcon onClick={handleMenuClick} />
        </div>

             
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {isMenuOpen &&<CloseIcon onClick={handleMenuClick} /> }
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
        </div>)}
      </header>
    </div>
  );
}

export default Header;