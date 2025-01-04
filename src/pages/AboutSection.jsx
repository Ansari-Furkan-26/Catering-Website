import React, { useEffect } from "react";
import About from '../components/About';
import Gallery from '../components/AboutGallery';
import { Helmet } from "react-helmet-async";

// useEffect(() => {
//   document.title = 'My Webrecto'; // Quick solution
// }, []);

const AboutSection = ({ language = "english" }) => {
  const translations = {
    english: {
      header: "Capture the Moment",
      paragraph: "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail."
    },
    arabic: {
      header: "التقط اللحظة",
      paragraph: "نحن نحتفظ بأغلى لحظاتك، في كل مناسبة على حدة. دعنا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل."
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      <Helmet>
        <title>Rukn Al Dyafa - Experience in Luxury, Weddings & Corporate Events</title> 
        <meta name="description" 
        content="Learn more about our commitment to delivering premium catering and beverage services. We bring elegance and taste to your events in the UAE." />
        <meta name="keywords" content="top-rated beverage catering UAE, best drink catering services in Dubai, luxury catering UAE, premium catering services UAE, beverage services UAE, wedding catering UAE, corporate event catering UAE, catering services in Dubai, bespoke catering services, elegant catering solutions, birthday party catering services UAE, tailored catering UAE" />
        <meta name="author" content="Rukn Al Dyafa Team" />
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
        <link rel="canonical" href="https://www.ruknaldyafa.ae/about-section" />

  {/* Open Graph Tags for Social Media Sharing */}
       <meta property="og:title" content="Rukn Al Dyafa - About Us" />
       <meta property="og:description" content="Explore how our premium catering and beverage services bring elegance and unforgettable moments to your special occasions in the UAE." />
       <meta property="og:image" content="https://example.com/your-image.jpg" /> {/* Replace with your image URL */}
       <meta property="og:url" content="https://www.ruknaldyafa.ae/about-section" />
       <meta property="og:type" content="website" />

  {/* Twitter Card Tags */}
       <meta name="twitter:title" content="Rukn Al Dyafa - About Us" />
       <meta name="twitter:description" content="Discover our luxurious catering and beverage services in the UAE. Let us create unforgettable events tailored to your needs." />
       <meta name="twitter:image" content="https://example.com/your-image.jpg" /> {/* Replace with your image URL */}
       <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="http://localhost:5173/" />

      </Helmet>
          
      {/* Background image and text about capturing moments */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/ed/5a/77/ed5a77dc9815460f8af4eb394803d727.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">
            {translations[language].header}
          </h2>
          <p className="text-lg">
            {translations[language].paragraph}
          </p>
        </div>
      </section> 
      
      <About language={language} />
      <Gallery language={language} />
    </div>
  );
};

export default AboutSection;