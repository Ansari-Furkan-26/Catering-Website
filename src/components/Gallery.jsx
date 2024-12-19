// import React from 'react';

// import IMG1 from "../assets/Images/1.JPG";
// import IMG2 from "../assets/Images/47.JPG";
// import IMG3 from "../assets/Images/3.JPG";
// import IMG4 from "../assets/Images/4.JPG";
// import IMG5 from "../assets/Images/40.JPG";
// import IMG6 from "../assets/Images/49.JPG";
// import IMG7 from "../assets/Images/37.JPG";

// const images = [
//   { src: IMG1, alt: "Team Member 1" },
//   { src: IMG2, alt: "Team Member 2" },
//   { src: IMG3, alt: "Team Member 3" },
//   { src: IMG4, alt: "Team Member 4" },
//   { src: IMG5, alt: "Team Member 5" },
//   { src: IMG6, alt: "Team Member 6" },
//   { src: IMG7, alt: "Team Member 7" },
// ];

// const ImageGallery = () => {
//   return (
//     <div className="pb-10 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
//       <div className="overflow-x-auto">
//         <div className="flex gap-4 justify-center md:justify-start">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image.src}
//               alt={image.alt}
//               className="max-w-sm object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;








////////////////////////////// ARABIC TRANSLATED //////////////////////////////////////////////////////////////////////////////////
import React from 'react';

import IMG1 from "../assets/Images/1.JPG";
import IMG2 from "../assets/Images/47.JPG";
import IMG3 from "../assets/Images/3.JPG";
import IMG4 from "../assets/Images/4.JPG";
import IMG5 from "../assets/Images/40.JPG";
import IMG6 from "../assets/Images/49.JPG";
import IMG7 from "../assets/Images/37.JPG";

const images = [
  { src: IMG1, alt: "Team Member 1" },
  { src: IMG2, alt: "Team Member 2" },
  { src: IMG3, alt: "Team Member 3" },
  { src: IMG4, alt: "Team Member 4" },
  { src: IMG5, alt: "Team Member 5" },
  { src: IMG6, alt: "Team Member 6" },
  { src: IMG7, alt: "Team Member 7" },
];

const ImageGallery = ({ language = "english" }) => {
  const translations = {
    english: {
      heading: "Our Team",
    },
    arabic: {
      heading: "فريقنا",
    },
  };

  return (
    <div className="pb-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        {translations[language].heading}
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 justify-center md:justify-start">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="max-w-sm object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
