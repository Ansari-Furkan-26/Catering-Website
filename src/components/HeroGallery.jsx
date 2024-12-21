import React, { useState, useEffect } from "react";

import IMG2 from "../assets/Images/2.JPG";
import IMG5 from "../assets/Images/5.JPG";
import IMG34 from "../assets/Images/34.JPG";
import IMG51 from "../assets/Images/51.JPG";
import IMG8 from "../assets/Images/8.JPG";
import IMG9 from "../assets/Images/9.JPG";
import IMG39 from "../assets/Images/39.JPG";
import IMG11 from "../assets/Images/11.JPG";
import IMG12 from "../assets/Images/12.JPG";
import IMG14 from "../assets/Images/14.JPG";
import IMG15 from "../assets/Images/15.JPG";
import IMG16 from "../assets/Images/16.JPG";
import IMG23 from "../assets/Images/23.JPG";

const images = [
  { src: IMG2, alt: "Team Member 1" },
  { src: IMG5, alt: "Team Member 2" },
  { src: IMG39, alt: "Team Member 3" },
  { src: IMG51, alt: "Team Member 4" },
  { src: IMG8, alt: "Team Member 5" },
  { src: IMG9, alt: "Team Member 6" },
  { src: IMG34, alt: "Team Member 7" },
  { src: IMG11, alt: "Team Member 8" },
  { src: IMG12, alt: "Team Member 9" },
  { src: IMG14, alt: "Team Member 10" },
  { src: IMG15, alt: "Team Member 11" },
  { src: IMG16, alt: "Team Member 12" },
  { src: IMG23, alt: "Team Member 13" },
];

const ImageGallery = ({ language = "english" }) => {
  const translations = {
    english: {
      heading: "Gallery",
    },
    arabic: {
      heading: "معرض الصور",
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // Reset scroll position when it reaches the end
        const maxScrollWidth = images.length * 330; // 200 is an approximate width of each image (adjust based on actual width)
        return prev + 330 >= maxScrollWidth ? 0 : prev + 330;
      });
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="pb-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        {translations[language].heading}
      </h2>
      <div className="overflow-hidden p-4 mx-auto">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="max-w-sm w-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
