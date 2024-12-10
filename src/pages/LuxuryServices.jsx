import React, { useState } from "react";
import Footer from '../components/Footer';
import Packages from '../components/Packages';
import BlogSection from '../components/BlogSection';
import About from '../pages/About';
import VideoBackground from '../components/VideoBackground';
import PromoBanner from '../components/PromoBanner';
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import OrderForm from "../components/OrderForm";
import Additionals from "../components/Additionals";
import Cart from "../components/Cart";

const LuxuryServices = () => {
  // State to manage the visibility of the popup message
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setShowPopup(true); // Show popup when button is clicked
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black h-96 px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/Images/ciel.jpg"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate your Event  <br className="hidden sm:block" />
            With our touch of Luxury.
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Rukn Al Dyafa, we deliver the elegance of traditional hospitality
            through luxurious catering, crafting unforgettable experiences with
            exquisite beverages for every occasion.
          </motion.p>

          {/* Popup Message */}
          {showPopup && (
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg mt-4"
              style={{ zIndex: 100 }}
            >
              <p>Under Development</p>
            </div>
          )}
        </div>

        {/* Social Media and Additional Section */}
        <section className="relative -mt-36 px-4 sm:px-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Social Media Icons */}
          <motion.div
            className="flex gap-4 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaSnapchat />
            </a>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="hidden md:block text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold">
            Limited Time Offer: Enjoy 10% off on all <br className="hidden sm:block" />
            beverage packages booked via Whatsapp.
            </h2>
            <div className="flex items-start justify-start gap-4 mt-3">
              {/* Images */}
              <div className="flex relative gap-2">
                <img
                  src="https://www.weddingsinhouston.com/uploads/vendors/any-occasion-party-rental/Screen-Shot-2016-09-22-at-2-28-04-PM.png"
                  alt="Property 1"
                  className="w-10 h-10 rounded-full object-cover border border-white"
                />
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.xdFOfyZe0eNCUPlsMZ4BVgHaEj&pid=Api&P=0&h=180"
                  alt="Property 2"
                  className="w-10 h-10 rounded-full object-cover border border-white"
                  style={{ marginLeft: "-15px" }}
                />
              </div>
              {/* Description */}
              <p className="text-xs sm:text-sm -mt-2">
              A world of flavors: <br /> Exquisite beverages and delectable refreshments <br />to elevate your event.
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <Packages />
      <Additionals />
      <OrderForm />
      <PromoBanner />
      <Testimonial />
    </div>
  );
};

export default LuxuryServices;