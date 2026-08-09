import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import Button from '../components/button';

function HeroSection() {
  return (
    <div id="heroSection">
      <h3>Welcome to </h3>
      <h1>Codeutsava 10</h1>
      <h3>Code Inovate Celebrate </h3>
      <Button text="Join Discord"></Button> 
      <Button text="Register on Devfolio"></Button> 
      
    </div>
  );
}

export default HeroSection;
