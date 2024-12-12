import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    img: "https://i.pinimg.com/736x/46/ac/41/46ac413a32b1158b8f271f4c7bc80bbd.jpg",
    name: "Gourmet Coffee",
    description: "Barista-crafted luxury coffee for every occasion.",
    price: "$15",
  },
  {
    img: "https://i.pinimg.com/736x/45/34/cb/4534cb25f9382bdcca5c0c22a2af1d3e.jpg",
    name: "Luxury Desserts",
    description: "Delightful desserts to elevate your event.",
    price: "$20",
  },
  {
    img: "https://i.pinimg.com/736x/4a/20/51/4a2051b152f4e50390c12c3b08615e8b.jpg",
    name: "Signature Beverages",
    description: "Refreshing drinks crafted to impress.",
    price: "$18",
  },
  {
    img: "https://i.pinimg.com/736x/77/1b/44/771b440bdb212baecdb6158b5408f85d.jpg",
    name: "Event Platters",
    description: "Elegant platters for sophisticated gatherings.",
    price: "$50",
  },
  {
    img: "https://i.pinimg.com/736x/1b/7a/8a/1b7a8aaba01a7d8fa21cf3bdfaef2ff7.jpg",
    name: "Custom Cakes",
    description: "Cakes designed to match your unique style.",
    price: "$30",
  },
];

const ProductShowcase = () => {
  return (
    <div className="h-full px-4 py-8 sm:px-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Exclusive Offerings
      </h1>

      {/* Slidable Cards */}
      <div className="relative overflow-hidden mb-12">
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] h-[400px] rounded-xl bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="color">
                    Color
                  </label>
                  <select
                    id="color"
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option>Green</option>
                    <option>Silver</option>
                    <option>Space Gray</option>
                    <option>Sky Blue</option>
                    <option>Pink</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="package">
                    Package
                  </label>
                  <select
                    id="package"
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option>Just the device</option>
                    <option>With AppleCare+</option>
                  </select>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
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