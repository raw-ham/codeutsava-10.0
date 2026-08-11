import faqsheet from '../assets/faqSheet.png';
import React from 'react';
import './faqelement.css';
import { Link } from 'react-router-dom';


function FAQSection(props) {
    return (
        <div id="rfaqdiv" {...props}>
            <div id="rightfaqdiv">
                <img id="rightfaqimg" src={faqsheet} alt="faqsheet" />
                <h1 id="rightfaqheading">{props.heading}</h1>
                <p id="rightfaqtext">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default FAQSection;
