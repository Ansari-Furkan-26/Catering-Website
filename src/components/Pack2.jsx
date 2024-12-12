import React, { useState } from "react";
import { motion } from "framer-motion";

const Packages2 = [
  {
    name: "Package 1 (10-30 people)",
    number: 1,
    description: "Includes 2 taps/tap holders and a selection of hot and cold drinks.",
    price: 1600,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/lux.jpg"
  },
  {
    name: "Package 2 (30-60 people)",
    number:2,
    description: "Includes 3 taps/tap holders and a selection of hot and cold drinks.",
    price: 2100,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/dallah2.jpg"
  },
  {
    name: "Package 3 (60-80 people)",
    number: 3,
    description: "Includes 4 taps/tap holders and a selection of hot and cold drinks.",
    price: 2600,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/teaset2.jpg"
  },
  {
    name: "Package 4 (80-100 people)",
    number: 4,
    description: "Includes 5 taps/tap holders and a selection of hot and cold drinks.",
    price: 3100,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/teaset.jpg"
  },
  {
    name: "Package 5 (100-130 people)",
    number: 5,
    description: "Includes 6 taps/tap holders and a selection of hot and cold drinks.",
    price: 3600,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/tea2.jpg"
  },
  {
    name: "Package 6 (130-150 people)",
    number:6,
    description: "Includes 7 taps/tap holders and a selection of hot and cold drinks.",
    price: 4100,
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
        "Sabanish Latta",
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "../src/assets/Images/tea3.jpg"
  }
];


const PackShowcase2 = ({ onAddToCart }) => { // Receive onAddToCart prop

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (product) => {
    setSelectedPackage(product);
    if (onAddToCart) { // Check if prop is available
      onAddToCart(product.number, product.price); // Pass information to Cart
    }
  };

  return (
    <div className="h-screen px-4 py-8 sm:px-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl max-h-[600px]" id="Packages">
      <h1 className="text-2xl italic text-center mb-4 ">Select a Package</h1>
      <div className="relative overflow-hidden mb-12 h-[460px]">
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide h-full">
          {Packages2.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] h-full rounded-xl bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm h-full flex flex-col">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="text-sm mb-0">
                  <p className="text-sm mb-0">
                    <strong>Hot Drinks:</strong> {product.drinks.hot.join(', ')}
                  </p>
                  <p className="text-sm mb-0">
                    <strong>Cold Drinks:</strong> {product.drinks.cold.join(', ')}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-semibold text-slate-600">{product.price} AED</span>
                  <button
                    className="bg-blue-500 text-white rounded px-8 py-2 hover:bg-green-500"
                    onClick={() => handlePackageSelection(product)}
                  >
                    Select Pack
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

export default PackShowcase2;