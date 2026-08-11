import React from 'react';
import './guideline.css';
import { Link } from 'react-router-dom';
import compassMap from '../assets/compass-map.gif';
import bookpage from '../assets/bookpage.png';
import guideline from '../assets/guideline.png';
import ParticleOverlay from './ParticleOverlay';

function Guideline() {
  return (
    <div id="guideline" >
      <ParticleOverlay />
      <div id="guidelineContainer">
        <img id="compassMap" src={compassMap} alt="compassMap" />

        <div id="guidelineText">
          <img src={guideline} alt="" />
        </div>

        <div className="bookpageContainer" style={{ top: '0%', right: '0%', transform:'translate(50%, -50%)' }}>
          <img id="bookpage" src={bookpage} alt="bookpage" />
          <p className="bookpageText">Guideline #1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime, inventore id quidem illum sunt doloremque, cumque totam at numquam nihil placeat sit repudiandae laborum perspiciatis ab eos quia a?</p>
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
