import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import LuxuryServices from './pages/LuxuryServices';
import Footer from './components/Footer';
import Event from './pages/Event';
import AboutSection from './pages/AboutSection';
import CapturedMoment from './pages/CapturedMoment';
import Checkout from './pages/Checkout';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const locomotiveScroll = new LocomotiveScroll();

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/events" element={<Event />} />
          <Route path="/about-section" element={<AboutSection />} />
          <Route path="/luxury-services" element={<LuxuryServices />} />
          <Route path="/capture-moments" element={<CapturedMoment />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
