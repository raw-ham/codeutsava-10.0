import React from 'react';
import './Sponsors.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.png';
import banner from '../assets/banner.jpeg';
import Button from '../components/button';
import parchment from '../assets/parchment.jpeg';
import sponsor from '../assets/sponsors.png';

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
                <p>Premium Sponsors</p>
                <div className="sponsors-track">
                    {premiumSponsors.map((logo, index) => (
                      <div className="sponsor" key={`first-${index}`}>
                        <img src={logo} alt={`Sponsor ${index + 1}`} />
                      </div>
                    ))}

                    {premiumSponsors.map((logo, index) => (
                      <div className="sponsor" key={`second-${index}`}>
                        <img src={logo} alt="" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
            </div>

            <div id="silverSponsorsContainer">
                <p>Silver Sponsors</p>
                <div className="sponsors-track">
                    {/* First set */}
                    {silverSponsors.map((logo, index) => (
                      <div className="sponsor" key={`first-${index}`}>
                        <img src={logo} alt={`Sponsor ${index + 1}`} />
                      </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {silverSponsors.map((logo, index) => (
                      <div className="sponsor" key={`second-${index}`}>
                        <img src={logo} alt="" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
            </div>

        </div>
    );
}

export default Sponsors;
