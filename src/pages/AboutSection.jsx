import React from "react";
import About from '../components/About';
import Gallery from '../components/Gallery';

const AboutSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      {/* Header */}
      {/* Background image and text about capturing moments */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/ad/6d/f7/ad6df7aab8a0828cca4a2a471e62bae5.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Capture the Moment</h2>
          <p className="text-lg">
            Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail.
          </p>
        </div>
      </section> 
      <About />    
      <Gallery />
     
    </div>
  );
};

export default AboutSection;

