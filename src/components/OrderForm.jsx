import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    guests: 1,
    eventDate: '',
  });

  const cities = ['New York', 'Los Angeles', 'San Francisco']; // Example cities

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderInput = (label, name, type = 'text', additionalProps = {}) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        {...additionalProps}
      />
    </div>
  );

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((field) => field !== '');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id="Book">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Left: Order Information Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">How would you like to get your order?</h2>
          <form onSubmit={handleSubmit}>
            {renderInput('Name', 'name')}
            {renderInput('Email', 'email', 'email')}
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg bg-transparent text-gray-700"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {renderInput('Phone Number', 'phone', 'tel')}
            {renderInput('Number of Guests', 'guests', 'number', { min: 1 })}
            {renderInput('Date of Event', 'eventDate', 'date')}

            {/* Submit Button */}
            <div className="flex justify-center mb-4">
              <button 
                type="submit" 
                className={`bg-blue-500 text-white p-2 rounded-md w-full hover:bg-green-600 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={!isFormValid}
              >
                Go to Cart
              </button>
            </div>
          </form>
        </div>

        {/* Right: Product Image and Info */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 relative hidden md:block">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg" 
            style={{ backgroundImage: 'url("/src/assets/Images/tea.jpg")' }}>
            <div className="bg-gradient-to-r from-transparent to-black opacity-50 w-full h-full rounded-lg absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
