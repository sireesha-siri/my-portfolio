import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

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

    // Framer Motion animation variants
    const navItemVariants = {
        hidden: { opacity: 0, y: -20 }, // Initial state
        visible: { opacity: 1, y: 0 },  // Final state
    };

    return (
        <>
            {/* Large screen header */}
            <div className="header-for-large">
                <nav>
                    <div className="navs-content">
                        <motion.img 
                            src={logo} 
                            alt='logo' 
                            className="logo-style"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        <ul className="nav-bar">
                            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((navItem, index) => (
                                <motion.li
                                    key={navItem}
                                    className={`navs-item ${selectedNav === navItem ? 'selected' : ''}`}
                                    onClick={() => handleNavClick(navItem)}
                                    initial="hidden"
                                    animate="visible"
                                    variants={navItemVariants}
                                    transition={{ delay: 0.5 * index, duration: 0.3 }} // Staggered animation
                                >
                                    <a href={`#${navItem}`} className='tab-link'>{navItem.charAt(0).toUpperCase() + navItem.slice(1)}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Small screen header */}
            <div className="nav-header header-for-small">
                <div className="nav-content">
                    <motion.img 
                        src={logo} 
                        alt="website logo" 
                        className="website-logo"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <Popup
                        modal
                        trigger={
                            <motion.div
                                whileTap={{ scale: 0.9 }} // Animation on tap
                            >
                                <button
                                    type="button"
                                    className="ham-burger-icon"
                                    aria-label="menu"
                                >
                                    <GiHamburgerMenu size="30" color="white" />
                                </button>
                            </motion.div>
                        }
                        className="popup-content"
                    >
                        {close => (
                            <motion.div 
                                className="modal-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="nav-list">
                                    {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((navItem) => (
                                        <motion.li
                                            key={navItem}
                                            onClick={() => { handleNavClick(navItem); close(); }}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Add corresponding icons */}
                                            {navItem === 'home' && <AiFillHome size="30" className='mobile-small-icons' />}
                                            {navItem === 'about' && <BsInfoCircleFill size="30" className='mobile-small-icons' />}
                                            {navItem === 'education' && <IoMdSchool size="30" className='mobile-small-icons' />}
                                            {navItem === 'skills' && <GiSkills size="30" className='mobile-small-icons' />}
                                            {navItem === 'projects' && <FaProjectDiagram size="30" className='mobile-small-icons' />}
                                            {navItem === 'contact' && <FaPhoneVolume size="30" className='mobile-small-icons' />}
                                            <a href={`#${navItem}`} className="nav-item tab-link">
                                                {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </Popup>
                </div>
            </div>

            <ArrowToTop />
        </>
    );
};

export default Header;
