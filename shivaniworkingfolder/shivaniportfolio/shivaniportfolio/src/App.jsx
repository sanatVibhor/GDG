// src/App.jsx


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/home/Home';
import About from './components/home/About';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';


import TranslatorApp from './components/sarcasm/TranslatorApp';
import TodoApp from './components/todo/TodoApp';
import WeatherApp from './components/weather/WeatherApp';

import Header from './components/home/Header';
import Footer from './components/home/Footer';
function App(){
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sarcasm" element={<TranslatorApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<WeatherApp />} />
       
      </Routes>
      <Footer/>
      </div>
</Router>
  );
  
};

export default App;