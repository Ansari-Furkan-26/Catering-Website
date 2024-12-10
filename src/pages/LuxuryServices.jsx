import React, { useState } from 'react';

export default function LuxuryServices() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    guests: '',
    eventDate: '',
    Lists: {
      List1: { item1: false , item2: false },
      List2: { item3: false, item4: false },
      List3: { item5: false, item6: false },
      List4: { item7: false, item8: false },
      List5: { item9: false, item10: false },
      List6: { item11: false, item12: false },
    },
  });

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (listName, itemName) => {
    setFormData((prevState) => ({
      ...prevState,
      Lists: {
        ...prevState.Lists,
        [listName]: {
          ...prevState.Lists[listName],
          [itemName]: !prevState.Lists[listName][itemName],
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API or log to console)
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Luxury Services</h1>
      <p className="mb-4">Please fill out the form below to request our luxury services.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* City Dropdown */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Date of Event */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
            Date of Event
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Checkbox Lists */}
        {Object.keys(formData.Lists).map((listName, listIndex) => (
          <div key={listIndex}>
            <p className="font-medium text-gray-700">{listName}</p>
            {Object.keys(formData.Lists[listName]).map((itemName, itemIndex) => (
              <div key={itemIndex} className="flex items-center">
                <input
                  type="checkbox"
                  id={itemName}
                  name={itemName}
                  checked={formData.Lists[listName][itemName]}
                  onChange={() => handleCheckboxChange(listName, itemName)}
                  className="mr-2"
                />
                <label htmlFor={itemName} className="text-sm">
                  {itemName.replace('item', 'Item ')}
                </label>
              </div>
            ))}
          </div>
        ))}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
