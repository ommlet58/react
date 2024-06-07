import React, {useContext, useState } from 'react'
import { AuthContext } from "../../context/authContext.js";
import { useNavigate } from 'react-router-dom';

import { FaHouse } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";

import "../LoginPage/loginpage.css"

function LoginPage() {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your login logic here
     try {
      await login(formData); // Attempts to log in using the login function
      navigate("/dashboard");
    } catch (err) {
      
      console.log(err);
    }
  };
  


  return (
    
    <div className='page'>
        <div className='login-page'>
          <div className='icons-Side'>
            <div className='box'>
              <FaHouse className='box-icon'></FaHouse>
              <h2>House</h2>
            </div>
            <div className='box'>
              <IoRestaurantOutline className='box-icon'></IoRestaurantOutline>
              <h2>Restaurant</h2>
            </div>
            <div className='box'>
              <MdLocalGroceryStore className='box-icon'></MdLocalGroceryStore>
              <h2>GroceryStore</h2>
            </div>
            <div className='box'>
              <GiFoodTruck className='box-icon'></GiFoodTruck>
              <h2>Street Food</h2>
            </div>
            <div className='box'>
              <GiCarSeat className='box-icon'></GiCarSeat>
              <h2>Transportation</h2>
            </div>
            <div className='box'>
              <CgGym className='box-icon'></CgGym>
              <h2>Gym</h2>
            </div>
            <div className='box'>
              <GrUserWorker className='box-icon'></GrUserWorker>
              <h2>workers</h2>
            </div>
          </div>
          <div className='form-side'>
            <form onSubmit={handleSubmit}>
              <h1>Login </h1>
              <IoPersonCircleOutline className='form-icon'></IoPersonCircleOutline>
              <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Login</button>
            </form>
          </div>
        </div>

        </div>
    
  )
}




export default LoginPage