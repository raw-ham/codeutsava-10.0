import React from 'react';
import './Sponsors.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import Button from '../components/button';

function Sponsors() {
    return (
        <div id="sponsors">
            <h1>Sponsors</h1>
            <h3>Code Inovate Celebrate </h3>
            <div id="rightWheelContainer">
                <img id="rightWheel" src={wheel} alt="wheel" />
            </div>

        </div>
    );
}

export default Sponsors;
