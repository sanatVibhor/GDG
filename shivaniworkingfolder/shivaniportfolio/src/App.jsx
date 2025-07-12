import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import TodoApp from './components/todo/TodoApp';
import About from './components/home/About';
import ProjectsPage from './components/home/Projects';
import Contact from './components/home/Contact';
import Register from './components/home/Register';
import WeatherApp from './components/weather/WeatherApp';
import TranslatorApp from './components/sarcasm/TranslatorApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/todo" element={<TodoApp/>} />
      <Route path="/weather" element={<WeatherApp />} />
     <Route path="/sarcasm" element={<TranslatorApp />} />
      
    </Routes>
  );
}

export default App;