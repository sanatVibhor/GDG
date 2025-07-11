import React, { useState } from 'react';
import './loginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    const mockEmail = 'admin@gdg.com';
    const mockPassword = 'PASS1234';

    if (email === mockEmail && password === mockPassword) {
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  const googleButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  color: '#757575',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '10px 16px',
  fontSize: '16px',
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <div className='loginpage'>
      <div className='login-page-card'>
        <div className='login-card-text'>
          <div className='login-card-heading'>
            <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/OIP.fRVVQIGgDmkdrCn7dbHUWgHaHa_XeaK86x.jpeg" width="100px"></img>
            <h1>GDG Ranchi</h1>
          </div>
          <div className='login-card-paragraph'>
            <p>Access your dashboard and explore the features.</p>
          </div>
        </div>

        <div className='login-card-form'>
          <h2>USER LOGIN</h2>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLoginClick}>Login</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <button onClick={handleLoginClick} style={googleButtonStyle}>
          <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          style={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          Sign in with Google
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <p>Don't have an account? <a href='#'>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
