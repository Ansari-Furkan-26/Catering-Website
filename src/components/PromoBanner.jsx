// import React from "react";

// const PromoBanner = () => {
//   return (
//     <div className=" bg-gray-100 flex py-5 px-4 md:px-20 items-center justify-center" >
//     <div className="relative bg-cover bg-center rounded-3xl w-full h-64 flex items-center justify-center text-gray-200 shadow-lg" 
//          style={{
//            backgroundImage: "url('https://i.pinimg.com/originals/07/1b/89/071b897273fc4a0cabc7ca7610992138.gif')", // Replace with your image URL
//          }}>
//       <div className="text-center">
//         <h2 className="text-lg md:text-3xl font-bold mb-4">
//           Get 10% Off and Exclusive Offers!
//         </h2>
//         <p className="mb-6">Contact us now to claim your special discount.</p>
//         <a href="https://wa.me/7045992776?text=I%20would%20like%20to%20inquire%20about%20the%20%22Get%2010%25%20Off%20and%20Exclusive%20Offers!%22%20promotion.%20Could%20you%20please%20provide%20more%20details%20on%20how%20I%20can%20take%20advantage%20of%20this%20offer?"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-2 bg-[#2AB540] text-white font-semibold rounded-lg hover:bg-[#177711] transition">
//           WhatsApp Us
//         </a>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PromoBanner;












//////////////////////////// ARABIC TRANSLATED //////////////////////////////////////////////////////////////////////////////////
import React from "react";

// Translations object
const translations = {
  english: {
    header: "Get 10% Off and Exclusive Offers!",
    paragraph: "Contact us now to claim your special discount.",
    buttonText: "WhatsApp Us",
    whatsappMessage: "I would like to inquire about the 'Get 10% Off and Exclusive Offers!' promotion. Could you please provide more details on how I can take advantage of this offer?"
  },
  arabic: {
    header: "احصل على خصم 10٪ وعروض حصرية!",
    paragraph: "تواصل معنا الآن للحصول على خصمك الخاص.",
    buttonText: "WhatsApp Us",
    whatsappMessage: "أود الاستفسار عن عرض 'احصل على خصم 10٪ وعروض حصرية!'. هل يمكنك تقديم مزيد من التفاصيل حول كيفية الاستفادة من هذا العرض؟"
  },
};

const PromoBanner = ({ language = "english" }) => {
  const t = translations[language] || translations.english;

  return (
    <div className="bg-gray-100 flex py-5 px-4 md:px-20 items-center justify-center">
      <div
        className="relative bg-cover bg-center rounded-3xl w-full h-64 flex items-center justify-center text-gray-200 shadow-lg"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/07/1b/89/071b897273fc4a0cabc7ca7610992138.gif')", // Replace with your image URL
        }}
      >
        <div className="text-center">
          <h2 className="text-lg md:text-3xl font-bold mb-4">{t.header}</h2>
          <p className="mb-6">{t.paragraph}</p>
          <a
            href={`https://wa.me/7045992776?text=${encodeURIComponent(
              t.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2AB540] text-white font-semibold rounded-lg hover:bg-[#177711] transition"
          >
            {t.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
