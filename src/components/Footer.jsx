import React from "react";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full p-6 md:p-8">
      {/* Branding Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-wider uppercase">
          <span className="text-[#FFD700]">ركن</span>{" "}
          <span className="text-white"> الضيافة</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex justify-center lg:justify-end">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 text-center lg:text-left">
          <a href="#home" className="text-gray-400 hover:text-gray-100">
            Home
          </a>
          <a href="#services" className="text-gray-400 hover:text-gray-100">
            Services
          </a>
          <a href="#about" className="text-gray-400 hover:text-gray-100">
            About Us
          </a>
          <a href="#menu" className="text-gray-400 hover:text-gray-100">
            Menu
          </a>
          <a href="#events" className="text-gray-400 hover:text-gray-100">
            Events
          </a>
          <a href="#testimonials" className="text-gray-400 hover:text-gray-100">
            Testimonials
          </a>
          <a href="#gallery" className="text-gray-400 hover:text-gray-100">
            Gallery
          </a>
          <a href="#contact" className="text-gray-400 hover:text-gray-100">
            Contact Us
          </a>
          <a href="#faq" className="text-gray-400 hover:text-gray-100">
            FAQ
          </a>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-6 border-gray-700" />

      {/* Social Media and Copyright Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-center lg:text-left text-gray-500 text-sm mb-4 lg:mb-0">
          <p>© Catering Service. All rights reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/rukn_aldyafa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
          <a
            href="https://www.snapchat.com/add/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaSnapchat className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
