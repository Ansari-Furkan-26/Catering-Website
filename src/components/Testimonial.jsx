import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: {
      english: "Ahmed Al Farsi",
      arabic: "احمد الفارسي",
    },
    username: {
      english: "@TheRealAhmed",
      arabic: "@أحمد_الحقيقي",
    },
    quote: {
      english:
        "They made our celebration extra special. The Beverage was delicious and the service was very professional.",
      arabic:
        "لقد جعلوا احتفالنا مميزًا جدًا. المشروبات كانت لذيذة وكانت الخدمة محترفة للغاية.",
    },
    image:
      "https://i.pinimg.com/736x/a3/c9/c0/a3c9c01b2aea6857519af976fe55b66e.jpg",
  },
  {
    id: 2,
    name: {
      english: "Khalid Al Nuaimi",
      arabic: "خالد النعيمي",
    },
    username: {
      english: "@Khalid_AlNuaimi",
      arabic: "@النعيمي_خالد",
    },
    quote: {
      english:
        "The Beverage was excellent and every detail was carefully considered. Great service, I will recommend it to everyone.",
      arabic:
        "المشروبات كانت ممتازة وتم النظر في كل التفاصيل بعناية. خدمة رائعة، سأوصي بها للجميع.",
    },
    image:
      "https://i.pinimg.com/736x/5b/be/90/5bbe909df140388a27298ebd2692be0d.jpg",
  },
  {
    id: 3,
    name: {
      english: "Jannat Al Saadi",
      arabic: "جنة السعدي",
    },
    username: {
      english: "@Jannat_Grace",
      arabic: "@جنة_النعمة ",
    },
    quote: {
      english:
        "The Beverage service was excellent, everything was delicious and beautifully organized. I highly recommend.",
      arabic:
        "كانت خدمة تقديم المشروبات ممتازة، كل شيء كان لذيذًا ومنظمًا بشكل جميل. أوصي بها بشدة.",
    },
    image:
      "https://i.pinimg.com/736x/be/fb/45/befb45ee93d9d4478f182e13d64810e3.jpg",
  },
  {
    id: 4,
    name: {
      english: "Fatima Al Harbi",
      arabic: "فاطمة الحربي",
    },
    username: {
      english: "@AlHarbi_Flame",
      arabic: "@نور_الحربي",
    },
    quote: {
      english:
        "Thank you for the wonderful catering service. Everyone loved the beverage, and I’m sure we’ll order again.",
      arabic:
        "خدمة الضيافة كانت رائعة. الجميع أحبوا المشروبات، وأنا متأكد أننا سنطلب مرة أخرى.",
    },
    image:
      "https://i.pinimg.com/736x/28/00/9f/28009fe75134f540e8f63f33e3e79303.jpg",
  },
];

const translations = {
  english: {
    testimonialHeading: "Client Stories of Delicious Moments",
  },
  arabic: {
    testimonialHeading: "قصص العملاء من اللحظات الشهية",
  },
};

function TestimonialSection({ language }) {
  const t = translations[language] || translations.english;

  const containerRef = React.useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 pb-4 px-4">
      {/* Testimonial Heading */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.testimonialHeading}
      </motion.h2>
      {/* Testimonial Cards Section */}
      <div className="relative px-6 md:px-0 flex justify-center items-center">
        <div
          className="flex gap-8 py-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          ref={containerRef}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 h-[320px] flex-shrink-0 snap-start flex flex-col justify-between"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-gray-800 text-sm md:text-base font-medium flex-grow">
                <span className="block text-4xl md:text-5xl text-gray-400 leading-none mb-4">
                  “
                </span>
                <p className="line-clamp-3">{testimonial.quote[language]}</p>
              </blockquote>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name[language]}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {testimonial.name[language]}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.username[language]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Navigation Buttons for Mobile View */}
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
}

export default TestimonialSection;