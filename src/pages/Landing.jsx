import './Landing.css';
import { useRef, useState } from "react";
import CornerSvgButton from '../components/button.jsx';

function Landing() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => { 
    if (isPlaying) { audioRef.current.pause(); console.log('pause'); } 
    else { audioRef.current.play(); console.log('play'); } setIsPlaying(!isPlaying); };

  return (
    <div className="landing-container">
      <audio ref={audioRef} src="/audio/pirates.mp3" loop />
      <div className="landing-content">
        <h1 className="landing-title"> CodeUtsava 10.0 </h1>
        <div className="landing-buttons">
          <CornerSvgButton onClick={toggleMusic} text = 'Play/Pause'></CornerSvgButton>
          <CornerSvgButton onClick={() => window.location.href = '/about'} text = 'About'></CornerSvgButton>
        </div>
      </div>
    </div>
  );
}

export default Landing;