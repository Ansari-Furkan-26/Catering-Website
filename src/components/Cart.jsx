import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";


const hotBeverages = [
  "Arabic coffee | قهوة عربية",
  "Turkish coffee | قهوة تركية",
  "Black Tea with Zaffran | شاي أسود بالزعفران",
  "Green Tea | شاي أخضر",
  "Lemon Grass Tea | شاي الليمون",
  "Moroccan Tea | شاي مغربي",
  "Pineapple Tea with Cinnamon | شاي الأناناس بالقرفة",
  "Apple Tea | شاي التفاح",
  "Habbat Al Hamra with Custard | حبّة الحمرا بالكاسترد",
  "Cappuccino | كابتشينو",
  "Hot Chocolate | شوكولاتة ساخنة",
  "Rose with Custard | ورد بالكاسترد",
  "Pistachio Latte | لاتيه بالفستق",
  "Sahlab | سحلب",
  "Milk with Ginger | حليب بالزنجبيل",
  "Milk with Zaffran | حليب بالزعفران",
  "Milk with Zaatar | حليب بالزعتر",
];

const coldBeverages = [
  "Faloodah | فولوده",
  "Hibiscus | كركديه",
  "Mojito blueberry | موهيتو بالتوت الأزرق",
  "Mojito passion fruit | موهيتو فاكهة العاطفة",
  "Lemon with Lavender | ليمون مع اللافندر",
  "Pistachio latte | لاتيه بالفستق",
  "Faloodah Strawberry | فولوده بالفراولة",
  "Faloodah Mango | فولوده بالمانجو",
  "Apricot drink | مشروب المشمش",
  "Pina Colada | بينا كولادا",
  "Lemon with Mint | ليمون بالنعناع",
  "Orange Juice | عصير البرتقال",
  "Zaffran Drink | مشروب الزعفران",
  "Iced Tea with Peach | شاي مثلج مع الخوخ",
  "Coconut Water | ماء جوز الهند",
];

const Cart = ({ selectedPackage, selectedPackagePrice  }) => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // State to show the popup
  const DRINK_PRICE = 200;

  const handleDrinkSelection = (drinkType, drinkName) => {
    if (!drinkName || selectedDrinks.some((drink) => drink.name === drinkName)) return;
  
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
    setShowThankYouPopup(true);
      const totalAmount = calculateTotal();
      const message = `
    Hello, I would like to place an order. Here are the details:
    
    *Selected Package:* 
    - Package Title: ${selectedPackage || "N/A"}
    - Package Price: ${selectedPackagePrice || 0} AED
    
    *Selected Drinks:*
    ${selectedDrinks.map((drink, index) => `- ${drink.type}: ${drink.name} (${drink.price} AED)`).join("\n")}
    
    *Client Information:*
    - Name: ${formData.name}
    - Email: ${formData.email}
    - City: ${formData.city}
    - Phone: ${formData.phone}
    - Guests: ${formData.guests}
    - Event Date: ${formData.eventDate}
    
    *Total Amount:* ${totalAmount} AED
      `.trim();
    
      // Encode the message for use in a URL
      const encodedMessage = encodeURIComponent(message);
    
      // WhatsApp API link
      const whatsappLink = `https://wa.me/7045992776?text=${encodedMessage}`;
    
      // Redirect to WhatsApp
      window.open(whatsappLink, "_blank");
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center" id="cart">
    
      <div className="hidden md:block h-full w-full p-8">
      <img 
        src="https://i.pinimg.com/736x/74/fa/f7/74faf76a2616f4f776cf157c18a09d77.jpg" 
        alt="Package Image" 
        className="object-cover max-h-full w-full rounded-xl"
      />
    </div>
      <div className="max-w-6xl w-full bg-gray-50 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center">Cart Summary</h1>

        {/* Drink Selection */}
      <div className="flex justify-between items-center m-6">
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

      
        {/* Selected Package Details */}
        {selectedPackage && selectedPackagePrice && (
          <div className="border rounded-lg p-4 my-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Selected Package</h2>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Package Title:</span>
              <span>{selectedPackage}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Package Price:</span>
              <span>{selectedPackagePrice} AED</span>
            </div>
            {selectedDrinks.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Drinks:</h3>
            {/* Selected Drinks Details */}
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
                    onClick={() => removeDrink(index)}>
                    <MdDelete />

                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
          </div>
        )}
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>Total:</span>
          <span>{calculateTotal()} AED</span>
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
        <p><strong>Special Offer: </strong><br /> Order Package 3 or higher and get a complimentary Beverage or Perfume with your order.</p>
      </div>

        {/* Place Order Button */}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleOrderSubmit}
        >
          Order Now
        </button>

        {/* Thank You Popup */}
        {showThankYouPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4">🎉 Thank You!</h2>
              <p>Your order has been successfully submitted. We will reach out to you shortly.</p>
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => setShowThankYouPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
