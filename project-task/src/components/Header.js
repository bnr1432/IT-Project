import React from 'react';
import { getUser, logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
      <h2>Student Portal</h2>
      <div>
        <span style={{ marginRight: '10px' }}>{user?.name}</span>
        <img src="https://via.placeholder.com/30" alt="profile" style={{ borderRadius: '50%' }} />
        <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
