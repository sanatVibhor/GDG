import React, { useState } from 'react';
import { weatherData } from './Data';
import WeatherCard from './WeatherCard';

function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #ede7f6, #fce4ec)',
    fontFamily: 'sans-serif',
    padding: '40px 20px',
    textAlign: 'center',
  };

  return (
    <div style={layoutStyle}>
      <h1 style={{ color: '#6a1b9a', fontSize: '2.2rem' }}>🌦️ Weather UI Mock</h1>
      <p style={{ color: '#4a148c', marginBottom: '20px' }}>
        Select a city to view its mock weather conditions
      </p>

      <select
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '2px solid #6a1b9a',
          marginBottom: '30px',
        }}
      >
        {Object.keys(weatherData).map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <WeatherCard city={selectedCity} data={weatherData[selectedCity]} />
    </div>
  );
}

export default WeatherApp;