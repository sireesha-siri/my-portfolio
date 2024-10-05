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
    </div>
  );
}

export default App;

