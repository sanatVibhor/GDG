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
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <p>Don't have an account? <a href='#'>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
