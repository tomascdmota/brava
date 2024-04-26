import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from 'react-jwt';
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[passwordStatus, setPasswordStatus] = useState('Password');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session token
    const sessionToken = Cookies.get('session_token');
    if (sessionToken) {
      const { userId } = decodeToken(sessionToken);
      navigate(`/${userId}/dashboard`); // Redirect to dashboard if session token exists
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.elements.username ? e.target.username.value : '';
    const password = e.target.elements.password ? e.target.password.value : '';

    if (username.trim() === '' || password.trim() === '') {
      alert('Preencha todos os campos por favor');
      return;
    }

    try {
      const response = await axios.post(`https://${process.env.REACT_APP_HOST}/api/login`, {
        username: username,
        password: password,
      });

      const { token } = response.data;
      const { userId } = decodeToken(token);

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      Cookies.set('session_token', token, { expires: 30 });
      navigate(`/${userId}/dashboard/overview`);
    } catch (error) {
      console.log('Axios error', error);

      // Handle error response
      if (error.response) {
        if (error.response.status === 409) {
          console.log('um user com este email não existe');
        } else {
          console.log('Erro de servidor. Tente novamente mais tarde.');
        }
        if(error.response.status = 400){
          alert('Wrong password. Please try again.');
          setPasswordStatus('Wrong password');
        }
      } else if (error.request) {
        console.log('Sem resposta do servidor. Tente novamente mais tarde.');
      } else {
        console.log('Erro na requisição. Tente novamente mais tarde.');
      }
    }
  };

  // Check for existing session token again in case it was set during the async login attempt
  const sessionToken = Cookies.get('session_token');
  if (sessionToken) {
    const { userId } = decodeToken(sessionToken);
    navigate(`/${userId}/dashboard`); // Redirect to dashboard if session token exists
    return null; // Render nothing
  }

  // Render the login form
  return (
   
    
     <main className="login-container">
      <h1 className='login-title'><span>BRAVA</span>,  Welcome To The Future</h1>
        <div className='box'>
        <div className="form-container">
       
          <div className="card">
            <h1>Sign into your <span>BRAVA</span> account</h1>
              <form className="form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                  type="name"
                  placeholder="Username"
                  name="username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <label>{passwordStatus}</label>
                <input
                  type="password"
                  placeholder='*******'
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button type="submit">LOGIN</button>
                <p className="existing-users-text">Don't have an account yet? <Link className='signup' to="/signup">Click me!</Link></p>
              </form>
          </div>
        </div>
        <div className="image-container">
          <img className="background-image" src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/pvcgreennobg.png?v=1712011483" alt="Background" />
        </div>
        </div>
    </main>

  );
};

export default Login;
