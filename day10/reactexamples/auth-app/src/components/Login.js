import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';



function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // <-- navigation hook

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/dashboard'); // <-- redirect after login
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
