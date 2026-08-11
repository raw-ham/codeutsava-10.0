import React, { useRef, useState } from 'react';
import './Home.css';
import ParticleOverlay from '../components/ParticleOverlay.jsx';
import Navbar from '../components/navbar.jsx';
import HeroSection from '../components/hero.jsx'
import AboutUs from '../components/AboutUs.jsx';
import Sponsors from '../components/Sponsors.jsx';
import Timeline from '../components/timeline.jsx';
import Guideline from '../components/guideline.jsx';
import FAQSection from '../components/faq.jsx';
import Footer from '../components/footer.jsx';
import mainbg from '../assets/mainbg.jpeg';
import { Link } from 'react-router-dom';

export function About() {

  function fadeout() { // removed
    const homerroot = document.getElementById("homeroot");
    homeroot.classList.add("fadeOut");
  }

  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => {
    if (isPlaying) { audioRef.current.pause(); console.log('pause'); }
    else { audioRef.current.play(); console.log('play'); } setIsPlaying(!isPlaying);
  };

  return (

    <div id="homeroot" style={{ backgroundImage: `url(${mainbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top' }}>

      <audio ref={audioRef} src="/audio/pirates.mp3" loop />
      <button id="musicbtn" onClick={toggleMusic}>{isPlaying ? '⏸' : '▶'}</button>
      <ParticleOverlay />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Sponsors />
      <Timeline />
      <Guideline />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default About;