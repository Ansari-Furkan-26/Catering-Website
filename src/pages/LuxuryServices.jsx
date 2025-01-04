import React, { Suspense } from "react";
import OrderForm from "../components/OrderForm";
import PromoBanner from "../components/PromoBanner";
import { Helmet } from "react-helmet-async";

const LuxuryServices = ({ language = "english" }) => {
  const translations = {
    english: {
      heading: "Experience luxury with our premium drink selection",
      paragraph:
        "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering.",
    },
    arabic: {
      heading: "اختبر الفخامة مع اختيار مشروباتنا الفاخرة",
      paragraph:
        " في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال تقديم الطعام الفاخر.",
    },
  };

  return (
    <div>
      <Helmet>
        <title>Rukn Al Dyafa - Luxury Services & Experiences</title>
        <meta name="description" 
        content="Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences." />
        <meta name="keywords" content="mocktail and cocktail catering UAE, beverage menu options for events UAE, book beverage catering for events UAE, coffee bar catering for events UAE, tea and coffee catering Dubai, fresh juice catering service UAE, luxury catering UAE, signature drinks UAE, premium beverage services" />
        <link rel="canonical" href="https://www.ruknaldyafa.ae/luxury-services" />
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
        <meta name="author" content="Rukn Al Dyafa Team" />

         {/* Facebook Open Graph Tags */}
         <meta property="og:title" content="Rukn Al Dyafa - Service" />
        <meta
          property="og:description"
          content="Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences."
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg"
        />
        <meta property="og:url" content="https://www.ruknaldyafa.ae/luxury-services" />
        
        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:title" content="Rukn Al Dyafa - Service" />
        <meta
          name="twitter:description"
          content="Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences."
        />
        <meta
          name="twitter:image"
          content="https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg"
        />
        
      </Helmet>


      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          {/* Animated Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold leading-tight">
            {translations[language].heading}
          </h1>

          {/* Animated Paragraph */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl">
            {translations[language].paragraph}
          </p>
        </div>
      </div>

      {/* Suspense wrapper to load lazy components */}
      <Suspense fallback={<div>Loading...</div>}>
        <OrderForm language={language} />
        {/* <PromoBanner language={language} /> */}
      </Suspense>
    </div>
  );
};

export default LuxuryServices;