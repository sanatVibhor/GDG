import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="form-container">
        <h2>New User Registration</h2>
        <form action="/submit" method="POST" encType="multipart/form-data">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="address1">Current Address</label>
          <input type="text" id="address1" name="address1" required />

          <label htmlFor="sign">Signature</label>
          <input type="file" id="sign" name="sign" accept="image/*" required />

          <label htmlFor="photo">Upload Profile Picture</label>
          <input type="file" id="photo" name="photo" accept="image/*" required />

          <div className="btn">
            <button type="submit">Register</button>
            <button type="button" onClick={() => window.location.reload()}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
