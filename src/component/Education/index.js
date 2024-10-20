import React from "react";
import { motion } from "framer-motion";
import { Chrono } from 'react-chrono';
import nxtwave from '../../images/nxtwave.png';
import btech from '../../images/btech.jpg';
import inter from '../../images/inter.jpg';
import school from '../../images/school.jpg';
import './index.css';

const items = [
    {title: 'May 2022 - ongoing'},
    {title: '2020 - 2024'},
    {title: '2018 - 2020'},
    {title: '2018'}
];

const Education = () => {
    return (
        <motion.div 
            className="education-section-background" 
            id='education'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 7, delay: 5  }}
        >
            <h1 className="education-main-title">Education</h1>
            <motion.div 
                className="responsive-container"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <Chrono
                    mode="VERTICAL_ALTERNATING"
                    theme={{primary: '#13a0b3', secondary: '#092e33', titleColor: "#b2ffff", titleColorActive: 'cyan'}}
                    cardHeight={253}
                    items={items}
                    fontSizes={{title: '1.5rem'}}
                    cardStyle={{ overflowY: 'auto', overflowX: 'hidden', maxWidth: '100%' }}
                >
                    <div className="education_card">
                        <div className="education_sub_card">
                            <img src={nxtwave} alt='logo' className="education-icon"/>
                            <p className="education-title">Nxtwave Disruptive Technologies</p>
                        </div>
                        <div className="education-mini-container">
                            <ul className="main-items-container">
                                <li>➢ MERN</li>
                                <li>➢ Industry Ready Certification in Full-stack Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education_card">
                        <div className="education_sub_card">
                            <img src={btech} alt='logo' className="education-icon"/>
                            <p className="education-title">Centurion University of Technology & Management</p>
                        </div>
                        <div className="education-mini-container">
                            <ul className="main-items-container">
                                <li>➢ CUTM</li>
                                <li>➢ BTech CSE</li>
                                <li>➢ 9.3 CGPA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education_card">
                        <div className="education_sub_card">
                            <img src={inter} alt='logo' className="education-icon"/>
                            <p className="education-title mt-4">Amaravathi International Institute of Mathematics and Science</p>
                        </div>
                        <div className="education-mini-container">
                            <ul className="main-items-container">
                                <li>➢ BIE</li>
                                <li>➢ Intermediate MPC</li>
                                <li>➢ 9.75 CGPA</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education_card">
                        <div className="education_sub_card">
                            <img src={school} alt='logo' className="education-icon"/>
                            <p className="education-title mt-4">St Ann's Convent English Medium School</p>
                        </div>
                        <div className="education-mini-container">
                            <ul className="main-items-container">
                                <li>➢ ICSE</li>
                                <li>➢ Secondary School Of Certificate</li>
                                <li>➢ 89.83%</li>
                            </ul>
                        </div>
                    </div>
                </Chrono>
            </motion.div>
        </motion.div>
    );
};

export default Education;
