import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function MainPage() {
  return (
    <div style={{
      backgroundImage: "url('/realbackground.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      color: "black"
    }}>
    <div className="center-container">
      <h1 className="center-heading">Simplified News For The Modern Muslim.</h1>
    </div>

    <Link to="/newsletter" className="newsletter-box">
      <div className="newsletter-text">Newsletter</div>
    </Link>

    <Link to="/contact" className="contact-box">
      <div class="contact-text">Contact </div>
    </Link>

    <Link to="/about" className="about-box">
      <div class="about-text">About</div>
    </Link>

    <Link to="/home" className="home-box">
      <div class="home-text">Home</div>
    </Link>

    <div class="ummahFIY-box">
      <div class="ummahFIY-text">UmmahFIY</div>
    </div>

    <div class="register-box">
      <div class="register-text">Register for our Newsletter</div>
    </div>

    <div class="email-box">
      <div class="email-text">email@domain.com</div>
    </div>

    <div class="continue-box">
      <div class="continue-text">Continue</div>
    </div>

    <div className="App">
      <img src="/UmmahFIY.png" alt="UmmahFIY Logo" className="top-left-image" />
    </div>
    
    </div>
  );
}
export default MainPage;
