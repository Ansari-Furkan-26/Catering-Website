import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    address: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const testData = {
        fullName: "John Doe",
        mobileNo: "1234567890",
        email: "john@example.com",
        address: "123 Test Street",
        message: "This is a test.",
      };
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbzORb4l2ZidRDeosvzaEkHbjjGL_oU3GVfIPnM4VHkP1eWtXWb7bxYJ1SRGA0ug7moM/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });
  
      const result = await response.json();
      console.log(result);
  
      if (result.success) {
        setNotification("Test data submitted successfully!");
      } else {
        setNotification("Failed to submit test data.");
      }
    } catch (error) {
      console.error("Error submitting the test data:", error);
      setNotification("An error occurred during the test.");
    }
  
    setTimeout(() => setNotification(''), 3000);
  };
  
  
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id='Book'>
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Left: Order Information Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">How would you like to get your order?</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
                Mobile No.
              </label>
              <input
                type="number"
                id="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
              />
            </div>

            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">
              Submit
            </button>
          </form>
          
          {notification && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-lg">
              {notification}
            </div>
          )}
        </div>

        {/* Right: Product Image and Info */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 relative hidden md:block">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: 'url("https://i.pinimg.com/736x/63/3d/b2/633db2c13ac2582889e78da32c5e557e.jpg")' }}
          >
            <div className="bg-gradient-to-r from-transparent to-black opacity-50 w-full h-full rounded-lg absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
