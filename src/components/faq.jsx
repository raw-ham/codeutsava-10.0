import React from 'react';
import './faq.css';
import { Link } from 'react-router-dom';
import wheel from '../assets/wheel.jpeg';
import banner from '../assets/heroBanner.jpeg';
import Button from '../components/button';
import FAQelement from '../components/faqelement.jsx';

function FAQSection() {
  return (
    <div id="faqSection" >
        <FAQelement />
        <FAQelement />

    </div>
  );
}

export default FAQSection;
