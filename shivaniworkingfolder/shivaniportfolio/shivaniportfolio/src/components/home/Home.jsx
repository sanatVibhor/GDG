// src/components/home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import shivaniImg from '../../assets/shivani.jpg';

function Home() {
  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      background: 'linear-gradient(180deg, #ede7f6, #fce4ec)',
      fontFamily: 'sans-serif',
    },

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
      color: '#07010aff',
    },

    contentWrapper: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px clamp(20px, 5vw, 80px)',
      background: 'linear-gradient(180deg, #ede7f6, #fce4ec)',
      boxSizing: 'border-box',
    },

    innerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '60px',
      maxWidth: '1000px',
      width: '100%',
    },

    image: {
      width: '220px',
      height: '220px',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 8px 20px rgba(106, 27, 154, 0.3)',
      border: '4px solid #6a1b9a',
    },

    content: {
      maxWidth: '480px',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
    },

   heading: {
  fontSize: '2.4rem',
  marginBottom: '0px', 
  color: '#4a148c',
  lineHeight: '0',    
  fontFamily: "'Playfair Display', serif",
},
    tagline: {
      fontSize: '1.1rem',
      color: '#6a1b9a',
      marginBottom: '2px',
      lineHeight: '1.4',
    },

    icons: {
      display: 'flex',
      gap: '20px',
      marginBottom: '8px',
    },

    icon: {
      color: '#6a1b9a',
      transition: 'transform 0.3s ease, color 0.3s ease',
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
    <div style={styles.page}>


      <section style={styles.contentWrapper}>
        <div style={styles.innerContainer}>
          <img src={shivaniImg} alt="Shivani" style={styles.image} />

          <div style={styles.content}>
            <h1 style={styles.heading}>Hello, I’m Shivani Sisodia</h1>
            <p style={styles.tagline}>Aspiring Web Developer and React Enthusiast</p>

            <div style={styles.icons}>
              <a href="mailto:shivanisisodia0103@gmail.com" style={styles.icon}><MdEmail size={26} /></a>
              <a href="https://github.com/shivi0103" style={styles.icon}><FaGithub size={26} /></a>
              <a href="https://linkedin.com/in/shivani-sisodia" style={styles.icon}><FaLinkedin size={26} /></a>
            </div>

            <Link to="/about" style={styles.btn}>About Me</Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
