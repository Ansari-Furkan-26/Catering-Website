import React, { useEffect, useState } from "react";
import Plans from '../components/Plans';
import BlogSection from '../components/BlogSection';
import About from '../components/About';
import VideoBackground from '../components/VideoBackground';
import PromoBanner from '../components/PromoBanner';
import Form from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";
import FeaturedArtworks from "../components/HeroGallery";

import IMG2 from "../assets/Images/2.JPG";
import IMG51 from "../assets/Images/51.JPG";
import IMG48 from "../assets/Images/49.JPG";
import IMG10 from "../assets/Images/10.JPG";
import IMG50 from "../assets/Images/50.JPG";
import IMG43 from "../assets/Images/43.JPG";

const CateringHeroSection = ({ language }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Define images array
  const images = [
    // "https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg",
    // "https://i.pinimg.com/736x/5d/c5/b4/5dc5b454033a9ffc56cc4297a25d2309.jpg",
    // "https://i.pinimg.com/736x/2a/75/40/2a75408e842265f495bebb58cec55be0.jpg",
    IMG2,
    IMG51,
    IMG48,
    IMG10,
    IMG50,
    IMG43,
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const translations = {
    english: {
      heading: "Flavors that tell stories, \n and hospitality that inspires moments.",
      paragraph:
        "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering, crafting unforgettable experiences with exquisite beverages for every occasion.",
      bookNow: "Book Now",
      SideQuote: "Every season there is a set for two-tours",
      SideDesc: "Exclusive arrangements, and immersive experiences for beverage services."
    },
    arabic: {
      heading: "نكهات تروي القصص، \nوضيافة تلهم اللحظات.",
      paragraph:
        "في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال خدمات الضيافة الفاخرة، ونصنع تجارب لا تُنسى مع مشروبات راقية لكل مناسبة.",
      bookNow: "احجز الآن",
      SideQuote: "في كل موسم هناك مجموعة لجولتين",
      SideDesc: "ترتيبات حصرية وتجارب غامرة لخدمات المشروبات"
    },
  };

  const t = translations[language];

  return (
    <div className="">
      <div className="relative bg-black h-screen px-4 sm:px-8">

        {/* Background Marquee for Mobile View */}
        <div className="absolute inset-0 md:hidden overflow-hidden bg-black opacity-80">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100 " : "opacity-0 "}`}
            >
              <img
                src={src}
                alt={`Marquee ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-tea-coffee-service-golden-cups-ramadan-holidays-decoration-image_15567931.png"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.heading}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.paragraph}
          </motion.p>

          {/* Animated Button */}
          <a href="luxury-services">
            <motion.button
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t.bookNow}
            </motion.button>
          </a>
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
            <a href="https://www.instagram.com/rukn_aldyafa/" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+971503665518" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaWhatsapp />
            </a>
            <a href="https://www.snapchat.com/add/ruknaldyafa?sender_web_id=f7b1dbb5-c3c0-48c6-a15b-058b0e4429dc&device_type=desktop&is_copy_url=true" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
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
            <h2 className="text-lg sm:text-xl font-semibold max-w-[260px]">
              {t.SideQuote}
            </h2>
            <div className="flex items-start justify-start gap-4 mt-3">
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
              <p className="text-xs sm:text-sm -mt-2 max-w-[180px]">
                {t.SideDesc}
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <About language={language} />
      <VideoBackground language={language} />
      <Plans language={language} />
      <BlogSection language={language} />
      <FeaturedArtworks language={language} />
      {/* <Testimonial language={language} /> */}
      <Form language={language} />
      {/* <PromoBanner language={language} /> */}
    </div>
  );
};

export default CateringHeroSection;
