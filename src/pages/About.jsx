import React from 'react';
import './About.css';
import Navbar from '../components/navbar.jsx';
import HeroSection from '../components/hero.jsx'
import AboutUs from '../components/AboutUs.jsx';
import Sponsors from '../components/Sponsors.jsx';
import Timeline from '../components/timeline.jsx';
import Footer from '../components/footer.jsx';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <Sponsors />
      <Timeline />
      <Footer />
    </div>
  );
}

export default About;