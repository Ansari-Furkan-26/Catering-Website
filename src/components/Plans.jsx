import React from "react";
import { motion } from "framer-motion";
// import "./ProductShowcase.css"; // Add this for CSS styling

const Packages = [
  {
    name: "Package 1",
    title: "(10-30 Guests)",
    description: "Service providers: 2",
    price: "From 1600 AED",
    img: "https://i.pinimg.com/736x/1e/f7/38/1ef7380b6fe1eb82d1653966a51bd72b.jpg"
  },
  {
    name: "Package 2",
    title: "(30-60 Guests)",
    description: "Service providers: 3",
    price: "From 2100 AED",
    img: "https://i.pinimg.com/736x/83/cb/9d/83cb9d2dbc3c702991d8bdc6da100df2.jpg"
  },
  {
    name: "Package 3",
    title: "(60-80 Guests)",
    description: "Service providers: 3",
    price: "From 2600 AED",
    img: "https://i.pinimg.com/736x/c1/88/fd/c188fd02f4ddce1079485372781cd48f.jpg"
  },
  {
    name: "Package 4",
    title: "(80-100 Guests)",
    description: "Service providers: 5",
    price: "From 3100 AED",
    img: "https://i.pinimg.com/736x/af/80/b5/af80b5f4b118152ac72aebac35db1b4c.jpg"
  },
  {
    name: "Package 5",
    title: "(100-130 Guests)",
    description: "Service providers: 6",
    price: "From 3600 AED",
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Package 6",
    title: "(130-150 Guests)",
    description: "Service providers: 7",
    price: "From 4100 AED",
    img: "https://i.pinimg.com/736x/ec/0e/0b/ec0e0b2ee0b2a51699ebf6f5e4893d4d.jpg"
  },
];

const ProductShowcase = () => {
  return (
    <div className="h-full py-8 bg-gray-100" id="Product">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Our Exclusive Packages</h1>

      {/* Grid Cards */}
      <div className="relative overflow-hidden px-3">
       <div className="flex space-x-6 py-5  overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory">
          
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
