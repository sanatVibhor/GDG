import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const styles = {
    container: {
      padding: '80px 20px',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(180deg, #fce4ec, #e3f2fd)',
      color: '#4a148c',
      textAlign: 'center',
    },
    contentWrapper: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px',
    },
    name: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#6a1b9a',
      marginBottom: '10px',
      letterSpacing: '0.5px',
    },
    tagline: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      color: '#7b1fa2',
      marginBottom: '1.8rem',
    },
    paragraph: {
      fontSize: '1.1rem',
      color: '#5e3571',
      lineHeight: '1.75',
      marginBottom: '40px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#6a1b9a',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      fontSize: '1.05rem',
      lineHeight: '2',
      color: '#444',
      marginBottom: '40px',
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      color: '#5e3571',
    },
    statItem: {
      background: '#fff',
      padding: '15px 20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontWeight: 'bold',
    },
    resumeBtn: {
      display: 'inline-block',
      marginTop: '50px',
      padding: '12px 24px',
      backgroundColor: '#7b1fa2',
      color: '#fff',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
    backLink: {
      display: 'block',
      marginTop: '30px',
      textAlign: 'center',
      color: '#6a1b9a',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.name}>A Little About Me</h1>
        <p style={styles.tagline}>Crafting clean UIs with React & purpose 💻🎨</p>

        <p style={styles.paragraph}>
          As a frontend developer, I specialize in building intuitive, polished web interfaces using modern
          React architecture. My approach blends visual finesse with functionality — from designing responsive layouts
          to integrating APIs and deploying with confidence. Whether it's a weather app or a productivity dashboard,
          I believe in clean code, clear intent, and thoughtful user experiences.
        </p>

        <h2 style={styles.subtitle}>🛠 My Workflow</h2>
        <ul style={styles.list}>
          <li>🔍 <strong>Discover</strong> — Understand user needs & define goals</li>
          <li>🔧 <strong>Design</strong> — Sketch and structure UI flows</li>
          <li>⚛️ <strong>Build</strong> — Modular React components & state logic</li>
          <li>🚀 <strong>Refine & Deploy</strong> — Polish details and push live</li>
        </ul>

        <div style={styles.statGrid}>
          <div style={styles.statItem}>💼 12+<br />Projects Built</div>
          <div style={styles.statItem}>⚛️ 100%<br />React Focus</div>
          <div style={styles.statItem}>🔗 1 Goal<br />Build for Impact</div>
        </div>

        

        <Link to="/" style={styles.backLink}>← Back to Home</Link>
      </div>
    </section>
  );
}

export default About;