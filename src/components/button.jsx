import React from 'react';
import './button.css';
import hat from '../assets/hat.gif';
import ship from '../assets/ship.gif';

export default function CornerSvgButton(props) {

  function getIcon() {
    if(props.icon == 'hat'){
      return <img className="leftCornerBadge" src={hat} alt="hat" />
    }
    else{
      return <img className="rightCornerBadge" src={ship} alt="ship" />
    }
  }

  return (
    <button className="buttonContainer" {...props}>
      {/* 1. Main Action Text */}
      {props.text}
      
      {/* 2. Absolute Wrapper for the SVG */}
      
        {getIcon()}
        
    </button>
  );
}
