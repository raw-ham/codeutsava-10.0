import React from 'react';
import './guideline.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import banner from '../assets/heroBanner.jpeg';
import Button from '../components/button';
import compassMap from '../assets/compass-map.gif';
import bookpage from '../assets/bookpage.jpeg';

function Guideline() {
  return (
    <div id="guideline" >
      <div id="guidelineContainer">
        <img id="compassMap" src={compassMap} alt="compassMap" />
        <div className="bookpageContainer" style={{ top: '0%', right: '0%', transform:'translate(50%, -50%)' }}>
          <img id="bookpage" src={bookpage} alt="bookpage" />
          <p className="bookpageText">Guideline #1</p>
        </div>
        <div className="bookpageContainer" style={{ top: '100%', left: '0%' , transform:'translate(-50%, -50%)' }}>
          <img id="bookpage" src={bookpage} alt="bookpage" />
          <p className="bookpageText">Guideline #2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus, soluta, harum debitis, voluptates doloribus aliquid reprehenderit at officiis ipsa dolore pariatur eius. Beatae voluptate sequi omnis quaerat fuga possimus. </p>
        </div>
      </div>


    </div>
  );
}

export default Guideline;
