import React from "react";

import sireesha from '../../images/sireesha.jpg'

import './index.css'

const LeftAbout = () => (
    <>
    <div className="image-container">
            <img src={sireesha} alt='siri' className="my-image"/>
    </div>

    <div className="image-container-for-small">
        <img src={sireesha} alt='siri' className="my-image-for-small"/>
    </div>
</>
)

export default LeftAbout