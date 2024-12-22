import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/About.jpg";
import IMG6 from "../assets/Images/6.JPG";
import IMG4 from "../assets/Images/4.JPG";
import IMG33 from "../assets/Images/33.JPG";

const cards = [
  {
    img: IMG6,
    title: {
      english: "Beverage Service Experience", 
      arabic: "تجربة خدمة المشروبات"
    },
    message: {
      english: "Rukn Al Dyafa serves the finest traditional and international beverages with exceptional service, enhancing the visitor experience at every moment.",
      arabic: "يقدم ركن الضيافة أرقى المشروبات التقليدية والعالمية مع خدمة استثنائية، مما يعزز تجربة الزائر في كل لحظة."
    },
  },
  {
    img: IMG4,
    title: {
      english: "Luxury Wedding Events", 
      arabic: "فعاليات الزفاف الفاخرة"
    },
    message: {
      english: "Unique designs and exceptional service create unforgettable weddings, offering elegance and a touch of perfection for the special occasion.",
      arabic: "التصميمات الفريدة والخدمة الاستثنائية تخلق حفلات زفاف لا تُنسى، وتوفر الأناقة ولمسة من الكمال للمناسبات الخاصة."
    },
  },
  {
    img: IMG33,
    title: {
      english: "Business Conferences", 
      arabic: "مؤتمرات الأعمال"
    },
    message: {
      english: "Rukn Al Dyafa provides professional hospitality services tailored to meetings and conferences, ensuring guest comfort and event success.",
      arabic: "يقدم ركن الضيافة خدمات ضيافة احترافية مصممة خصيصًا للاجتماعات والمؤتمرات، مما يضمن راحة الضيوف ونجاح الفعاليات."
    },
  }
];

const translations = {
  english: {
    header: "Delivering Timeless Elegance and Mixology Excellence to Your Events.",
    paragraph: 
      "Crafting experiences that harmonize classic elegance with natural serenity, bringing refinement and balance to every occasion.",
    button: "Book Your Event",
    coffeeServiceTitle: "Luxury Coffee Service Across All Emirates",
    coffeeServiceDescription: 
      "We specialize in providing luxury coffee services across all Emirates, ensuring an exceptional experience for your guests. Our expert baristas craft premium beverages with precision and flair, adding a touch of sophistication to any event. Whether it’s a corporate gathering, wedding, or private celebration, our coffee service is tailored to meet your unique needs. From elegant presentation to seamless execution, we focus on every detail to leave a lasting impression. Let us elevate your event with unparalleled quality and professionalism."
  },
  arabic: {
    header: "تقديم الأناقة الدائمة وإتقان الميكولوجيا لفعالياتك.",
    paragraph: 
      "صياغة تجارب تجمع بين الأناقة الكلاسيكية والصفاء الطبيعي، مما يضفي الرقي والتوازن في كل مناسبة.",
    button: "احجز حدثك",
    coffeeServiceTitle: "خدمة القهوة الفاخرة في جميع الإمارات",
    coffeeServiceDescription:
    "سواء كان تجمعًا للشركات أو حفل زفاف أو احتفالًا خاصًا، فإن خدمة القهوة لدينا مصممة لتلبية احتياجاتك الفريدة. يقوم خبراء تحضير القهوة لدينا بإعداد المشروبات الفاخرة بدقة، مما يضيف لمسة من الرقي إلى أي مناسبة. متخصصون في تقديم خدمات الضيافة الفاخرة في جميع الإمارات، يتضمن تجربة استثنائية لضيوفك."
   }
};

function About({ language }) {
  const t = translations[language] || translations.english;

  return (
    <div className="h-full px-4 py-8 sm:px-8 bg-gray-100">
      {/* About Section */}
      <div className="p-6 flex flex-col lg:flex-row justify-between gap-8">
        <motion.h1
          className="text-3xl font-bold mb-4 max-w-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          {t.header}
        </motion.h1>
        <motion.div
          className="block max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <p className="text-gray-600 mb-6">{t.paragraph}</p>
          <a href="luxury-services">
            <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full mb-6 transition-all">
              {t.button}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-4 relative h-96 text-white group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}>
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title[language]}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl transition-opacity duration-500 group-hover:opacity-80"></div>
              {/* Text Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 rounded-2xl">
                <h2 className="text-xl font-semibold mb-2">{card.title[language]}</h2>
                <p className="text-gray-100 line-clamp-2">{card.message[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Catering Service Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 mt-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <img src={AboutImg} alt="Catering Service" className="w-full h-96 object-cover rounded-xl shadow-lg" />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t.coffeeServiceTitle}</h2>
          <p className="text-gray-700">{t.coffeeServiceDescription}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;