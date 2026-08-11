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
        <FAQelement
  heading="HOW DO I REGISTER FOR THE HACKATHON?"
  text="Visit our registration page and fill out the required details. Once you submit the form, you’ll receive a confirmation email with the next steps."
/>

<FAQelement
  heading="WHAT IS THE PARTICIPATION FEE?"
  text="The participation fee is ₹299 per participant. This covers access to the hackathon, mentorship sessions, and other event benefits."
/>

<FAQelement
  heading="WHO CAN PARTICIPATE?"
  text="The hackathon is open to students, developers, designers, and tech enthusiasts. Participants of all skill levels are welcome to join and showcase their ideas."
/>

<FAQelement
  heading="WHAT IS THE IDEAL TEAM SIZE?"
  text="Teams can have 2 to 4 members. We recommend forming a diverse team with members having different skills such as development, design, and presentation."
/>

<FAQelement
  heading="WHY SHOULD I PARTICIPATE IN CODEUTSAVA?"
  text="CodeUtsava is a great opportunity to build real-world projects, learn new technologies, meet fellow developers, receive mentorship, and compete for exciting prizes."
/>

<FAQelement
  heading="WHAT OTHER PERKS ARE PROVIDED?"
  text="Participants can enjoy mentorship from industry experts, certificates, networking opportunities, goodies, workshops, and exciting prizes for winning teams."
/>

<FAQelement
  heading="HOW WILL THE TEAMS BE JUDGED?"
  text="Teams will be evaluated based on innovation, technical implementation, creativity, problem-solving, scalability, and the overall impact of their project."
/>

<FAQelement
  heading="WHAT IS THE CODE OF CONDUCT?"
  text="All participants are expected to maintain a respectful, inclusive, and professional environment. Harassment, discrimination, or inappropriate behavior will not be tolerated."
/>

    </div>
  );
}

export default FAQSection;
