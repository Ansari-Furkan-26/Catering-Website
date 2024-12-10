import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Farsi",
    username: "TheRealAhmed",
    quote: "They made our celebration extra special. The Beverage was delicious and the service was very professional.",
    image: "https://i.pinimg.com/736x/a3/c9/c0/a3c9c01b2aea6857519af976fe55b66e.jpg",
  },
  {
    id: 2,
    name: "Khalid Al Nuaimi",
    username: "@Khalid_AlNuaimi",
    quote: "The Beverage was excellent and every detail was carefully considered. Great service, I will recommend it to everyone",
    image: "https://i.pinimg.com/736x/5b/be/90/5bbe909df140388a27298ebd2692be0d.jpg",
  },
  {
    id: 3,
    name: "Jannat Al Saadi",
    username: "Jannat_Grace",
    quote: "The Beverage service was excellent, everything was delicious and beautifully organized. I highly...",
    image: "https://i.pinimg.com/736x/be/fb/45/befb45ee93d9d4478f182e13d64810e3.jpg",
  },
  {
    id: 4,
    name: "Fatima Al Harbi",
    username: "AlHarbi_Flame",
    quote: "Thank you for the wonderful catering service. Everyone loved the beveragae, and I’m sure we’ll order again",
    image: "https://i.pinimg.com/736x/28/00/9f/28009fe75134f540e8f63f33e3e79303.jpg",
  },
];

const TestimonialSection = () => {
  const containerRef = React.useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 pb-10 px-4">
      <h3 className="text-sm font-medium text-gray-500 text-center mb-2">
        Testimonial
      </h3>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Client Stories of Delicious Moments
      </h2>
      <div className="relative px-6 md:px-0 flex justify-center items-center">
        <div
          className="flex gap-8 py-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          ref={containerRef}
        >
          {testimonials.map((testimonial) => (
           <div
           key={testimonial.id}
           className="bg-gray-50 p-6  rounded-lg shadow-lg w-80 h-[320px] flex-shrink-0 snap-start flex flex-col justify-between"
         >
           <blockquote className="text-gray-800 text-sm md:text-base font-medium flex-grow">
             <span className="block text-4xl md:text-5xl text-gray-400 leading-none mb-4">
               “
             </span>
             <p className="line-clamp-3">{testimonial.quote}</p>
           </blockquote>
           <div className="flex items-center gap-4 mt-4">
             <img
               src={testimonial.image}
               alt={testimonial.name}
               className="w-14 h-14 rounded-full object-cover"
             />
             <div>
               <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
               <p className="text-xs text-gray-500">{testimonial.username}</p>
             </div>
           </div>
         </div>
         
          ))}
        </div>
        {/* Navigation Buttons (Visible only in Mobile View) */}
        <button
          className="md:hidden absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <button
          className="md:hidden absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
