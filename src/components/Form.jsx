import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id='Book'>
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Left: Order Information Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">How would you like to get your order?</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input type="text" id="first-name" className="w-full mt-1 p-2 border border-gray-300 rounded-lg"/>
            </div>
             
            <div className="mb-4">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Mobile No.
              </label>
              <input type="Number" id="Mobile-no" className="w-full mt-1 p-2 border border-gray-300 rounded-lg"/>
            </div>  
             <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded-lg"/>
            </div>    <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input type="text" id="address" className="w-full mt-1 p-2 border border-gray-300 rounded-lg"/>
            </div>    
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea id="message" rows="4" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" placeholder="Enter your message"/>
            </div>

            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Product Image and Info */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 relative hidden md:block">
          {/* Product Image with Stripes Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg" 
          style={{ backgroundImage: 'url("https://i.pinimg.com/736x/63/3d/b2/633db2c13ac2582889e78da32c5e557e.jpg")' }}>
            <div className="bg-gradient-to-r from-transparent to-black opacity-50 w-full h-full  rounded-lg absolute top-0 left-0"></div>
          </div>
          {/* <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white">The Evelyn Shirt</h3>
            <p className="text-white text-sm mb-4">$148 - 100% organic cotton</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white text-sm">(46 reviews)</span>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Submit</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
