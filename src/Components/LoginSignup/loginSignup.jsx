import React, { useState } from 'react';
import './loginSignup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });

      console.log(response, '=============');

      if (response.data.status === 'success') {
        // Successfully logged in, redirect to the category page
        console.log('User logged in successfully!');
        navigate('/category');
      } else {
        // Handle login failure, show error message
        setMessage(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle server error, show error message
        setMessage(error.response.data.message);
      } else {
        // Handle network error, show error message
        setMessage('Network error during login. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="input">
        <img src={email_icon} alt="" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>

      {message && <div className="error-message">{message}</div>}
    </div>
  );
};

export default Login;
