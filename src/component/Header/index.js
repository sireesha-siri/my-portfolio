import React, { useState } from 'react';

import logo from '../../images/logo.png';

import Popup from 'reactjs-popup';

import { GiHamburgerMenu, GiSkills } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { IoMdSchool } from "react-icons/io";
import { FaProjectDiagram } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";

import ArrowToTop from '../ArrowToTop';
import './index.css';



const Header = () => {
    const [selectedNav, setSelectedNav] = useState('home');

    const handleNavClick = (navItem) => {
        setSelectedNav(navItem);
        document.getElementById(navItem).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Large screen header */}
            <div className="header-for-large">
                <nav>
                    <div className="navs-content">
                        <img src={logo} alt='logo' className="logo-style"/>
                        <ul className="nav-bar">
                            <li
                                className={`navs-item ${selectedNav === 'home' ? 'selected' : ''}`}
                                onClick={() => handleNavClick('home')}
                            >
                                <a href='#home' className='tab-link'>Home</a>
                            </li>
                            <li
                                className={`navs-item ${selectedNav === 'about' ? 'selected' : ''}`}
                                onClick={() => handleNavClick('about')}
                            >
                                <a href='#about' className='tab-link'>About</a>
                            </li>
                            <li
                                className={`navs-item ${selectedNav === 'education' ? 'selected' : ''}`}
                                onClick={() => handleNavClick('education')}
                            >
                                <a href='#education' className='tab-link'>Education</a>
                            </li>
                            <li
                                className={`navs-item ${selectedNav === 'skills' ? 'selected' : ''}`}
                                onClick={() => handleNavClick('skills')}
                            >
                                <a href='#skills' className='tab-link'>Skills</a>
                            </li>
                            <li
                                className={`navs-item ${selectedNav === 'projects' ? 'selected' : ''}`}
                                onClick={() => handleNavClick('projects')}
                            >
                                <a href='#projects' className='tab-link'>Projects</a>
                            </li>
                            <li
                                className={`navs-item ${selectedNav === 'contact' ? 'selected' : ''}`}
                                style={{ paddingRight: '20px' }}
                                onClick={() => handleNavClick('contact')}
                            >
                                <a href='#contact' className='tab-link'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Small screen header */}
            <div className="nav-header header-for-small">
                <div className="nav-content">
                    <img src={logo} alt="website logo" className="website-logo" />
                    <Popup
                        modal
                        trigger={
                            <button
                                type="button"
                                className="ham-burger-icon"
                                aria-label="menu"
                            >
                                <GiHamburgerMenu size="30" color="white" />
                            </button>
                        }
                        className="popup-content"
                    >
                        {close => (
                            <div className="modal-container">
                                <ul className="nav-list">
                                    <li onClick={() => { handleNavClick('home'); close(); }}>
                                        <AiFillHome size="30" className='mobile-small-icons'/>
                                        <a href="#home" className="nav-item tab-link">Home</a>
                                    </li>
                                    <li onClick={() => { handleNavClick('about'); close(); }}>
                                        <BsInfoCircleFill size="30" className='mobile-small-icons' />
                                        <a href="#about" className="nav-item tab-link">About</a>
                                    </li>
                                    <li onClick={() => { handleNavClick('education'); close(); }}>
                                        <IoMdSchool size="30" className='mobile-small-icons' />
                                        <a href="#education" className="nav-item tab-link">Education</a>
                                    </li>
                                    <li onClick={() => { handleNavClick('skills'); close(); }}>
                                        <GiSkills size="30" className='mobile-small-icons' />
                                        <a href="#skills" className="nav-item tab-link">Skills</a>
                                    </li>
                                    <li onClick={() => { handleNavClick('projects'); close(); }}>
                                        <FaProjectDiagram size="30" className='mobile-small-icons' />
                                        <a href="#projects" className="nav-item tab-link">Projects</a>
                                    </li>
                                    <li onClick={() => { handleNavClick('contact'); close(); }}>
                                        <FaPhoneVolume size="30" className='mobile-small-icons' />
                                        <a href="#contact" className="nav-item tab-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>

            <ArrowToTop />
        </>
    );
};

export default Header;
