// src/App.jsx
// import React from 'react';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div>
//       <Hero />
//       <Skills />
//       <Blog />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Blog from './components/Blog';
//  import Contact from './components/Contact';


// function App() {
//  return (
//  <>
      
//    <Header />
//    <section id="home">
//      <Hero />
//    </section>
//    <section id="skills">
//      <Skills />
//    </section>
//    <section id="blog">
//      <Blog />
//   </section>
//     <section id="contact">
//      <Contact />
//    </section>
//  </>
//  );
//  }

//  export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail'; // ← import the blog detail component

function HomePage() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

