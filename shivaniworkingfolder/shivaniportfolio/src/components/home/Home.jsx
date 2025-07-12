// src/components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import shivaniImg from '../../assets/shivani.jpg'; // 📸 Update path if needed

function Home() {
  const styles = {
    nav: {
      position: 'absolute',
      top: '20px',
      right: '30px',
      fontWeight: 'bold',
      fontSize: '0.95rem',
      zIndex: 999,
    },
    navLink: {
      margin: '0 12px',
      textDecoration: 'none',
      color: '#6a1b9a',
    },
    container: {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #ede7f6, #fce4ec)',
  padding: '60px 40px',
  fontFamily: 'sans-serif',
  flexWrap: 'wrap',
  gap: '40px', // ✅ adds closeness between image & text
},
    image: {
  width: '260px',
  height: '260px',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0 8px 20px rgba(106, 27, 154, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '4px solid #6a1b9a',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(106, 27, 154, 0.4)',
  }
},
    content: {
      maxWidth: '500px',
      textAlign: 'left',
    },
    heading: {
      fontSize: '2.4rem',
      marginBottom: '10px',
      color: '#4a148c',
    },
    tagline: {
      fontSize: '1.1rem',
      color: '#6a1b9a',
      marginBottom: '28px',
    },
    icons: {
      display: 'flex',
      gap: '20px',
      marginBottom: '24px',
    },
    icon: {
  color: '#6a1b9a',
  transition: 'transform 0.3s ease, color 0.3s ease',
  ':hover': {
    transform: 'scale(1.2)',
    color: '#4a148c',
  }
},
    btn: {
      padding: '10px 20px',
      backgroundColor: '#fff',
      color: '#7b1fa2',
      border: '2px solid #7b1fa2',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <>
      {/* 🔝 Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/projects" style={styles.navLink}>Projects</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
      </nav>

      {/* 🎯 Hero Section */}
      <section style={styles.container}>
        {/* Left: Image */}
        <img src={shivaniImg} alt="Shivani" style={styles.image} />

        {/* Right: Text */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Hello, I’m Shivani Sisodia</h1>
          <p style={styles.tagline}>I build smooth, responsive React apps 💻✨</p>

          <div style={styles.icons}>
            <a href="mailto:shivanisisodia0103@gmail.com" target="_blank" rel="noreferrer" style={styles.icon}>
              <MdEmail size={26} />
            </a>
            <a href="https://github.com/shivi0103" target="_blank" rel="noreferrer" style={styles.icon}>
              <FaGithub size={26} />
            </a>
            <a href="https://linkedin.com/in/shivani-sisodia" target="_blank" rel="noreferrer" style={styles.icon}>
              <FaLinkedin size={26} />
            </a>
          </div>

          {/* 📎 Just One CTA Button Now */}
          <Link to="/about" style={styles.btn}>About Me</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;