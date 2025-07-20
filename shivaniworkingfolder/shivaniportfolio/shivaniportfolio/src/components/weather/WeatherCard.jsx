import React from 'react';
import { motion } from 'framer-motion';

function getIcon(condition) {
  const icons = {
    Sunny: '☀️',
    Cloudy: '☁️',
    Rainy: '🌧️',
    Thunderstorm: '🌩️',
  };
  return icons[condition] || '❓';
}

function WeatherCard({ city, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '20px',
        borderRadius: '14px',
        background: '#fff',
        boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
        textAlign: 'center',
        width: '260px',
        color: '#4a148c',
        margin: '0 auto',
      }}
    >
      <h2>{city}</h2>
      <div style={{ fontSize: '3rem' }}>{getIcon(data.condition)}</div>
      <p>{data.condition}</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.temp}°C</p>
    </motion.div>
  );
}

export default WeatherCard;