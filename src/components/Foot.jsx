import React from "react";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";

function Footer() {
  return (
    <div className="main w-full p-2 pt-8 text-black bg-white">
      <div className="f1">
        <div className="p1 p-4">
          <div className="join p-3 pt-10 uppercase tracking-wider leading-snug font-semibold">
            <div className="urdu flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-[#FFD700]">ركن</span>
                <span className="text-black"> الضيافة</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p2">
        <div className="mt-10">
          <div className=" item grid grid-cols-3 gap-7">
            <a href="#home" className="text-lg text-gray-700">
              Home
            </a>
            <a href="#services" className="text-lg text-gray-700">
              Services
            </a>
            <a href="#about" className="text-lg text-gray-700">
              About Us
            </a>
            <a href="#menu" className="text-lg text-gray-700">
              Menu
            </a>
            <a href="#events" className="text-lg text-gray-700">
              Events
            </a>
            <a href="#testimonials" className="text-lg text-gray-700">
              Testimonials
            </a>
            <a href="#gallery" className="text-lg text-gray-700">
              Gallery
            </a>
            <a href="#contact" className="text-lg text-gray-700">
              Contact Us
            </a>
            <a href="#faq" className="text-lg text-gray-700">
              FAQ
            </a>
          </div>
        </div>
      </div>
      </div>

      <hr className="f2" />

      <div className="last-div flex justify-between p-2">
        <div className="lst-div text-sm pt-11">
          <p>© Catering Service. All rights reserved.</p>
        </div>

        <div className="lst-btn pt-8 pl-32 social">
          <button className="btn-ft rounded-full gap-2 text-white flex p-1">
            <a
              href="https://www.instagram.com/gdscaiktc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="#blank"
            >
              <div className="rounded-full bg-[#1C1C21] hover:bg-[#3b3b3b] h-10 w-10 flex items-center p-2.5">
                <FaInstagram className="text-white text-xl" />
              </div>
            </a>
            <a href="https://wa.me/yourphonenumber" target="#blank">
              <div className="rounded-full bg-[#1C1C21] hover:bg-[#3b3b3b] h-10 w-10 flex items-center p-2.5">
                <FaWhatsapp className="text-white text-xl" />
              </div>
            </a>
            <a href="https://www.snapchat.com/add/yourusername" target="#blank">
              <div className="rounded-full bg-[#FFFC00] hover:bg-[#FFEC40] h-10 w-10 flex items-center p-2.5">
                <FaSnapchat className="text-black text-xl" />
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;