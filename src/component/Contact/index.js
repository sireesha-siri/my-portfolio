import React from "react";

import './index.css'

const Contact = () => (
    <div className="contact-section" id='contact'>
        <h2 className="contact-title">Connect with Me</h2>

        <div className="contact-content">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src="path_to_linkedin_icon" alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/yourprofile" target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src="path_to_github_icon" alt="GitHub" />
                    <span>GitHub</span>
                </a>
            </div>

            <form className="contact-form">
                <input type="text" className="form-input" placeholder="Your Name" required />
                <input type="email" className="form-input" placeholder="Your Email" required />
                <textarea className="form-input" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>

        <footer className="footer">
            <p>© 2024 Aguru Sireesha. All Rights Reserved.</p>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    </div>
);

export default Contact;
