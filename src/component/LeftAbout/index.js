import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sireesha from '../../images/sireesha.jpg'
import './index.css'

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 1024 : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isDesktop;
};

const LeftAbout = () => {
    const isDesktop = useIsDesktop();

    const animationProps = isDesktop
        ? { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } }
        : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };

    return (
        <motion.div
            className="image-container"
            {...animationProps}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <img src={sireesha} alt='siri' className="my-image" />
        </motion.div>
    );
};

export default LeftAbout;
