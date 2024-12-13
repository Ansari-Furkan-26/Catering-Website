import React from "react";
import { motion } from "framer-motion";
// import "./ProductShowcase.css"; // Add this for CSS styling

const Packages = [
  {
    name: "Majlis Al-Dhahab",
    title: "Package 1 (10-30 Guests)",
    description: "Service providers: 2",
    price: "From 1600 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
  {
    name: "Sands of Luxury",
    title: "Package 2 (30-60 Guests)",
    description: "Service providers: 3",
    price: "From 2100 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
  {
    name: "Pearl Elegance",
    title: "Package 3 (60-80 Guests)",
    description: "Service providers: 3",
    price: "From 2600 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
  {
    name: "Desert Regal",
    title: "Package 4 (80-100 Guests)",
    description: "Service providers: 5",
    price: "From 3100 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
  {
    name: "Emirates Splendor",
    title: "Package 5 (100-130 Guests)",
    description: "Service providers: 6",
    price: "From 3600 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
  {
    name: "Royal Dunes",
    title: "Package 6 (130-150 Guests)",
    description: "Service providers: 7",
    price: "From 4100 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg",
  },
];

const ProductShowcase = () => {
  return (
    <div className="h-full py-8 bg-gray-100" id="Product">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Our Exclusive Packages</h1>

      {/* Grid Cards */}
      <div className="relative overflow-hidden pl-4">
       <div className="flex space-x-6 py-5  overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          
        {Packages.map((product, index) => (
          <a href="/luxury-services"> <motion.div
            key={index}
            className=" min-w-[300px] h-full rounded-xl bg-white shadow-lg overflow-hidden snap-start relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}>
            {/* Background Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
              {product.name}
            </div>
            {/* Content */}
            <div className=" inset-x-0 bottom-0 p-4 bg-white bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-500">
              <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-green-600 font-bold text-lg">{product.price}</p>
            </div>
          </motion.div></a>
        ))}
        </div>
      </div>
    </div>
    
  );
};

export default ProductShowcase;
