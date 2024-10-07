import React from "react";

import LeftAbout from "../LeftAbout";
import RightAbout from "../RightAbout";

import sireesha from '../../images/sireesha.jpg'

import './index.css' 

const About = () => (
    <div className="about-section-background" id='about'>
        <h1 className="about-title">About</h1>

        <div className="image-container-for-small">
            <img src={sireesha} alt='siri' className="my-image-for-small"/>
        </div>

        <div className="about-section-parts">
            <LeftAbout/>
        
            <RightAbout/>
        </div>
    </div>
)

export default About