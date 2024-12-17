import React, { useState } from "react";
import Cart from "./Cart";
import PackShowcase2 from "./Packages";
import { motion } from "framer-motion";

const Checkout = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);

  const handlePackageSelection = (title, price) => {
    setSelectedPackage(title);
    setSelectedPackagePrice(price);
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/74/fa/f7/74faf76a2616f4f776cf157c18a09d77.jpg"
            alt="Hero"
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
            transition={{ duration: 0.8, delay: 0.2 }}>
            At Rukn Al Dyafa, we deliver the elegance of traditional hospitality
            through luxurious catering.
          </motion.p>
        </div>
      </div>

      
    <PackShowcase2 onSelectPackage={handlePackageSelection} />
    <Cart selectedPackage={selectedPackage} selectedPackagePrice={selectedPackagePrice} />      
    </div>
  );
};

export default Checkout;