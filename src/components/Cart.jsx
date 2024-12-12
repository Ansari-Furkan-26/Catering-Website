import React, { useState } from "react";
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
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // State to show the popup
  const DRINK_PRICE = 200;

  const handleAddToCart = (packageNumber, packagePrice) => {
    setSelectedPackage(packageNumber);
    setSelectedPackagePrice(packagePrice);
  };

  const handleDrinkSelection = (drinkType, drinkName) => {
    if (!drinkName) return;

    setSelectedDrinks((prevDrinks) => [
      ...prevDrinks,
      { type: drinkType, name: drinkName, price: DRINK_PRICE },
    ]);
  };

  const removeDrink = (indexToRemove) => {
    setSelectedDrinks((prevDrinks) =>
      prevDrinks.filter((_, index) => index !== indexToRemove)
    );
  };

  const calculateTotal = () => {
    const drinksTotal = selectedDrinks.reduce((sum, drink) => sum + drink.price, 0);
    return (selectedPackagePrice || 0) + drinksTotal;
  };

  const handleOrderSubmit = () => {
    setShowThankYouPopup(true); // Show the thank you popup when the user clicks "Notify Us"
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full my-6 bg-gray-50 shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center ">Select a Package</h1>

        {/* Packages Section */}
        <PackShowcase2 onAddToCart={handleAddToCart} />

        {/* Drink Selection */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/2 mr-4">
            <label htmlFor="hotDrink" className="block text-sm font-medium mb-2">
              Hot Drink
            </label>
            <select
              id="hotDrink"
              onChange={(e) => handleDrinkSelection("Hot Drink", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
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
              onChange={(e) => handleDrinkSelection("Cold Drink", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
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

        {/* Cart Details Section */}
        <div className="border rounded-lg p-4 my-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Selected Items</h2>

          {selectedPackage && selectedPackagePrice && (
            <div className="mb-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Package Number:</span>
                <span>{selectedPackage}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Package Price:</span>
                <span>{selectedPackagePrice} AED</span>
              </div>
            </div>
          )}

          {selectedDrinks.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Drinks:</h3>
              {selectedDrinks.map((drink, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span>
                      {drink.type}: {drink.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span>{drink.price} AED</span>
                    <button
                      className="ml-4 text-red-500 font-bold hover:text-red-700"
                      onClick={() => removeDrink(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>{calculateTotal()} AED</span>
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

        <div className="text-left my-5 rounded-lg">
          <p><strong>Special Offer: </strong>Order Package 3 or higher and get a complimentary Beverage or Perfume with your order.</p>
        </div>

        {/* Place Order Button */}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleOrderSubmit}>
          Order Now
        </button>
      </div>

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p>Your order has been submitted successfully. We have sent a confirmation email.</p>
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              onClick={() => setShowThankYouPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
