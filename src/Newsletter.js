import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Newsletter() {
  return (
    <div style={{
      backgroundImage: "url('/alternatebackground.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      color: "black"
    }}>


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


    <div className="App">
      <img src="/UmmahFIY.png" alt="UmmahFIY Logo" className="top-left-image" />
    </div>
  
    
    </div>
  );
}
export default Newsletter;
