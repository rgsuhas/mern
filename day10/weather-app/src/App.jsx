// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Bengaluru');

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=bc40ce98efa042cfa91155705250508&q=${city}&aqi=no`
      );
      setWeather(res.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🌤️ Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={e => setCity(e.target.value)} 
        placeholder="Enter city name" 
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;
