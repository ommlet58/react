import React, { useState } from 'react'
import "../SignUpPage/signeup.css"
import axios from 'axios';

function SignUpPage() {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        axios.post("http://localhost:8081/server/auth/signup", formData).then(res => console.log(res)).catch(err=> console.log(err))
      };
    
      return (
        <div className="signup-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="type">Choose a Sport:</label>
              <select id="sport" name="type" value="{formData.type}" >
                <option value="">Select Sport</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>)
}

export default SignUpPage

