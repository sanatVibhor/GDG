// src/components/home/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const styles = {
    section: {
      padding: '60px 20px',
      background: 'linear-gradient(180deg, #f0f4ff, #fce4ec)',
      fontFamily: 'sans-serif',
    },
    title: {
      fontSize: '2.2rem',
      color: '#0d47a1',
      textAlign: 'center',
      marginBottom: '30px',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      width: '260px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '14px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textAlign: 'center',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
    cardTitle: {
      fontSize: '1.3rem',
      color: '#1565c0',
      marginBottom: '12px',
    },
    cardDesc: {
      fontSize: '0.95rem',
      color: '#555',
      minHeight: '60px',
    },
    link: {
      display: 'inline-block',
      marginTop: '14px',
      fontSize: '0.9rem',
      color: '#0d47a1',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
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
const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'My React-based portfolio showcasing skills and live projects.',
    link: 'https://github.com/shivi0103/portfolio',
  },
  {
    title: 'Weather App (Mock UI)',
    desc: 'Static weather dashboard built in React without API — just smooth UI!',
    internal: '/weather',
  },
  {
    title: 'To-Do App',
    desc: 'Organize tasks with a sleek interface and localStorage.',
    internal: '/todo',
  },
  {
    title: 'Register Form',
    desc: 'Collaborate with me — drop your info to connect!',
    internal: '/register',
  },
  {
  title: 'Sarcasm Translator',
  desc: 'Convert innocent sentences into spicy sarcasm 💬',
  internal: '/sarcasm',
},

  
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>✨ Projects</h2>

      <div style={styles.grid}>
        {projects.map((proj, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
          >
            <h3 style={styles.cardTitle}>{proj.title}</h3>
            <p style={styles.cardDesc}>{proj.desc}</p>

            {proj.internal ? (
              <Link to={proj.internal} style={styles.link}>
                Open Live App →
              </Link>
            ) : (
              <a href={proj.link} target="_blank" rel="noreferrer" style={styles.link}>
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

      <Link to="/" style={styles.backLink}>← Back to Home</Link>
    </section>
  );
}

export default Projects;