import React from 'react';

function Footer() {
  const styles = {
    footer: {
      padding: '24px 16px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: '0.9rem',
      color: '#7b1fa2',
      borderTop: '1px solid #e1bee7',
      background: '#fafafa',
      marginTop: '60px',
    },
    link: {
      margin: '0 10px',
      color: '#6a1b9a',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '0.95rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div>
        <a href="mailto:shivanisisodia0103@gmail.com" style={styles.link}>Email</a>
        <a href="https://github.com/Shivi0103" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
        <a href="https://linkedin.com/in/shivani-sisodia" target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        © {new Date().getFullYear()} Shivani Sisodia
      </div>
    </footer>
  );
}

export default Footer;