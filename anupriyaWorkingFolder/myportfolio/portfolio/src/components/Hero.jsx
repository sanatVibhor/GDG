 import React from 'react';
import './Hero.css';
 export default function Hero() {
   return (
    <section className="hero-section">



  <div className="hero-text">
    <h1 className="hero-title">Hi, I'm Anupriya</h1>
    <p className="hero-subtitle">
      Frontend Developer building clean & responsive web apps with React.
    </p>
    <button className="hero-button">Download resume</button>
  </div>

  <div className="hero-image">
    <img 
      src="girlinwhite.jpg" // or import if using src folder
      alt="Profile"
      width="200"
      height="200"
    />
  </div>
    </section>
    );
     }  