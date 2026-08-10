import React from 'react';
import './timeline.css';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import line from '../assets/line.gif';


function Timeline() {
    return (
        <div id="timeline" style={{backgroundImage: `url(${line})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1>Timeline</h1>
            <h3>Code Inovate Celebrate </h3>
        </div>
    );
}

export default Timeline;
