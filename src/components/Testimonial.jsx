import React from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Import Google Icon

const getRelativeTime = (dateString) => {
  const now = new Date();
  const postedDate = new Date(dateString);
  const diffInSeconds = Math.floor((now - postedDate) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

const testimonials = [
  {
    id: 1,
    name: {
      english: "Sabrein Al Najjar",
      arabic: "Sabrein Al Najjar",
    },
    username: {
      english: "Sabrein Al Najjar",
      arabic: "Sabrein Al Najjar",
    },
    quote: {
      english:
        "Amazing service, everything is arranged, creative people, and their faces are always smiling. Thank you very much for the service 🫰🏻",
      arabic:
        "خدمة بتجنن و كل شي مرتب و مبدعين و وجهم بشوش دايما شكرا كتير على الخدمة 🫰🏻",
    },
    stars: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJ4w29IgtizfuqCScQVQZNWabKd9CZfWWde9cIFZWLl5jIM6g=w45-h45-p-rp-mo-br100",
    link: "https://www.google.com/maps/place/Rukn+Al+Dyafa+%7C+Hospitality+Service/@24.3540069,53.9485752,8z/data=!4m8!3m7!1s0x67845919ee33a677:0xb8920efbf13fde37!8m2!3d24.3540069!4d53.9485752!9m1!1b1!16s%2Fg%2F11wv28_bw7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", // Unique link for this user
    date: "2025-01-02T00:00:00Z", // Example date

  },
  {
    id: 2,
    name: {
      english: "Abeer Abbas",
      arabic: "Abeer Abbas",
    },
    username: {
      english: "Local Guide",
      arabic: "Local Guide",
    },
    quote: {
      english:
        "An upscale service that we rely on for special occasions, and the prices are very reasonable compared to other distinguished services.",
      arabic:
        "خدمة راقيه ونعتمدها بالمناسبات والاسعار جدا مناسبة مقارنه بالخدمات المميزة",
    },
    stars: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJD_X6dFCTgzDD1wj0HZZSLyF_bGEk3uz1pzfdht9XRGOTs1Q=w45-h45-p-rp-mo-ba2-br100",
    link: "https://www.google.com/maps/place/Rukn+Al+Dyafa+%7C+Hospitality+Service/@24.3540069,53.9485752,8z/data=!4m8!3m7!1s0x67845919ee33a677:0xb8920efbf13fde37!8m2!3d24.3540069!4d53.9485752!9m1!1b1!16s%2Fg%2F11wv28_bw7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", // Unique link for this user
    date: "2024-12-28T00:00:00Z", 
  },
  {
    id: 3,
    name: {
      english: "einas ahmead alhaj",
      arabic: "einas ahmead alhaj",
    },
    username: {
      english: "einas ahmead alhaj",
      arabic: "einas ahmead alhaj",
    },
    quote: {
      english:
        "The hospitality was great, the staff were amazing, their clothes were nice and fast, and the bites were amazing...",
      arabic:
        "وايد الضيافه كانت حلوة و الاستاف رهيبين ولبسهن حلو و سريعين و اللقيمات تجنن ...",
    },
    stars: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWwaxRmm5SZKpmNrCmp1b__PpKK8GIfz_GjqJuMoeaI0aJS4e-c=w45-h45-p-rp-mo-br100",
    link: "https://www.google.com/maps/place/Rukn+Al+Dyafa+%7C+Hospitality+Service/@24.3540069,53.9485752,8z/data=!4m8!3m7!1s0x67845919ee33a677:0xb8920efbf13fde37!8m2!3d24.3540069!4d53.9485752!9m1!1b1!16s%2Fg%2F11wv28_bw7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", // Unique link for this user
    date: "2024-12-28T00:00:00Z",
  },
  {
    id: 4,
    name: {
      english: "Sharifa Hayat",
      arabic: "Sharifa Hayat",
    },
    username: {
      english: "Sharifa Hayat",
      arabic: "Sharifa Hayat",
    },
    quote: {
      english:
        "Thank you, Umm Abdul Rahman. Very elegant and beautiful service. Classy, ​​clean girls. They deserve all the best. Thank you. Our faces became white for the occasion.",
      arabic:
        "شكرا أم عبد الرحمن خدمة جدا راقية وجميلة بنات راقيات نظافة يستاهلون كل خير شكرا بيضت وجوهنا في المناسبة",
    },
    stars: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocLPncQg9EgLspU62BTbm_HbCynh65Fx2nD2Q3G1CU3MbeJBjQ=w45-h45-p-rp-mo-br100",
    link: "https://www.google.com/maps/place/Rukn+Al+Dyafa+%7C+Hospitality+Service/@24.3540069,53.9485752,8z/data=!4m8!3m7!1s0x67845919ee33a677:0xb8920efbf13fde37!8m2!3d24.3540069!4d53.9485752!9m1!1b1!16s%2Fg%2F11wv28_bw7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", // Unique link for this user
    date: "2024-12-28T00:00:00Z",
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
            // Wrap the entire card with the <a> tag
            <a
              key={testimonial.id}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <motion.div
                className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 h-[280px] md:h-[315px] flex-shrink-0 snap-start flex flex-col justify-between"
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
                <div className="flex items-center mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < testimonial.stars
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="relative w-14 h-14">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name[language]}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <FcGoogle className="absolute bottom-0 right-0 text-2xl bg-white rounded-full p-0.5" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">
                      {testimonial.name[language]}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.username[language]}
                    </p>
                  </div>
                  {/* Relative time added here */}
                <span className="text-xs text-gray-400 ml-auto">
                  {getRelativeTime(testimonial.date)}
                </span>
                </div>
              </motion.div>
            </a>
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