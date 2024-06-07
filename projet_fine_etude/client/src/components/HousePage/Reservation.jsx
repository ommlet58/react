import React, { useState } from "react";
import "../HousePage/reser.css";





function Reservation({setShowLoginForm,setFormSubmitted}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
  });
  


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log("Reservation submitted:", formData);
    setFormSubmitted(true);
    setShowLoginForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

 

  return (
    <div className="resservation-form">
      <h2>Please Fill The Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default Reservation;
