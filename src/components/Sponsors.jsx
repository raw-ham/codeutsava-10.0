import React from 'react';
import './Sponsors.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.png';
import banner from '../assets/banner.jpeg';
import Button from '../components/button';
import parchment from '../assets/parchment.jpeg';
import sponsor from '../assets/sponsors.png';
import jslogo from '../assets/jslogo.png';
import rel from '../assets/reliance.png';

const premiumSponsors = [
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
  "../assets/jslogo.png",
];

const silverSponsors = [
  "/sponsors/sponsor1.png",
  "/sponsors/sponsor2.png",
  "/sponsors/sponsor3.png",
  "/sponsors/sponsor4.png",
  "/sponsors/sponsor5.png",
];



function Sponsors() {
    return (
        <div id="sponsors">
            <div id="rightWheelContainer">
                <img id="rightWheel" src={wheel} alt="wheel" />
            </div>
            <div id="sponsorstext">
                <img id="sponsorimg" src={sponsor} alt="sponsor" />
            </div>
            <div id="premiumSponsorsContainer" >
                <img src={rel} alt="jslogo" />
                <img src={rel} alt="jslogo" />
                <img src={jslogo} alt="jslogo" />
                <img src={jslogo} alt="jslogo" />
                
            </div>

            

        </div>
    );
}

export default Sponsors;
