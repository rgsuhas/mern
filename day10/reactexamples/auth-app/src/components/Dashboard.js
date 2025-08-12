import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserInfo(res.data);
      } catch (err) {
        alert('Session expired. Please log in again.');
        logout();
      }
    };

    fetchData();
  }, []);

  if (!userInfo) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {userInfo.name}</h2>
      <p>Email: {userInfo.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
