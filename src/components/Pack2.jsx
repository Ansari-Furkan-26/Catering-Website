import React, { useState } from "react";
import { motion } from "framer-motion";

const Packages2 = [
  {
    name: "Majlis Al-Dhahab",
    title: "Package 1 (10-30 Guests)",
    description: "Service providers: 2",
    price: "1600 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Royal Celebration",
    title: "Package 2 (30-60 Guests)",
    description: "Service providers: 3",
    price: "2100 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Premium Service",
    title: "Package 3 (60-80 Guests)",
    description: "Service providers: 3",
    price: "2600 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Exclusive Delight",
    title: "Package 4 (80-100 Guests)",
    description: "Service providers: 5",
    price: "3100 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Grand Gala",
    title: "Package 5 (100-130 Guests)",
    description: "Service providers: 6",
    price: "3600 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: "Elite Gathering",
    title: "Package 6 (130-150 Guests)",
    description: "Service providers: 7",
    price: "4100 AED",
    drinks: {
      hot: [
        "Arabic coffee or Turkish coffee", 
        "Karak Tea", 
        "Habbat Al Hamra", 
        "Pistachio with Milk", 
        "Black Tea"
      ],
      cold: [
        "Spanish latte", 
        "Mojito lemon mint", 
        "Mojito blueberry", 
        "Hibiscus", 
        "Falooda"
      ],
      additional: "Any additional drink is AED 200"
    },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  }
];


const PackShowcase2 = ({ onAddToCart }) => { // Receive onAddToCart prop

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (product) => {
    setSelectedPackage(product);
    if (onAddToCart) { // Check if prop is available
      onAddToCart(product.title, product.price); // Pass information to Cart
    }
  };

  return (
    <div className="h-full px-4 py-2 sm:px-8 rounded-xl" id="Packages">
      <h1 className="my-5 text-2xl font-bold text-center ">Select a Package</h1>
      <div className="relative overflow-hidden my-5 h-full">
        <div className="flex space-x-6 overflow-x-scroll h-full py-3">
          {Packages2.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] h-full rounded-xl bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm h-full flex flex-col">
                <img src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.title}</p>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="text-sm my-2">
                  <p className="text-sm">
                    <strong>Hot Drinks:</strong>
                    <ul>
                      {product.drinks.hot.map((drink, index) => (
                        <li key={index}>{drink}</li>
                      ))}
                    </ul>
                  </p>
                  <p className="text-sm">
                    <strong>Cold Drinks:</strong>
                    <ul>
                      {product.drinks.cold.map((drink, index) => (
                        <li key={index}>{drink}</li>
                      ))}
                    </ul>
                  </p>
                  <p className="text-sm">
                    <strong>Additional:</strong> <br />{product.drinks.additional}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-semibold text-slate-600">{product.price}</span>
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
