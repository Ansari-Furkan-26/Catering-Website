import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    img: "https://i.pinimg.com/736x/52/cc/d9/52ccd93632ceb77d10cf1f64ba3d98e0.jpg", // Placeholder image for Cappuccino
    name: "Cappuccino",
    description: "Rich and creamy espresso topped with velvety foam.",
    price: "$12",
  },
  {
    img: "https://i.pinimg.com/736x/43/e7/c4/43e7c4d13b99654c1a4345d4c90eef04.jpg", // Placeholder image for Sahlab
    name: "Sahlab",
    description: "A warming, creamy Middle Eastern drink made from orchid tuber.",
    price: "$14",
  },
  {
    img: "https://i.pinimg.com/736x/c0/82/52/c0825233b2fcd30d5bd9e1bd9495a701.jpg", // Placeholder image for Pistachio Milk
    name: "Pistachio Milk",
    description: "A smooth and rich blend of pistachios and milk.",
    price: "$16",
  },
  {
    img: "https://i.pinimg.com/736x/85/e5/7e/85e57ee9cb38dc1f390b0b0e95f62911.jpg", // Placeholder image for Saffron
    name: "Saffron Milk",
    description: "An aromatic milk infusion with a touch of premium saffron.",
    price: "$18",
  },
  {
    img: "https://i.pinimg.com/736x/15/53/02/155302eca6be555903b6a9ecf21ccc9b.jpg", // Placeholder image for Zaatar Milk
    name: "Zaatar Milk",
    description: "A unique blend of zaatar spices and creamy milk.",
    price: "$17",
  },
  {
    img: "https://i.pinimg.com/736x/5e/e0/97/5ee0970fb606e258e64a562ad3bdddaa.jpg",
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
    description: "Refreshing drinks crafted to impress & spread positivity.",
    price: "$18",
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
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="min-w-[300px] h-[400px] rounded-xl bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
            <img src={product.img} alt={product.name} className="w-full h-56 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4">
                <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all">
                  Know Price
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
