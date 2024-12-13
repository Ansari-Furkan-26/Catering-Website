import React from "react";
import { motion } from "framer-motion";
import Cart from "./Cart";
import PackShowcase2 from "./Pack2";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/7d/0f/d4/7d0fd4fcc1518a8b953ce1a2e5790aca.jpg"
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
            Experience Our Services
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Rukn Al Dyafa, we deliver the elegance of traditional hospitality
            through luxurious catering.
          </motion.p>
        </div>
      </div>

      {/* Cart Component */}
      <PackShowcase2 />
      <Cart />
    </div>
  );
};

export default Checkout;
