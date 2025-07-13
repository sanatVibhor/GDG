// src/components/Register.jsx

import React from 'react';

function Register() {
  const styles = {
    section: {
      padding: '60px 20px',
      backgroundColor: '#fff8e1',
      fontFamily: 'sans-serif',
      color: '#4e342e',
    },
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '30px 25px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: '2rem',
      color: '#e65100',
      textAlign: 'center',
      marginBottom: '25px',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '6px',
      border: '1px solid #ffb74d',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: '0 0 4px rgba(255,167,38, 0.2)',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#fb8c00',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#e65100',
    },
  };

  return (
    <section id="register" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Register</h2>
        <form>
          <input type="text" placeholder="Full Name" required style={styles.input} />
          <input type="email" placeholder="Email Address" required style={styles.input} />
          <input type="password" placeholder="Create Password" required style={styles.input} />
          <input type="password" placeholder="Confirm Password" required style={styles.input} />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.buttonHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.button)
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;