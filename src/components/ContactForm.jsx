import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*Order Details* : 
    Full Name: ${formData.fullName} 
    Mobile No.: ${formData.mobileNo} 
    Email: ${formData.email} 
    Address: ${formData.address} 
    Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/7045992776?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id='Book'>
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">How would you like to get your order?</h2>

          <form onSubmit={handleSubmit}>
            {['fullName', 'mobileNo', 'email', 'address', 'message'].map((field) => (
              <div className="mb-4" key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'mobileNo' ? 'number' : 'text'}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                />
                
              </div>
              
            ))}
            
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">
              Submit
            </button>
          </form>
        </div>

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