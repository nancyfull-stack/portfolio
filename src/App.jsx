import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home component
import About from './pages/About'; // About component
import Projects from './pages/Projects'; // Projects component
import Contact from './pages/Contact'; // Contact component
import Navigation from './components/Navigation'; // Navigation component
import Footer from './components/Footer'; // Footer component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
