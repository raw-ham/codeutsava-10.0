import React from 'react';
import './faq.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import banner from '../assets/heroBanner.jpeg';
import Button from '../components/button';
import FAQElement from '../components/faqelement';

function FAQSection() {
  return (
    <div id="faqSection" >
      <FAQElement side="right" />
      <FAQElement side="left" />
      
    </div>
  );
}

export default FAQSection;
