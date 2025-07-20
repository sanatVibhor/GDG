import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
