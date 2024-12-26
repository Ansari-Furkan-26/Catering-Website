import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import LuxuryServices from './pages/LuxuryServices';
import Footer from './components/Footer';
import Event from './pages/Event';
import AboutSection from './pages/AboutSection';
import CapturedMoment from './pages/CapturedMoment';
import Checkout from './components/Checkout';
import Custom404Page  from './components/NotFound';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initGA, logPageView } from "./analytics";

const locomotiveScroll = new LocomotiveScroll();

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <div className="bg-white">
      <BrowserRouter>
      <Navbar language={language} toggleLanguage={toggleLanguage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path="/" element={<HeroSection language={language}/>} />
          <Route path="/events" element={<Event  language={language} />} />
          <Route path="/about-section" element={<AboutSection language={language}/>} />
          <Route path="/luxury-services" element={<LuxuryServices language={language} />} />
          <Route path="/capture-moments" element={<CapturedMoment language={language} />} />
          <Route path="/checkout" element={<Checkout language={language} />} />    
          <Route path="*" element={<Custom404Page  />} />
        </Routes>
        <Footer language={language} />
      </BrowserRouter>
      
    </div>
  );
}