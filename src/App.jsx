import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import Footer from './components/Footer';
import Product from './components/Product';
import BlogSection from './components/BlogSection';
import About from './pages/About';
import VideoBackground from './components/VideoBackground';
import PromoBanner from './components/PromoBanner';
import Gallery from './pages/Gallery';
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
        <Route path="/ExploreMoment" element={<Gallery />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
