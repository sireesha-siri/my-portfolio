// src/ArrowToTop.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow icon from react-icons
import './index.css'; // Import the CSS for styling

const ArrowToTop = () => {
    const scrollToHome = () => {
        const homeSection = document.getElementById('home'); // Replace 'home' with your actual section ID
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="arrow-to-top" onClick={scrollToHome}>
            <FaArrowUp size={30} color="white" />
        </div>
    );
};

export default ArrowToTop;
