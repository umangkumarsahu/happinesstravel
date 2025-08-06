import React, { useState } from 'react';

const Planner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    tripDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log('Form submitted:', formData);
  };

  return (
    <section id="planner" className="section">
      <h2>Plan Your Trip</h2>
      <form id="planner-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Preferred Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="tripDescription"
          placeholder="Describe your ideal trip..."
          value={formData.tripDescription}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Plan</button>
      </form>
    </section>
  );
};

export default Planner;