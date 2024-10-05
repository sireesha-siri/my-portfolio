import React from 'react';
import Header from '../Header'; // Importing the Header component
import './index.css'; // Importing CSS styles

const Home = () => (
  <div className='home-container' id='home'>
    <Header />
    <div className='info-container'>
      <h1 className='name'>Hey, I am Aguru Sireesha</h1>
      <p className='intro'>MERN Stack Developer</p>
      <button className='download-cv-button'>DOWNLOAD CV</button>
    </div>
  </div>
);

export default Home;
