import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import LuxuryServices from './pages/LuxuryServices';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white">
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/luxury-services" element={<LuxuryServices />} /> {/* Route for Luxury Services */}
        </Routes>
      </div>
    </Router>
  );
}
