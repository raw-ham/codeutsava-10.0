import './Landing.css';
import { useRef, useState } from "react";
import CornerSvgButton from '../components/button.jsx';
import wanderingship from '../assets/wanderingship.gif';
import codeutsava from '../assets/codeutsava.png';
import water from '../assets/waterIN.gif';
import { useAudio } from '../components/audioplayer';


function Landing() {

  function toggleWater() {
    const root = document.getElementById('landingroot');
    root.classList.add('fadeIn');
    console.log("was here");
    setTimeout(() => {
      window.location.href = '/about';
    }, 2000);
  }
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => {
    if (isPlaying) { audioRef.current.pause(); console.log('pause'); }
    else { audioRef.current.play(); console.log('play'); } setIsPlaying(!isPlaying);
  };
  
  const { issPlaying, togglePlay } = useAudio();



  return (
    <div id = "landingroot" className="landing-container" style={{ backgroundImage: `url(${wanderingship})` }}>
      {enabled && <div id="wavecurtain">
        <img id="water" src={water} alt="water" />
      </div>}
      <audio ref={audioRef} src="/audio/pirates.mp3" loop />
      <div className="landing-content">
        <div className="landing-title">
          <img id="cu10logo" src={codeutsava} alt="logo" />
        </div>
        <div className="landing-buttons">
          <CornerSvgButton onClick={togglePlay} icon="hat" text='Play/Pause'></CornerSvgButton>
          <CornerSvgButton onClick={toggleWater} icon="hat" text='togglw'></CornerSvgButton>
        </div>
      </div>
    </div>
  );
}

export default Landing;