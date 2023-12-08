import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Cookie from 'js-cookie';

function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state (e.g., tokens, user information)
    // Perform API or server logout (if needed)

    // For example, if using localStorage for authentication tokens:
    Cookie.remove('session_token');

    // Redirect to the login page
    navigate('/login');
  };

  useEffect(() => {
    // Check if the session_token cookie exists
    const sessionToken = Cookie.get('session_token');

    if (!sessionToken) {
      // Redirect to the login page if the cookie does not exist
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
