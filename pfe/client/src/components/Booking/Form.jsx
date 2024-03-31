import React, { useState } from "react";
import "../Booking/form.css";

function Form({ i, updateFormData, formData }) {
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);

  const hundleChangeInput = (e) => {
    const { name, value } = e.target;
    updateFormData(i, { ...formData[i], [name]: value });
    setShowTooltip1(false);
    setShowTooltip2(false);
  };
  
  
  const handleMouseLeaveName = () => {
    if ( formData[i][`firstName-${i}`] === '') {
      setShowTooltip1(true);
    }
    
  };
  const handleMouseLeaveLastName = () => {
    if ( formData[i][`lastname-${i}`] === '') {
      setShowTooltip2(true);
    }
    
  };

  return (
    <>
      <form className="guest-form">
        <h3>Guest{i + 1}</h3>
        <label htmlFor={`firstName-${i}`}>First Name:</label>
        <input
          type="text"
          id={`firstName-${i}`}
          name={`firstName-${i}`}
          value={formData.firstName}
          onChange={hundleChangeInput}
          onMouseLeave={handleMouseLeaveName}
          required
        />
        {showTooltip1 && <div style={{ color: 'red' }}>Please enter a value!</div>}

        <label htmlFor={`lastname-${i}`}>Last Name:</label>
        <input
          type="text"
          id={`lastname-${i}`}
          name={`lastname-${i}`}
          value={formData.lastName}
          onChange={hundleChangeInput}
          onMouseLeave={handleMouseLeaveLastName}
          required
          />
          {showTooltip2 && <div style={{ color: 'red' }}>Please enter a value!</div>}
        <label htmlFor={`level-${i}`}>Level</label>
        <select
          id={`level-${i}`}
          name={`level-${i}`}
          value={formData.level}
          onChange={hundleChangeInput} 
          required
        >
          <option value="">Select Level</option>
          <option value="AB">Adult - Beginner</option>
          <option value="AEB">Adult - Experience Beginner</option>
          <option value="AI">Adults - Intermediate</option>
          <option value="AEI">Adults - Experience Intermediate</option>
          <option value="KB">Kids - Beginner</option>
          <option value="KI">Kids - Intermediate</option>
        </select>
      </form>
    </>
  );
}

export default Form;
