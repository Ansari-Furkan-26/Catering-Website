import React from "react";

const PromoBanner = () => {
  return (
    <div className=" bg-gray-100 flex py-5 px-4 md:px-20 items-center justify-center" >
    <div className="relative bg-cover bg-center rounded-3xl w-full h-64 flex items-center justify-center text-gray-200 shadow-lg" 
         style={{
           backgroundImage: "url('https://i.pinimg.com/originals/07/1b/89/071b897273fc4a0cabc7ca7610992138.gif')", // Replace with your image URL
         }}>
      <div className="text-center">
        <h2 className="text-lg md:text-3xl font-bold mb-4">
          Get 10% Off and Exclusive Offers!
        </h2>
        <p className="mb-6">Contact us now to claim your special discount.</p>
        <a
          href="https://wa.me/7045992776?text=I%20Require%20Discount"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-[#2AB540] text-white font-semibold rounded-lg hover:bg-[#177711] transition"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
    </div>
  );
};

export default PromoBanner;
