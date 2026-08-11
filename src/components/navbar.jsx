import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import Button from '../components/button';
import navbarbg from '../assets/navbarbg.jpeg';

function Navbar() {
  const [visible, setVisible] = useState(false);

  const closeOffcanvas = () => setVisible(false);

  return (
    <>
      <nav className="navbar" >
        <div className="navbar-inner">
          <div className="navbar-logos">
            <Link to="/" className="navbar-logo-link" onClick={closeOffcanvas}>
              <img src={logo2} alt="CodeUtsava" className="navbar-logo navbar-logo-2" />
            </Link>
            <Link to="/" className="navbar-logo-link" onClick={closeOffcanvas}>
              <img src={logo1} alt="TCP" className="navbar-logo navbar-logo-1" />
            </Link>
          </div>

          <div className="navbar-desktop-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHv8OJ7jkp9thPyPx1HrWJNPoGZ2z7FaFtIqpz7lO3dIqqgg/viewform?pli=1" target="_blank" rel="noreferrer" className="navbar-link navbar-link-cta">Register</a>
          </div>

          <button
            className="navbar-toggler"
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          >
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </button>
        </div>
      </nav>

      <div className={`offcanvas-overlay ${visible ? 'offcanvas-overlay-visible' : ''}`} onClick={closeOffcanvas}></div>

      <div className={`offcanvas ${visible ? 'offcanvas-visible' : ''}`}>
        <div className="offcanvas-header">
          <div className="offcanvas-logos">
            <img src={logo2} alt="CodeUtsava" className="offcanvas-logo offcanvas-logo-2" />
            <img src={logo1} alt="TCP" className="offcanvas-logo offcanvas-logo-1" />
          </div>
          <button className="offcanvas-close" aria-label="Close navigation" onClick={closeOffcanvas}>
            <span className="offcanvas-close-line offcanvas-close-line-1"></span>
            <span className="offcanvas-close-line offcanvas-close-line-2"></span>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="offcanvas-nav">
            <li className="offcanvas-nav-item">
              <Link to="/" className="offcanvas-nav-link" onClick={closeOffcanvas}>Home</Link>
            </li>
            <li className="offcanvas-nav-item">
              <Link to="/about" className="offcanvas-nav-link" onClick={closeOffcanvas}>About</Link>
            </li>
            <li className="offcanvas-nav-item">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHv8OJ7jkp9thPyPx1HrWJNPoGZ2z7FaFtIqpz7lO3dIqqgg/viewform?pli=1" target="_blank" rel="noreferrer" className="offcanvas-nav-link offcanvas-nav-link-cta" onClick={closeOffcanvas}>Register</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
