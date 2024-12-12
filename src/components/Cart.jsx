import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PackShowcase2 from "./Pack2.jsx";

const hotBeverages = [
  "Crack tea",
  "Thyme tea",
  "Pineapple cinnamon tea",
  "Pistachio milk",
  "Saffron milk",
  "Milk with thyme",
  "Ginger milk",
  "Turkish coffee",
  "Green tea",
  "Moroccan tea",
  "Red bean with custard",
  "Apple tea",
  "Hot chocolate",
  "Pistachio Latte",
  "Nescafe",
  "Latte Day",
  "Arabic coffee",
  "Red tea with saffron",
  "Lemongrass tea",
];

const coldBeverages = [
  "Lemon mint mojito",
  "Pinacolada",
  "Milkshake",
  "Date milkshake",
  "Mix berries juice",
  "Cocktail",
  "Hibiscus",
  "Mojito be fruit",
  "Pistachio latte",
  "Mango falooda",
  "Pinecolada",
  "Orange juice",
  "Cold tea with peaches",
  "Blueberry Mojito",
  "Falooda with strawberry",
  "Gamma-Al-On",
  "Saffron juice",
  "Lemon with mint",
  "Mad coconut",
];

const Cart = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);
  const [selectedHotDrink, setSelectedHotDrink] = useState("");
  const [selectedColdDrink, setSelectedColdDrink] = useState("");

  const handleAddToCart = (packageNumber, packagePrice) => {
    setSelectedPackage(packageNumber);
    setSelectedPackagePrice(packagePrice);
  };

  const handleHotDrinkChange = (event) => {
    setSelectedHotDrink(event.target.value);
  };

  const handleColdDrinkChange = (event) => {
    setSelectedColdDrink(event.target.value);
  };

  return (
    <div className="min-h-screen bg-white-100 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-8">
          Cart Summary
        </h1>

        {/* Packages Section */}
        <PackShowcase2 onAddToCart={handleAddToCart} />

        {/* Selected Package Information */}
        {selectedPackage && selectedPackagePrice && (
          <div className="border rounded-lg p-4 my-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Selected Package</h2>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Package Number:</span>
              <span>{selectedPackage}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Price:</span>
              <span>{selectedPackagePrice}</span>
            </div>
          </div>
        )}

        {/* Drink Selection */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="hotDrink" className="block text-sm font-medium mb-2">
              Hot Drink
            </label>
            <select
              id="hotDrink"
              value={selectedHotDrink}
              onChange={handleHotDrinkChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- Select --</option>
              {hotBeverages.map((drink) => (
                <option key={drink} value={drink}>
                  {drink}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="coldDrink" className="block text-sm font-medium mb-2">
              Cold Drink
            </label>
            <select
              id="coldDrink"
              value={selectedColdDrink}
              onChange={handleColdDrinkChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- Select --</option>
              {coldBeverages.map((drink) => (
                <option key={drink} value={drink}>
                  {drink}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Client Entries Section */}
        <div className="border rounded-lg p-4 my-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Client Entries</h2>
          <div className="space-y-2">
            {[
              { label: "Name", value: formData.name },
              { label: "Email", value: formData.email },
              { label: "City", value: formData.city },
              { label: "Phone", value: formData.phone },
              { label: "Number of Guests", value: formData.guests },
              { label: "Event Date", value: formData.eventDate },
            ].map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{item.label}:</span>
                <span>{item.value || "N/A"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Place Order Button */}
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;