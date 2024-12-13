import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const OrderForm = lazy(() => import("../components/OrderForm"));
const Packages = lazy(() => import("../components/Packages"));
const PromoBanner = lazy(() => import("../components/PromoBanner"));

const LuxuryServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
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
            Elevate your Event
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

        <OrderForm />
        {/* <Packages /> */}
        <PromoBanner />
    </div>
  );
};

export default LuxuryServices;
