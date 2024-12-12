
import React, { useState } from "react";
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
    img: "/src/assets/Images/lux.jpg"
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
    img: "/src/assets/Images/dallah2.jpg"
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
    img: "/src/assets/Images/teaset2.jpg"
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
    img: "/src/assets/Images/teaset.jpg"
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
    img: "/src/assets/Images/tea2.jpg"
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
    img: "/src/assets/Images/tea3.jpg"
  }
];

const LuxuryServices = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [extraBeverages, setExtraBeverages] = useState([]);
  const [orderComplete, setOrderComplete] = useState(false);

  // Handle selecting a package
  const handlePackageSelect = (packageIndex) => {
    setSelectedPackage(Packages[packageIndex]);
    setOrderComplete(false);
  };

  // Handle adding extra beverages
  const handleAddBeverage = (beverage) => {
    setExtraBeverages((prev) => [...prev, beverage]);
  };

  // Handle finalizing the order
  const handleCompleteOrder = () => {
    setOrderComplete(true);
  };

  return (
    <div>
      {/* Package Selection */}
     

      {/* Extra Beverages */}
      {selectedPackage && !orderComplete && (
        <div className="my-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Add Extra Beverages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...selectedPackage.drinks.hot, ...selectedPackage.drinks.cold].map((beverage, index) => (
              <motion.button
                key={index}
                className="bg-green-500 text-white py-2 px-4 rounded-full"
                onClick={() => handleAddBeverage(beverage)}
                whileHover={{ scale: 1.05 }}
              >
                {beverage}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Special Offer */}
      {selectedPackage && selectedPackage.name.includes("Package 3") && (
        <div className="text-center my-8 bg-yellow-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Special Offer!</h3>
          <p>Order Package 3 or higher and get a complimentary dish or perfume with your order.</p>
        </div>
      )}

      {/* Order Summary */}
      {orderComplete && (
        <div className="text-center my-8">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <p><strong>Selected Package:</strong> {selectedPackage.name}</p>
          <p><strong>Extra Beverages:</strong> {extraBeverages.join(", ")}</p>
          <p className="text-lg font-semibold mt-4">Thank you for your order!</p>
        </div>
      )}

      {/* Complete Order Button */}
      {selectedPackage && !orderComplete && (
        <div className="text-center my-8">
          <motion.button
            className="bg-blue-500 text-white py-2 px-6 rounded-full"
            onClick={handleCompleteOrder}
            whileHover={{ scale: 1.05 }}
          >
            Complete Order
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default LuxuryServices;
