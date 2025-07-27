import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow scroll-smooth">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
