  import React, { useEffect, useState, useRef } from 'react';
  import './Header.scss';
  import MenuIcon from '@mui/icons-material/Menu';
  import { useParams, useNavigate } from 'react-router-dom';
  import CloseIcon from '@mui/icons-material/Close';

  function Header(props, event) {
    const { activeTab } = props;
    const { id } = useParams();
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isMobile = window.innerWidth <= 1000;
    const menuRef = useRef(null);
    const username = localStorage.getItem('username');
    const profile_picture = localStorage.getItem('profile_image_url');

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

    function handleTabClick (tab) {
      setMenuOpen(false);
      navigate(`/${id}/dashboard/${tab}`);
    };

    return (
      <div className="header-container">
        <header className={`dashboard-header ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="dashboard-header-logo">
            <div className="dashboard-logo">
              <span className="dashboard-logo-icon">
                <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" alt="Logo" />
              </span>
              <h1 className="logo-title">Brava</h1>
            </div>
          </div>
          <div className="dashboard-header-navigation">
            <div className="tabs">
            <button onClick={(event) => handleTabClick('overview', event)} className={activeTab === 'overview' ? 'active' : ''}>
            <a>Overview</a>
          </button>
          <button onClick={(event) => handleTabClick('cards', event)} className={activeTab === 'cards' ? 'active' : ''}>
           <a> Cards</a>
          </button>
          <button onClick={(event) => handleTabClick('account', event)} className={activeTab === 'account' ? 'active' : ''}>
           <a>Account</a> 
          </button>
          <button>
            <a href="https://bravanfc.com" >Store</a>
          </button>

            </div>
          </div>
          <div className="dashboard-header-actions">
            <button onClick={() => handleTabClick('account')} className="user-profile">
              <span>{username}</span>
              <span>
                <img src={profile_picture} alt="User Avatar" />
              </span>
            </button>
          </div>
          {isMobile && (
            <div>
              <div className="dashboard-header-mobile">
                <MenuIcon onClick={handleMenuClick} />
              </div>
              <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {isMenuOpen && <CloseIcon onClick={handleMenuClick} />}
                <button onClick={(event) => handleTabClick('overview', event)} className={activeTab === 'overview' ? 'active' : ''}>
                  Overview
                </button>
                <button onClick={(event) => handleTabClick('cards', event)} className={activeTab === 'cards' ? 'active' : ''}>
                  Cards
                </button>
                <button onClick={(event) => handleTabClick('account', event)} className={activeTab === 'account' ? 'active' : ''}>
                  Account
                </button>
                <button onClick={(event) => handleTabClick('account', event)} className={activeTab === 'account' ? 'active' : ''}>
                  Store
                </button>

              </div>
            </div>
          )}
        </header>
      </div>
    );
  }

  export default Header;
