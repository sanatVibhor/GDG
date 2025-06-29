import { useState } from 'react';
import './form.css';

function App() {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your@email.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="••••••••" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
