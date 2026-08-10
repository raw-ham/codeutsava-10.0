import './Landing.css';
import { useRef, useState } from "react";
import CornerSvgButton from '../components/button.jsx';
import wanderingship from '../assets/wanderingship.gif';
import codeutsava from '../assets/codeutsava.png';
import water from '../assets/water.gif';

function Landing() {

  function toggleWater() {
    const water = document.getElementById('water');
    water.style.animation = 'waterup 2s linear infinite';

  }

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => { 
    if (isPlaying) { audioRef.current.pause(); console.log('pause'); } 
    else { audioRef.current.play(); console.log('play'); } setIsPlaying(!isPlaying); };

  

  return (
    <div className="landing-container" style={{ backgroundImage: `url(${wanderingship})` }}>
      <div id = "wavecurtain">
        <p>Codeutsava</p>
        <img id="water" src={water} alt="water" />
      </div>
      <audio ref={audioRef} src="/audio/pirates.mp3" loop />
      <div className="landing-content">
        <div className="landing-title"> 
          <img id="cu10logo" src={codeutsava} alt="logo" />
        </div>
        <div className="landing-buttons">
          <CornerSvgButton onClick={toggleMusic} icon="hat" text = 'Play/Pause'></CornerSvgButton>
          toggleWater()
          <CornerSvgButton onClick={() => window.location.href = '/about'} icon="hat" text = 'About'></CornerSvgButton>
        </div>
      </div>
    </div>
  );
}

export default Landing;