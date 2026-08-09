import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import Button from './button';

function AboutUs() {
  return (
    <div id="aboutUs">
      <h1>About Us</h1>
      <div id="wheelContainer">
      <img id="wheel" src={wheel} alt="wheel" />
      </div>
      <p>Codeutsava 10 is an annual event organized by the Turing Club of Programmers. It brings together like-minded coders from across the nation to foster a thriving coding culture with workshops, hackathons, gaming battles, MIC sessions, and more.</p>
      </div>
  );
}

export default AboutUs;
