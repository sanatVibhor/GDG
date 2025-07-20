import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact with me to sizzle your project</h2>
        <p className="subtext">
          Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Work Description..." rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
