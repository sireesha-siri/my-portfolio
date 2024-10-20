import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Header from '../Header'; // Importing the Header component
import './index.css'; // Importing CSS styles

const Home = () => {
  const typewriterRef = useRef(null); // Create a ref for the typewriter element

  useEffect(() => {
    const texts = ['💪 I am an Aspiring Techie 🚴🏻‍♀️','🤞🏼 MERN Developer 💞','💖 Loves Python 💘','🌟 AI/ML Enthusiast 😍'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      if (typewriterRef.current) {
        typewriterRef.current.textContent = letter; // Use ref to access the DOM node
      }

      if (letter.length === currentText.length) {
        count = (count + 1) % texts.length;
        index = 0;
        setTimeout(() => {
          if (typewriterRef.current) {
            typewriterRef.current.textContent = ''; // Clear the text before typing the next one
          }
          type();
        }, 2000);  // Pause before typing the next sentence
      } else {
        setTimeout(type, 50);  // Control typing speed here
      }
    }

    type(); // Start typing animation

    // Cleanup function to prevent memory leaks
    return () => {
      count = 0; // Reset state on component unmount
      index = 0;
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className='home-container' id='home'>
      <Header />
      <motion.div
        className='info-container'
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Final opacity
        transition={{ duration: 3, delay: 1}} // Duration of the fade-in and delay before starting
      >
        <h1 className='name'>Hey, <span className='my-name'>I am Aguru Sireesha</span></h1>
        <p className='intro'><span ref={typewriterRef}></span></p>
        <a href='https://drive.google.com/uc?export=download&id=1lRh6iW_D3EuuWd7HXSQ3LaO_cQAsKvPd'>
          <button className='download-cv-button'>DOWNLOAD CV</button>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
