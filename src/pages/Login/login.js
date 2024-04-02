import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from 'react-jwt';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    const email = e.target.elements.email ? e.target.email.value : '';
    const password = e.target.elements.password ? e.target.password.value : '';

    if (email.trim() === '' || password.trim() === '') {
      alert('Preencha todos os campos por favor');
      return;
    }

    try {
      const response = await axios.post(`https://${process.env.REACT_APP_HOST}/api/login`, {
        email: email,
        password: password,
      });

      const { token } = response.data;
      const { userId } = decodeToken(token);

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      Cookies.set('session_token', token, { expires: 30 });
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log('Axios error', error);

      // Handle error response
      if (error.response) {
        if (error.response.status === 409) {
          console.log('um user com este email não existe');
        } else {
          console.log('Erro de servidor. Tente novamente mais tarde.');
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
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="example@bravanfc.com"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder='*******'
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button type="submit">SIGN UP</button>
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
