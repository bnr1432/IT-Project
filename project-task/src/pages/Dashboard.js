import Component from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
  
export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        } else {
        navigate('/login');
        }
    }, [navigate]);
    
    return (
        <div>
        <h1>Dashboard</h1>
        {user && <p>Welcome, {user.name}!</p>}
        </div>
    );
    }
    