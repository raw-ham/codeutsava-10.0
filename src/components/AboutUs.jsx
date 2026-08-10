import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.png';
import wanderingship from '../assets/wanderingship.gif';
import openbook from '../assets/openbook.jpeg';
import ParticleOverlay from './ParticleOverlay';
import background from '../assets/aboutbg.jpeg';
import Button from './button';

function AboutUs() {
  return (
    <div id="aboutUs" >
      <ParticleOverlay />
      <h1>About Us</h1>
      <div id="wheelContainer">
      <img id="wheel" src={wheel} alt="wheel" />
      </div>
      <p>Codeutsava 10 is an annual event organized by the Turing Club of Programmers. It brings together like-minded coders from across the nation to foster a thriving coding culture with workshops, hackathons, gaming battles, MIC sessions, and more.</p>
      
      <div id="aboutContainer">
        <img id="openbook" src={openbook} alt="openbook" />
      </div>

      </div>
  );
}

export default AboutUs;
