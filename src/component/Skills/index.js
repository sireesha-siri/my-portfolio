import React from 'react';
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiExpress, SiBootstrap, SiTailwindcss, SiJupyter, SiMongodb, SiSqlite, SiGooglecolab } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';
import './index.css';

const skillData = [
    { category: 'Languages', skills: [
        { skill: 'JavaScript', icon: <FaJs style={{ color: 'yellow' }} />, progress: 80 },
        { skill: 'Python', icon: <FaPython style={{ color: 'blue' }} />, progress: 70 },
        { skill: 'HTML', icon: <FaHtml5 style={{ color: 'orange' }} />, progress: 85 },
        { skill: 'CSS', icon: <FaCss3Alt style={{ color: 'blue' }} />, progress: 80 },
    ]},
    { category: 'Frameworks', skills: [
        { skill: 'React', icon: <FaReact style={{ color: '#61DAFB' }} />, progress: 75 },
        { skill: 'Node.js', icon: <FaNodeJs style={{ color: '#8CC84B' }} />, progress: 65 },
        { skill: 'Express.js', icon: <SiExpress style={{ color: '#66707a' }} />, progress: 60 },
        { skill: 'Bootstrap', icon: <SiBootstrap style={{ color: '#563D7C' }} />, progress: 70 },
        { skill: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, progress: 65 },
    ]},
    { category: 'Databases', skills: [
        { skill: 'MongoDB', icon: <SiMongodb  style={{ color: '#4DB33D' }} />, progress: 60 },
        { skill: 'SQLite', icon: <SiSqlite style={{ color: '#326278' }} />, progress: 70 },
    ]},
    { category: 'Tools', skills: [
        { skill: 'Git', icon: <FaGit style={{ color: '#F05032' }} />, progress: 40 },
        { skill: 'VS Code', icon: <VscVscode style={{ color: '#007ACC' }} />, progress: 85 },
        { skill: 'GitHub', icon: <FaGithub style={{ color: '#464545' }} />, progress: 50 },
        { skill: 'Jupyter Notebook', icon: <SiJupyter style={{ color: '#DA5B0D' }} />, progress: 70 },
        { skill: 'Google Colab', icon: <SiGooglecolab style={{ color: '#DB4437' }} />, progress: 65 },
    ]}
];

const Skills = () => {
    return (
        <div className='skills-background-section' id='skills'>
            <h1 className='skills-title'>Skills</h1>
            <div className='skills-subset'>
                {skillData.map((category, index) => (
                    <React.Fragment key={index}>
                        <h2 className='skill-heading'>{category.category}</h2>
                        {category.skills.map((item, idx) => (
                            <motion.div 
                                className='skill-set' 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className='skill-icon'>{item.icon}</div>
                                <p className='percentage'>{item.skill}</p>
                                <ProgressBar animated variant="info" now={item.progress} label={<span className="custom-label">{`${item.progress}%`}</span>} />
                            </motion.div>
                        ))}
                        <hr className='rule' />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Skills;
