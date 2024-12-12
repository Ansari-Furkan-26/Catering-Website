import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import LuxuryServices from './pages/LuxuryServices';
import Footer from './components/Footer';
import Product from './components/Product';
import BlogSection from './components/BlogSection';
import About from './pages/About';
import VideoBackground from './components/VideoBackground';
import PromoBanner from './components/PromoBanner';
import Gallery from './pages/Gallery';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import Checkout from './pages/Checkout';


const locomotiveScroll = new LocomotiveScroll();


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <BrowserRouter>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Routes>
      <Route path="/" element={<HeroSection />} /> {/* Homepage */}
          <Route path="/ExploreMoment" element={<Gallery />} />
          <Route path="/luxury-services" element={<LuxuryServices />} />
          <Route path="/order-form" element={<OrderForm />} /> {/* Route for OrderForm */}
          <Route path="/checkout" element={<Checkout />} /> {/* Route for Checkout */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
