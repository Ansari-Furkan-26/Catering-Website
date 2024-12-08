import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
    </div>
  );
}
