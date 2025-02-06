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

            <motion.div
                className="text-container-for-small"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100, duration: 5, delay: 3 }}
            >
                <p className="about-me-text">
                    Hello! I'm <span className="highlight-text">Aguru Sireesha</span>, 
                    a final-year BTech student at Centurion University of Technology and Management, 
                    set to graduate by the end of this year. With a solid foundation in 
                    <span className="highlight-text"> Computer Science and Engineering</span>,
                    I am actively seeking a position in <span className="highlight-text">Full Stack Web Development</span>.
                    <br/>
                    <br/>
                    I have completed extensive training in the <span className="highlight-text">MERN stack</span> 
                    through <span className="highlight-text">Nxtwave</span>, where I honed my skills in building 
                    dynamic and responsive web applications. I am proficient in <span className="highlight-text">Python</span> 
                    and am currently learning <span className="highlight-text">Data Structures and Algorithms</span>. 
                    My long-term goal is to pursue a career in <span className="highlight-text">AI/ML</span>.
                    <br/>
                    <br/>
                    I am a disciplined, confident, and self-motivated team player with excellent communication skills. 
                    Alongside my technical skills, I am also improving my <span className="highlight-text"> Soft skills </span> 
                    and <span className="highlight-text">Presentation abilities</span> to become a well-rounded professional.
                </p>
            </motion.div>

            <div className="about-section-parts">
                <LeftAbout/>
                <RightAbout/>
            </div>
        </div>
    );
};

export default About;
