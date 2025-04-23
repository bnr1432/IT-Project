// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../index.css';

const generateCaptcha = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const LoginPage = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput === captcha) {
      setCaptchaError('');
      console.log('Login success 🎉');

      // ✅ Redirect to Home Page
      navigate('/home');
    } else {
      setCaptchaError('Invalid captcha. Please try again.');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaError('');
  };

  return (
    <div className="login-box">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
          <option value="">Default select</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="captcha-box">
          <input
            type="text"
            placeholder="Enter Captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />
          <div className="captcha-image" onClick={refreshCaptcha} title="Click to refresh">
            {captcha}
          </div>
        </div>

        {captchaError && <p className="error">{captchaError}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
