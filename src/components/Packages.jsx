import React from "react";
import { motion } from "framer-motion";

const Packages = [
  {
    name: "Package 1 (10-30 people)",
    description: "Includes 2 taps/tap holders and a selection of hot and cold drinks.",
    price: "1600 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/lux.jpg"
  },
  {
    name: "Package 2 (30-60 people)",
    description: "Includes 3 taps/tap holders and a selection of hot and cold drinks.",
    price: "2100 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito",
        "Sabanish Latta"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/dallah2.jpg"
  },
  {
    name: "Package 3 (60-80 people)",
    description: "Includes 4 taps/tap holders and a selection of hot and cold drinks.",
    price: "2600 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito",
        "Sabanish Latta"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/teaset2.jpg"
  },
  {
    name: "Package 4 (80-100 people)",
    description: "Includes 5 taps/tap holders and a selection of hot and cold drinks.",
    price: "3100 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito",
        "Sabanish Latta"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/teaset.jpg"
  },
  {
    name: "Package 5 (100-130 people)",
    description: "Includes 6 taps/tap holders and a selection of hot and cold drinks.",
    price: "3600 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito",
        "Sabanish Latta"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/tea2.jpg"
  },
  {
    name: "Package 6 (130-150 people)",
    description: "Includes 7 taps/tap holders and a selection of hot and cold drinks.",
    price: "4100 dirhams",
    drinks: {
      hot: [
        "Red tea", 
        "Pistachio milk", 
        "Red bean with custard", 
        "Crack tea", 
        "Arabic coffee or Turkish coffee"
      ],
      cold: [
        "Hibiscus", 
        "Blueberry Mojito", 
        "Lemon mint mojito",
        "Sabanish Latta"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/tea3.jpg"
  }
];

const ProductShowcase = () => {
  return (
    <div className="h-full pl-2 py-8 bg-gray-100" id="Product">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Exclusive Offerings</h1>

      {/* Slidable Cards */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex space-x-6 py-5 overflow-x-scroll scrollbar-hide">
          {Packages.map((product, index) => (
            <motion.div
            key={index}
            className="min-w-[300px] h-[600px] rounded-xl bg-white shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
              <img src={product.img} alt={product.name} className="w-full h-56 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-sm mb-4">
                  <p><strong>Hot Drinks:</strong> {product.drinks.hot.join(", ")}</p>
                  <p><strong>Cold Drinks:</strong> {product.drinks.cold.join(", ")}</p>
                  <p><strong>Additional:</strong> {product.drinks.additional}</p>
                </div>
                <p className="font-bold text-lg mb-4">{product.price}</p>
                <div className="mt-4">
                <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all">
                  Add to cart
                </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
