import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import Contact from './pages/Contact';

function App() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen font-montserrat ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero isDark={isDark} />
              <Benefits isDark={isDark} />
              <HowItWorks isDark={isDark} />
              <Testimonials isDark={isDark} />
              <FAQ isDark={isDark} />
            </>
          } />
          <Route path="/about" element={<AboutUs isDark={isDark} />} />
          <Route path="/features" element={<Features isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;