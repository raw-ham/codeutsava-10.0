import faqsheet from '../assets/faqSheet.png';
import React from 'react';
import './faqelement.css';
import { Link } from 'react-router-dom';


function FAQSection() {
    return (
        <div id="faqdiv" >
            <div id="rightfaqdiv">
                <img id="rightfaqimg" src={faqsheet} alt="faqsheet" />
                <p id="rightfaqtext">
                    Frequently Asked Questions
                </p>
            </div>


        </div>
    );
}

export default FAQSection;
