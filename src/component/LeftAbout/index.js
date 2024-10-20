import React from "react";
import { motion } from "framer-motion";
import sireesha from '../../images/sireesha.jpg'
import './index.css'

const LeftAbout = () => (
    <motion.div
        className="image-container"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 5, delay: 3 }}
    >
        <img src={sireesha} alt='siri' className="my-image"/>
    </motion.div>
);

export default LeftAbout;
