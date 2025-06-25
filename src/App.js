import './App.css';

function App() {
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
    <div class="newsletter-box">
      <div class="newsletter-text">Newsletter</div>
    </div>
    <div class="contact-box">
      <div class="contact-text">Contact </div>
    </div>
    <div class="about-box">
      <div class="about-text">About</div>
    </div>
    <div class="home-box">
      <div class="home-text">Home</div>
    </div>
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
export default App;
