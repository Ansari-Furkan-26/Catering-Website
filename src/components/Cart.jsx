import React from "react";

const Cart = ({ addedItems, handleRemoveItem }) => (
  <div className="p-4 border border-gray-300 rounded-md bg-white shadow-sm mt-8">
    <h3 className="text-xl font-semibold mb-4">Cart</h3>
    {addedItems.length > 0 ? (
      <ul className="list-disc list-inside space-y-2">
        {addedItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{item}</span>
            <button
              onClick={() => handleRemoveItem(index)}
              className="px-2 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">Your cart is empty.</p>
    )}
  </div>
);

export default Cart;
