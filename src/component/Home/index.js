import React from 'react';
import Header from '../Header'; // Importing the Header component
import './index.css'; // Importing CSS styles



document.addEventListener("DOMContentLoaded", function() {
  const texts = ['💪 I am an Aspiring Techie 🚴🏻‍♀️','🤞🏼 MERN Developer 💞','💖 Loves Python 💘','🌟 AI/ML Enthusiast 😍'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  const typewriter = document.getElementById("typewriter");

  function type() {
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      typewriter.textContent = letter;

      if (letter.length === currentText.length) {
          count = (count + 1) % texts.length;
          index = 0;
          setTimeout(() => {
              typewriter.textContent = '';  // Clear the text before typing the next one
              type();
          }, 2000);  // Pause before typing the next sentence
      } else {
          setTimeout(type, 50);  // Control typing speed here
      }
  }

  type();
});



const Home = () => (
  <div className='home-container' id='home'>
    <Header />
    <div className='info-container'>
      <h1 className='name'>Hey, <span className='my-name'>I am Aguru Sireesha</span></h1>
      <p className='intro'><span id='typewriter'></span></p>
      <a href='https://drive.google.com/uc?export=download&id=1lRh6iW_D3EuuWd7HXSQ3LaO_cQAsKvPd'>
        <button className='download-cv-button'>DOWNLOAD CV</button>
      </a>

    </div>
  </div>
);

export default Home;
