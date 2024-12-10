import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Correctly import each image from its respective file
import IMG1 from "../assets/Images/1.JPG";
import IMG2 from "../assets/Images/2.JPG";
import IMG3 from "../assets/Images/3.JPG";
import IMG4 from "../assets/Images/4.JPG";
import IMG5 from "../assets/Images/5.JPG";
import IMG6 from "../assets/Images/6.JPG";
import IMG7 from "../assets/Images/7.JPG";
import IMG8 from "../assets/Images/8.JPG";
import IMG9 from "../assets/Images/9.JPG";
import IMG10 from "../assets/Images/10.JPG";
import IMG11 from "../assets/Images/11.JPG";
import IMG12 from "../assets/Images/12.JPG";
import IMG13 from "../assets/Images/13.JPG";
import IMG14 from "../assets/Images/14.JPG";
import IMG15 from "../assets/Images/15.JPG";
import IMG16 from "../assets/Images/16.JPG";
import IMG17 from "../assets/Images/17.JPG";
import IMG18 from "../assets/Images/18.JPG";
import IMG19 from "../assets/Images/19.JPG";
import IMG20 from "../assets/Images/20.JPG";
import IMG21 from "../assets/Images/21.JPG";
import IMG22 from "../assets/Images/22.JPG";

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => (
  <LazyLoadImage src={src} alt={alt} effect="blur" className={className} />
);

const Gallery = () => {
  // Create an array of imported images
  const images = [
    IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10,
    IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17, IMG18, IMG19, IMG20,
    IMG21, IMG22
  ];

  // Map over the array to create gallery image objects
  const galleryImages = images.map((src, index) => ({
    id: index + 1,
    src,
    title: `Project ${index + 1}`,
    description: `Description for Project ${index + 1}`,
  }));

  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      {/* Header */}
      {/* Background image and text about capturing moments */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg')`,
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

      {/* Event images with text */}
      <section className="px-4 lg:px-32 py-16" id="Event">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Event 1 */}
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden">
            <LazyLoadImage
              src="https://i.pinimg.com/736x/da/5f/e8/da5fe845a8e6ce25b4884ee0a14cbc0b.jpg"
              alt="Event 1"
              effect="blur"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Event One</h3>
              <p className="text-gray-600">
                A remarkable celebration that brought joy to everyone. Exceptional catering, unforgettable moments.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden">
            <LazyLoadImage
              src="https://i.pinimg.com/736x/20/68/de/2068dea5d271db4d361176fcb93fb065.jpg"
              alt="Event 2"
              effect="blur"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Event Two</h3>
              <p className="text-gray-600">
                Another milestone event, where our catering service added flavor to every moment, making it truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center text-gray-800 pt-14 pb-8">
        <h1 className="text-3xl font-bold mb-2">Catering Experience</h1>
        <h2 className="px-2 text-sm max-w-3xl lg:text-md text-gray-600">
          Explore a dynamic showcase of our culinary artistry, where each dish tells a story, and every event is designed to offer a flavorful, memorable journey. Dive into the world of taste and creativity, and let us bring your next celebration to life with our personalized catering services.
        </h2>
      </header>

      {/* Image Gallery */}
      <div className="pb-12 px-4 lg:px-32 container mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-5 gap-3" id="Gallery">
        {galleryImages.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid rounded-lg overflow-hidden">
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <LazyLoadImage
                src={image.src}
                alt={image.title}
                className="w-full rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
              />
            </a>
            {/* Optional description */}
            {/* <div className="text-left text-gray-800 text-sm mt-2">
              <span className="font-medium text-lg">{image.title}</span> <br />
              <span className="text-gray-500 truncate-description">{image.description}</span> 
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
