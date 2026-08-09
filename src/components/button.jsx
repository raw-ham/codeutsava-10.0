import React from 'react';
import './button.css';

export default function CornerSvgButton(props) {
  return (
    <button className="buttonContainer" {...props}>
      {/* 1. Main Action Text */}
      {props.text}
      
      {/* 2. Absolute Wrapper for the SVG */}
      <span className="cornerBadge">
        
        {/* 3. Inline SVG (Sparkle / New Icon) */}
        <svg 
          xmlns="http://w3.org" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="svgIcon"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>

      </span>
    </button>
  );
}
