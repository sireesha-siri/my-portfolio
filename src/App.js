import React from 'react';

import './App.css';

import Home from './component/Home';
import About from './component/About';
import Education from './component/Education';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>

      <footer className="footer">
        <p>© 2024 Aguru Sireesha <span class="heart-beat" role='img' aria-label='heart'>💙</span>. All Rights Reserved.</p>
        {/* <div className="footer-icons">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div> */}
      </footer>
    </div>
  );
}

export default App;

