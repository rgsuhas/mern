// src/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      padding: '20px', 
      width: '300px', 
      textAlign: 'center',
      margin: '20px auto'
    }}>
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <h3>{weather.current.temp_c}°C</h3>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="weather icon" />
    </div>
  );
};

export default WeatherCard;
