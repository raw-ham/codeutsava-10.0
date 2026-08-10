import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import banner from '../assets/heroBanner.jpeg';
import Button from '../components/button';
import codeutsava from '../assets/codeutsava.png';

function HeroSection() {
  return (
    <div id="heroSection" >
      <h3>Welcome to </h3>
      <div id="codeutsavaContainer">
        <img id="codeutsava" src={codeutsava} alt="banner" />
      </div>  
      <h3>Code Inovate Celebrate </h3>
      <Button text="Join Discord Community" icon="hat"></Button> 
      <Button text="Register on Devfolio" icon="ship"></Button> 
      
    </div>
  );
}

export default HeroSection;
