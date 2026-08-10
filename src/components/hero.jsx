import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import banner from '../assets/heroBanner.jpeg';
import Button from '../components/button';

function HeroSection() {
  return (
    <div id="heroSection" >
      <h3>Welcome to </h3>
      <h1>Codeutsava 10</h1>
      <h3>Code Inovate Celebrate </h3>
      <Button text="Join Discord and toher great" icon="hat"></Button> 
      <Button text="Register on Devfolio" icon="ship"></Button> 
      
    </div>
  );
}

export default HeroSection;
