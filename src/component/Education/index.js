import React from "react";

import {Chrono} from 'react-chrono'

import nxtwave from '../../images/nxtwave.png'
import btech from '../../images/btech.jpg'
import inter from '../../images/inter.jpg'
import school from '../../images/school.jpg'

import './index.css'

const items = [{title: 'May 2022 - ongoing'}, {title: '2020 - 2024'}, {title: '2018 - 2020'}, {title: '2018'}]

const Education = () => (
    <div className="education-section-background" id='education'>
      <h1 className="education-main-title">Education</h1>

      <div className="responsive-container">
        <Chrono
            mode="VERTICAL_ALTERNATING"
            
            theme={{primary: '#13a0b3', secondary: '#092e33', titleColor: "#b2ffff", titleColorActive: 'cyan',}}

            cardHeight = {250} items = {items}  fontSizes={{title: '1.5rem'}} cardStyle={{ overflowY: 'auto' }}
          >
            <div className="education_card ">
              <div className="education_sub_card">
                <img src={nxtwave} alt='logo' class="education-icon "/>
                <p class="education-title "> Nxtwave Disruptive Technologies</p>
              </div>

              <div class="education-mini-container ">
                <ul className="main-items-container">
                  <li>➢ MERN</li>
                  <li>➢ Industry Ready Certification in Full-stack Development</li>
                </ul>
              </div>
            </div>

            <div className="education_card ">
              <div className="education_sub_card">
                <img src={btech} alt='logo' class="education-icon "/>
                <p class="education-title">Centurion University of Technology & Management</p>
              </div>

              <div class="education-mini-container ">
                <ul className="main-items-container">
                  <li>➢ CUTM</li>
                  <li>➢ BTech CSE</li>
                  <li>➢ 9.3 CGPA</li>
                </ul>
              </div>
            </div>

            <div className="education_card ">
              <div className="education_sub_card">
                <img src={inter} alt='logo' class="education-icon "/>
                <p class="education-title mt-4"> Amaravathi International Institute of Mathematics and Science</p>
              </div>

              <div class="education-mini-container ">
                <ul className="main-items-container">
                  <li>➢ BIE</li>
                  <li>➢ Intermediate MPC</li>
                  <li>➢ 9.75 CGPA</li>
                </ul>
              </div>
            </div>

            <div className="education_card ">
              <div className="education_sub_card">
                <img src={school} alt='logo' class="education-icon "/>
                <p class="education-title mt-4">St Ann's Convent English Medium School</p>
              </div>

              <div class="education-mini-container ">
                <ul className="main-items-container">
                  <li>➢ ICSE</li>
                  <li>➢ Secondary School Of Certificate </li>
                  <li>➢ 89.83%</li>
                </ul>
              </div>
            </div>
          </Chrono>
      </div>
    </div>
)

export default Education