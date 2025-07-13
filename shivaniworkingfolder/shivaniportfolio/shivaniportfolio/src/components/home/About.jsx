import React from 'react';
import { Link } from 'react-router-dom';
function About() {
  const styles = {
    container: {
      padding: '80px clamp(20px, 6vw, 100px)',
      background: 'linear-gradient(180deg, #fce4ec, #ede7f6)',
      fontFamily: "'Poppins', sans-serif",
      color: '#4a148c',
      lineHeight: '1.6',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '24px',
      fontSize: '1rem',
    },
    skillList: {
      listStyleType: 'square',
      paddingLeft: '20px',
      marginTop: '10px',
    },
    contactButton: {
      marginTop: '30px',
      padding: '10px 20px',
      backgroundColor: '#fff',
      color: '#6a1b9a',
      border: '2px solid #6a1b9a',
      borderRadius: '8px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    backLink: {
      display: 'block',
      marginTop: '60px',
      textAlign: 'center',
      color: '#6a1b9a',
      fontWeight: 'bold',
      textDecoration: 'none',
    }
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>About Me</h2>

      <div style={styles.section}>
        Hi! I’m Shivani Sisodia, a Computer Science student passionate about designing beautiful digital experiences. I specialize in creating intuitive, responsive web interfaces that combine creative flair with technical precision.
      </div>

      <div style={styles.section}>
        I’m skilled in:
        <ul style={styles.skillList}>
          <li>React & Node.js</li>
          <li>JavaScript, HTML & CSS</li>
          <li>Responsive design & pixel-perfect UI</li>
          <li>Git workflow & repository organization</li>
        </ul>
      </div>

      <div style={styles.section}>
        My recent work includes designing a portfolio that reflects modular components, balanced layouts, and personalized UI elements. I'm also exploring creative problem-solving with a strong focus on aesthetics and accessibility.
      </div>

      <div style={styles.section}>
        Apart from Tech, I love drawing,dancing, dogs and traveling — these things keep me alive and inspired!
</div>
      
    


      <div>
      <Link to="/" style={styles.backLink}>⬅️ Back to Home</Link>

    </div>
    </section>
  );
}
  


export default About;