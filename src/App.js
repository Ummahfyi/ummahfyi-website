import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';
import About from './About';
import Contact from './Contact';
import Newsletter from './Newsletter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}
export default App;
