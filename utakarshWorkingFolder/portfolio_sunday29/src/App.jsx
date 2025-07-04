import { useState } from 'react';
import userImg from './assets/user.jpg';
import githubIcon from './assets/icon-github.jpg';
import portfolioBg from './assets/portfolio_background.jpg';
import projectSectionImg from './assets/project_section.jpg';
import './App.css';

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="site_header">
        <div className="wrapper_inner">
          <nav className="site_header_nav">
            <ul role="list" className="flex flex_center">
              <li><a href="#hero">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#work">WORK</a></li>
              <li>
                <a href="#" onClick={openPopup}>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          style={{
            background: `linear-gradient(rgba(26, 26, 64, 0.3), rgba(26, 26, 64, 0.3)), url(${portfolioBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundAttachment: 'scroll',
            color: '#fafafa',
          }}
        >
          <div className="wrapper">
            <div className="wrapper_inner">
              <div className="text_center hero_content">
                <h1 className="h2">Utakarsh Baranwal</h1>
                <p className="h5">WEB DEVELOPER && MACHINE LEARNING ENGINEER</p>
              </div>
            </div>
            <ul role="list" className="flex flex_between hero_social">
              <address>Jamshedpur, India</address>
              <ul role="list" className="flex">
                <li>Find me online</li>
                <li>
                  <a href="https://github.com/arbitronmaths" target="_blank" rel="noopener noreferrer">
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </section>
      </main>

      <section id="about">
        <div className="wrapper">
          <div className="text_center">
            <h2>
              I am a web developer and Machine Learning Engineer. I like to play
              with datasets and train models to solve problems.
            </h2>
          </div>
          <div className="wrapper_inner">
            <div className="about_content flex flex_around">
              <figure className="about_figure text_center">
                <img
                  width="300px"
                  height="300px"
                  src={userImg}
                  alt="Developer"
                  className="about_img"
                />
                <figcaption className="about_caption">Utakarsh</figcaption>
              </figure>
              <p className="h5">
                Born in India, I've spent years building and experimenting
                with machine learning and Python. I solve real life problems and
                bring  ideas to life through hands-on development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrapper_inner">
          <div className="text_center">
            <h4 className="h5">MY PROJECTS!!!!</h4>
            <ul role="list" className="work_logos flex flex_center">
              <li className="projects">
                <h2>Skillink</h2>
                <p>
                  Resume Classification and course recommendation using Gemini API
                </p>
              </li>
              <li className="projects">
                <h2>Employ-Prediction</h2>
                <p>
                  Model predicts whether an Employee is likely to leave or stay
                </p>
              </li>
              <li className="projects">
                <h2>To-do</h2>
                <p>Schedule and check your daily routine.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="Tech-skills">
        <div className="wrapper">
          <h4>Technologies I Know</h4>
          <div className="tech-logos">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          </div>
        </div>
      </section>

      <div id="popup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
          <form onSubmit={(e) => { e.preventDefault(); closePopup(); }}>
            <h4>
              <i>New Contact</i>
              <hr />
            </h4>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
            <label htmlFor="linkedin">LinkedIn Profile URL:</label><br />
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="https://www.linkedin.com/in/your-profile"
              required
            /><br /><br />
            <div id="btn"><button type="submit">Register</button></div>
          </form>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Utakarsh. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
