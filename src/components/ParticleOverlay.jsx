import { useMemo } from 'react';
import './ParticleOverlay.css';
import hatImg from '../assets/bird.gif';

function ParticleOverlay({ count = 10 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const startY = window.innerHeight / 2 + Math.random() * window.innerHeight;
      const size = 24 + Math.random() * 50;
      const duration = 64+ Math.random() * 24;
      const delay = Math.random() * 10;
      const opacity = 0.35 + Math.random() * 0.45;
      return {
        id: i,
        startY,
        size,
        duration,
        delay,
        opacity,
      };
    });
  }, [count]);

  return (
    <div className="particle-overlay">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            top: `${p.startY}px`,
            left: `-10%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          <img src={hatImg} alt="" className="particle-image" draggable={false} />
        </div>
      ))}
    </div>
  );
}

export default ParticleOverlay;
