import React from "react";
import { motion } from "framer-motion";
import LeftAbout from "../LeftAbout";
import RightAbout from "../RightAbout";
import sireesha from '../../images/sireesha.jpg'
import './index.css'

const About = () => {
    return (
        <div 
            className="about-section-background" 
            id='about'
            
        >
            <h1 className="about-title">About</h1>
            <motion.div 
                className="image-container-for-small"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <img src={sireesha} alt='siri' className="my-image-for-small"/>
            </motion.div>
            <div className="about-section-parts">
                <LeftAbout/>
                <RightAbout/>
            </div>
        </div>
    );
};

export default About;
