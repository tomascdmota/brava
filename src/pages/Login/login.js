import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { decodeToken } from 'react-jwt';
import './login.css';

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
      const response = await axios.post('http://192.168.1.155:3306/api/login', {
        email: email,
        password: password,
      });

      console.log('Server response:', response.data);
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
    <div className="login-container">
      <Link to="/login"></Link>
      <h1 className="welcome">Bem vindo à Brava</h1>
      <div className="card">
        <img
          className="logo"
          src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png"
        />
        <h2>Entre para gerir a sua conta </h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit">SIGN UP</button>
          <p className="existing-users-text">Don't have an account yet?</p>
          <a onClick={() => navigate('/signup')}> Click me!</a>
        </form>
      </div>
    </div>
  );
};

export default Login;