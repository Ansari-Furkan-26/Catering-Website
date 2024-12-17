import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    guests: 1,
    eventDate: '',
    deliveryCharge: 0, // Add deliveryCharge to formData
  });

  // City to delivery charge mapping
  const cityCharges = {
    'Abu Dhabi': 300,
    'Ajman': 0,
    'Al Ain': 400,
    'Dubai': 0,
    'Fujairah': 300,
    'Ras Al Khaimah': 300,
    'Sharjah': 0,
    'Umm Al Quwain': 0,
  };

  const cities = Object.keys(cityCharges);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data and calculate delivery charge if city changes
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      deliveryCharge: name === 'city' ? cityCharges[value] || 0 : prevData.deliveryCharge,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/checkout', { state: { formData } }); // Pass formData to Checkout page
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
  const isFormValid = Object.values(formData).every((field) => field !== '' || field === 0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id="orderform">
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

            {/* Show delivery charge */}
            {/* {formData.city && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Delivery Charge</label>
                <div className="mt-1 p-2 w-full border rounded-lg bg-gray-100 text-gray-700">
                  {`AED ${formData.deliveryCharge}`}
                </div>
              </div>
            )} */}

            {renderInput('Phone Number', 'phone', 'tel')}
            {renderInput('Number of Guests', 'guests', 'number', { min: 1 })}
            {renderInput('Date of Event', 'eventDate', 'date')}

             {/* Submit Button */}
             <div className="flex justify-center mb-4">
              {/* <button 
                type="submit" 
                className={`bg-blue-500 text-white p-2 rounded-md w-full hover:bg-green-600 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} 
                 disabled={!isFormValid} // Disabled button until all fields are filled
              >
                View Our Package Details
              </button> */}
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-green-600"
                disabled={false} // Enable the button
              >
                View Our Package Details
              </button>
            </div>
          </form>
        </div>

        {/* Right: Product Image and Info */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 relative hidden md:block">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3f/1f/a7/3f1fa78019ce12434c8b59668fc2acd4.jpg")' }}
          >
            <div className="bg-gradient-to-r from-transparent to-black opacity-50 w-full h-full rounded-lg absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
