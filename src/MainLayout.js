import { Routes, Route, useLocation } from 'react-router-dom'; // STEP 1
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Newsletter from './Newsletter';

function MainLayout() {
  const location = useLocation(); // STEP 2
  const isHome = location.pathname === '/'; // STEP 3

  return ( // STEP 4
    <div className={isHome ? 'main-background' : 'secondary-background'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </div>
  );
}

export default MainLayout;