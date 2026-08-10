import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.png';
import wanderingship from '../assets/wanderingship.gif';
import openbook from '../assets/openbook.png';
import ParticleOverlay from './ParticleOverlay';
import aboutUs from '../assets/aboutus.png';
import background from '../assets/aboutbg.jpeg';
import Button from './button';

function AboutUs() {
  return (
    <div id="aboutUs" >
      <ParticleOverlay />
      <div id="wheelContainer">
      <img id="wheel" src={wheel} alt="wheel" />
      </div>
        <div id="aboutText">
          <img src={aboutUs} alt="" />
         </div>
      <div id="aboutContainer">
        <img id="openbook" src={openbook} alt="openbook" />
      </div>

      </div>
  );
}

export default AboutUs;
