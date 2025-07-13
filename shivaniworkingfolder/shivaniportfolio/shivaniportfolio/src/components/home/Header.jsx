// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const styles = {
    container: {
      position: 'absolute',
      top: '20px',
      right: '30px',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      zIndex: 999,
    },
    link: {
      margin: '0 14px',
      textDecoration: 'none',
      color: '#6a1b9a',
      fontSize: '0.95rem',
    },
  };

  return (
    <nav style={styles.container}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/About" style={styles.link}>About</Link>
      <Link to="/Projects" style={styles.link}>Projects</Link>
      <Link to="/Contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

export default Header;