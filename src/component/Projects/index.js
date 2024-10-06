import React, { useState } from 'react';
import './index.css';

import nxtwatch  from '../../images/nxtwatch.png'
import nxttrendz from '../../images/nxttrendz.png'
import jobby from '../../images/jobby.png'

import mydashboard from '../../images/mydashboard.png'
import gorest from '../../images/gorest.png'
import chatbot from '../../images/chatbot.png'

import priceofdiamond from '../../images/priceofdiamond.png'
import covid19dashboard from '../../images/covid19dashboard.png'
import ai from '../../images/ai .png'

const projectData = {
    frontend: [
        { title: 'Nxt Watch', image: nxtwatch, description: 'Nxtwatch is a YouTube clone that allows users to browse, search, and watch videos. It mimics core YouTube functionalities, providing a seamless video streaming experience. User name rahul, password rahul@2021', skills: ['HTML', 'CSS', 'React', 'REST API'], link: 'http://nxtwatchbysiri.ccbp.tech/' },
        { title: 'Nxt Trendz', image: nxttrendz, description: 'Nxt Trendz is an e-commerce website where users can browse, search, and view product details with an easy-to-use interface.It features a user-friendly interface for shopping. User name rahul, password rahul@2021.', skills: ['HTML', 'CSS', 'React', 'REST API'], link: 'http://asirisnxttrendz.ccbp.tech/' },
        { title: 'Jobby App', image: jobby, description: 'Jobby App is a comprehensive job search platform where users can explore, filter, and apply for various job opportunities based on their preferences. User name rahul, password rahul@2021.', skills: ['HTML', 'CSS', 'React', 'REST API'], link: 'http://jobbyappbysiri.ccbp.tech/' },
    ],
    backend: [
        { title: 'Twitter Clone', image: 'https://img.freepik.com/free-photo/twitter-phone-facebook-laptop_23-2147651286.jpg?t=st=1728042968~exp=1728046568~hmac=1d3bb0c85b73f0736af231f800beebe2ada53e3820b94d802f100dd34ac26e7d&w=740', description: 'Developed a Twitter-like application using Node.js and Express.js, implementing RESTful APIs for user authentication and real-time updates. This project features user registration, login, tweet creation, and a timeline to view tweets from followed users.', skills: ['Node.js', 'Express Js', 'SQlite', 'REST API'], link: 'https://github.com/sireesha-siri/My-Express-Js-Projects-NXTWAVE-/tree/main/n)%20Twitter-main' },
        { title: 'To-Do Application', image: 'https://img.freepik.com/premium-vector/mobile-checklist-concept-with-man-woman_1324816-24870.jpg?ga=GA1.1.1886958102.1716133369&semt=ais_hybrid', description: 'Created a task management application with a focus on user authentication and data persistence. Utilized Node.js, Express.js, and SQLite to allow users to create, update, and delete tasks, enhancing productivity through a simple and effective interface.', skills: ['Node.js', 'Express Js', 'SQlite', 'REST API'], link: 'https://github.com/sireesha-siri/My-Express-Js-Projects-NXTWAVE-/tree/main/m)%20Todo-Application-Assignment--main' },
        { title: 'COVID-19 India Portal', image: 'https://img.freepik.com/free-vector/coronavirus-globe-with-italy-infected-by-virus_23-2148490875.jpg?ga=GA1.1.1886958102.1716133369&semt=ais_hybrid', description: 'Designed a comprehensive portal to provide real-time updates on COVID-19 statistics in India. Leveraged REST APIs and Express.js for data retrieval, with user authentication to allow personalized experiences and data management.', skills: ['Node.js', 'Express Js', 'SQlite', 'REST API'], link: 'https://github.com/sireesha-siri/My-Express-Js-Projects-NXTWAVE-/tree/main/l)%20Covid-19-India-Portal-main' },
    ],
    dynamic: [
        { title: 'My Dashboard', image: mydashboard, description: 'A personal dashboard that displays information about me, including skills, projects, and achievements in an organized way.', skills: ['HTML', 'CSS', 'JS'], link: 'http://sirisdashboard.ccbp.tech/' },
        { title: 'Go REST Console', image: gorest, description: 'Go Rest Console is a tool designed to help users easily test and analyze API performance, offering insights and simplifying API interaction.', skills: ['HTML', 'CSS', 'JS', 'Bootstrap', 'REST API'], link: 'http://siriapitesting.ccbp.tech' },
        { title: 'Chatbot', image: chatbot, description: 'A simple chatbot that engages users with conversational responses by generating random values. Offering a fun and interactive conversation.', skills: ['HTML', 'CSS', 'JS', 'Bootstrap'], link: 'http://chatbotofsiri.ccbp.tech/' },
    ],
    python: [
        { title: 'AI-Resume Parsing', image: ai, description: 'Extract text from resume images using OCR and rank the top 5 candidates out of 10 with NLP. This project streamlines the recruitment process, making it faster and more accurate.', skills: ['Python', 'NLP', 'OCR', 'Tessract'], link: 'https://github.com/sireesha-siri/Image-Processing-Project' },
        { title: 'Price of Diamond', image: priceofdiamond, description: 'This project predicts diamond prices by applying machine learning algorithms to analyze features like carat, color, clarity, and cut. It aims to provide accurate price estimates based on these characteristics.', skills: ['Python', 'Machine Learning', 'Google colob'], link: 'https://github.com/sireesha-siri/Price_Of_The_Diamond' },
        { title: 'Covid 19 Dashboard', image: covid19dashboard, description: 'This project collects COVID-19 data and displays it using scatter plots, bar charts, and pie charts. It compares daily cases, gender distribution, and age groups to provide clear insights during pandemic.', skills: ['Python', 'Matplotlib', 'Jupyter Notebook'], link: 'https://github.com/sireesha-siri/Covid19_DashBoard' },
    ],
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const renderProjects = (category) => {
        return projectData[category].map((project, index) => (
            <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                </div>
                <div className="project-skills">
                    {project.skills.map((skill, index) => (
                        <span className="project-skill" key={index}>{skill}</span>
                    ))}
                </div>
                <a href={project.link} className="project-button" target='_blank' rel="noopener noreferrer">View Project</a>
            </div>
        ));
    };

    return (
        <div className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            
            <div className="project-tabs">
                {['frontend', 'backend', 'dynamic', 'python'].map((tab) => (
                    <button
                        key={tab}
                        className={`project-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>
            <div className="project-cards-container">
                {renderProjects(activeTab)}
            </div>
        </div>
    );
};

export default Projects;
