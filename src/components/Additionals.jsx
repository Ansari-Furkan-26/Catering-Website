import React, { useState } from "react";
import Cart from "./Cart"; 

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

const Additionals = () => {
  const [selectedHotBeverage, setSelectedHotBeverage] = useState("");
  const [selectedColdBeverage, setSelectedColdBeverage] = useState("");
  const [addedItems, setAddedItems] = useState([]);

  const handleAddHotBeverage = () => {
    if (selectedHotBeverage) {
      setAddedItems((prev) => [...prev, selectedHotBeverage]);
      setSelectedHotBeverage("");
    }
  };

  const handleAddColdBeverage = () => {
    if (selectedColdBeverage) {
      setAddedItems((prev) => [...prev, selectedColdBeverage]);
      setSelectedColdBeverage("");
    }
  };

  const handleRemoveItem = (index) => {
    setAddedItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-2xl font-bold mb-4">Select Additional Beverages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hot Beverages Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Hot Beverages</h3>
          <div className="flex items-center space-x-2 mb-4">
            <select
              value={selectedHotBeverage}
              onChange={(e) => setSelectedHotBeverage(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto"
            >
              <option value="">Select a Hot Beverage</option>
              {hotBeverages.map((beverage, index) => (
                <option key={index} value={beverage}>
                  {beverage}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddHotBeverage}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        {/* Cold Beverages Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Cold Beverages</h3>
          <div className="flex items-center space-x-2 mb-4">
            <select
              value={selectedColdBeverage}
              onChange={(e) => setSelectedColdBeverage(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto"
            >
              <option value="">Select a Cold Beverage</option>
              {coldBeverages.map((beverage, index) => (
                <option key={index} value={beverage}>
                  {beverage}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddColdBeverage}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart addedItems={addedItems} handleRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default Additionals;
