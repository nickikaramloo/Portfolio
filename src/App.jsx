import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import LumiAI from './pages/projects/LumiAI';
import Waypoint from './pages/projects/Waypoint';
import PlaySpace from './pages/projects/PlaySpace';
import Pinterest from './pages/projects/Pinterest';
import Dreamscape from './pages/projects/Dreamscape';
import Adapt from './pages/projects/Adapt';
import Ripple from './pages/projects/Ripple';
import Footer from './components/Footer';
import './App.css';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/lumi" element={<LumiAI />} />
          <Route path="/projects/waypoint" element={<Waypoint />} />
          <Route path="/projects/playspace" element={<PlaySpace />} />
          <Route path="/projects/pinterest" element={<Pinterest />} />
          <Route path="/projects/dreamscape" element={<Dreamscape />} />
          <Route path="/projects/adapt" element={<Adapt />} />
          <Route path="/projects/ripple" element={<Ripple />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;