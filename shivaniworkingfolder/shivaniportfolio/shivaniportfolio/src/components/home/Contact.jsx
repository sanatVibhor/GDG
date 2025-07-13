// src/components/home/Contact.jsx
import React from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const styles = {
    section: {
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #ffe0f0, #e3f2fd)',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
    title: {
      fontSize: '2.2rem',
      color: '#6a1b9a',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#5e3571',
      marginBottom: '25px',
    },
    form: {
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ba68c8',
      boxShadow: '0 0 5px rgba(186, 104, 200, 0.3)',
      outline: 'none',
    },
    textarea: {
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ba68c8',
      boxShadow: '0 0 5px rgba(186, 104, 200, 0.3)',
      resize: 'vertical',
      minHeight: '100px',
      outline: 'none',
    },
    button: {
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '8px',
      backgroundColor: '#8e24aa',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    link: {
      display: 'block',
      marginTop: '30px',
      color: '#6a1b9a',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    note: {
      fontSize: '0.85rem',
      color: '#7b1fa2',
      marginTop: '1.5rem',
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',    // Replace with your actual EmailJS service ID
        'your_template_id',   // Replace with your template ID
        e.target,
        'your_public_key'     // Replace with your EmailJS public key
      )
      .then(() => {
        toast.success('📬 Message sent successfully!');
      })
      .catch(() => {
        toast.error('❌ Failed to send. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>📮 Get In Touch</h2>
      <p style={styles.subtitle}>I'd love to hear from you — drop a message anytime! 💬</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="👤 Your Name" required style={styles.input} />
        <input type="email" name="email" placeholder="📧 Your Email" required style={styles.input} />
        <textarea name="message" placeholder="💬 Your Message" required style={styles.textarea} />
        <button type="submit" style={styles.button}>🚀 Send Message</button>
      </form>

      <p style={styles.note}>🌸 I usually reply within 1–2 business days!</p>
      <Link to="/" style={styles.link}>← Back to Home</Link>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default Contact;