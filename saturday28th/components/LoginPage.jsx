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

  return (
    <div className='loginpage'>
      <div className='login-page-card'>
        <div className='login-card-text'>
          <div className='login-card-heading'>
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

          {/* Google Login Button */}
          <button
            style={{
              backgroundColor: '#4285F4',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '10px'
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              style={{ width: '20px', height: '20px' }}
            />
            Login with Google
          </button>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <p>Don't have an account? <a href='#'>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

