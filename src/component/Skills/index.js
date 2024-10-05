import React from 'react';

import { FaJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiExpress, SiBootstrap, SiTailwindcss, SiJupyter, SiMongodb, SiSqlite, SiGooglecolab  } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css';

const Skills = () => (
    <div className='skills-background-section' id='skills'>
        <h1 className='skills-title'>Skills</h1>

        <div className='skills-subset'>

            <h2 className='skill-heading'>Languages</h2>
            {[
                { skill: 'JavaScript', icon: <FaJs style={{ color: 'yellow' }} />, progress: 80 },
                { skill: 'Python', icon: <FaPython style={{ color: 'blue' }} />, progress: 70 },
                { skill: 'HTML', icon: <FaHtml5 style={{ color: 'orange' }} />, progress: 85 },
                { skill: 'CSS', icon: <FaCss3Alt style={{ color: 'blue' }} />, progress: 80 },
            ].map((item, index) => (
                <div className='skill-set' key={index}>
                    <div className='skill-icon'>{item.icon}</div>
                    <p className='percentage'>{item.skill}</p>
                    <ProgressBar animated variant="info" now={item.progress} label={<span className="custom-label">{`${item.progress}%`}</span>} />
                </div>
            ))}

            <hr className='rule' />

            <h2 className='skill-heading'>Frameworks</h2>
            {[
                { skill: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, progress: 75 },
                { skill: 'Node.js', icon: <FaNodeJs style={{ color: '#8CC84B' }} />, progress: 65 },
                { skill: 'Express.js', icon: <SiExpress style={{ color: '#66707a' }} />, progress: 60 },
                { skill: 'Bootstrap', icon: <SiBootstrap style={{ color: '#563D7C' }} />, progress: 70 },
                { skill: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, progress: 65 },
            ].map((item, index) => (
                <div className='skill-set' key={index}>
                    <div className='skill-icon'>{item.icon}</div>
                    <p className='percentage'>{item.skill}</p>
                    <ProgressBar animated variant="info" now={item.progress} label={<span className="custom-label">{`${item.progress}%`}</span>} />
                </div>
            ))}

            <hr className='rule' />

            <h2 className='skill-heading'>Databases</h2>
            {[
                { skill: 'MongoDB', icon: <SiMongodb  style={{ color: '#4DB33D' }} />, progress: 60 }, // Replace with an appropriate icon if needed
                { skill: 'SQLite', icon: <SiSqlite style={{ color: '#326278' }} />, progress: 70 }, // Replace with an appropriate icon if needed
            ].map((item, index) => (
                <div className='skill-set' key={index}>
                    <div className='skill-icon'>{item.icon}</div>
                    <p className='percentage'>{item.skill}</p>
                    <ProgressBar animated variant="info" now={item.progress} label={<span className="custom-label">{`${item.progress}%`}</span>} />
                </div>
            ))}

            <hr className='rule' />

            <h2 className='skill-heading'>Tools</h2>
            {[
                { skill: 'Git', icon: <FaGit style={{ color: '#F05032' }} />, progress: 40 },
                { skill: 'VS Code', icon: <VscVscode style={{ color: '#007ACC' }} />, progress: 85 }, // Consider replacing with a different icon if needed
                { skill: 'GitHub', icon: <FaGithub style={{ color: '#464545' }} />, progress: 50 },
                { skill: 'Jupyter Notebook', icon: <SiJupyter style={{ color: '#DA5B0D' }} />, progress: 70 },
                { skill: 'Google Colab', icon: <SiGooglecolab style={{ color: '#DB4437' }} />, progress: 65 },
            ].map((item, index) => (
                <div className='skill-set' key={index}>
                    <div className='skill-icon'>{item.icon}</div>
                    <p className='percentage'>{item.skill}</p>
                    <ProgressBar animated variant="info" now={item.progress} label={<span className="custom-label">{`${item.progress}%`}</span>} />
                </div>
            ))}

        </div>
    </div>
);

export default Skills;
