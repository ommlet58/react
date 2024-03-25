import React from "react";
import "../Booking/form.css";

function Form({ i, updateFormData, formData }) {
  const hundleChangeInput = (e) => {
    const { name, value } = e.target;
    updateFormData(i, { ...formData[i], [name]: value });
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
          required
        />
        <label htmlFor={`lastname-${i}`}>Last Name:</label>
        <input
          type="text"
          id={`lastname-${i}`}
          name={`lastname-${i}`}
          value={formData.lastName}
          onChange={hundleChangeInput}
          required
        />
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
