import React from "react";

import LeftAbout from "../LeftAbout";
import RightAbout from "../RightAbout";

import './index.css' 

const About = () => (
    <div className="about-section-background" id='about'>
        <h1 className="about-title">About</h1>
        <div className="about-section-parts">
            <LeftAbout/>
        
            <RightAbout/>
        </div>
    </div>
)

export default About