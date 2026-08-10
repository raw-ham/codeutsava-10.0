import React from 'react';
import './About.css';
import ParticleOverlay from '../components/ParticleOverlay.jsx';
import Navbar from '../components/navbar.jsx';
import HeroSection from '../components/hero.jsx'
import AboutUs from '../components/AboutUs.jsx';
import Sponsors from '../components/Sponsors.jsx';
import Timeline from '../components/timeline.jsx';
import Guideline from '../components/guideline.jsx';
import Footer from '../components/footer.jsx';
import mainbg from '../assets/mainbg.jpeg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{backgroundImage: `url(${mainbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <ParticleOverlay />
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <Sponsors />
      <Timeline />
      <Guideline />
      <Footer />
    </div>
  );
}

export default About;