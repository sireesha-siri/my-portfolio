import React, { useState } from "react";

import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

import { MdOutlineDone, MdOutgoingMail } from "react-icons/md";

import './index.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send this data to your server or email service
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        // Show response message
        setResponse('Your message has been sent!');

        // Hide response message after 1 minute (60000 milliseconds)
        setTimeout(() => {
            setResponse('');
        }, 10000);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id='contact'>
            <div className="contact-section">
                <div className="contact-text-container">
                    <h2 className="contact-title">Connect with Me</h2>

                    <div className="contact-content">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/aguru-sireesha/" target="_blank" className="social-icon" rel="noopener noreferrer">
                                <FaLinkedin className="social-contact-icon"/>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/sireesha-siri" target="_blank" className="social-icon" rel="noopener noreferrer">
                                <FaGithub className="social-contact-icon"/>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.youtube.com/channel/UChH22L9R2UGjE7UJjKAp7HA" target="_blank" className="social-icon" rel="noopener noreferrer">
                                <FaYoutube className="social-contact-icon"/>
                                <span>YouTube</span>
                            </a>
                            <a href="mailto:a.sireesha531@gmail.com" className="social-icon">
                                <MdOutgoingMail className="social-contact-icon"/>
                                <span>Email Me</span>
                            </a>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Your Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        className="form-input" 
                        placeholder="Your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <textarea 
                        className="form-input" 
                        placeholder="Your Message" 
                        rows="5" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    ></textarea>
                    <button type="submit" className="send-button">Send Message</button>
                </form>
            </div>

            <div className="response-container">
                {response && <div className="response-message">{response} <MdOutlineDone className="done"/></div>}
            </div>

        </div>
    );
};

export default Contact;
