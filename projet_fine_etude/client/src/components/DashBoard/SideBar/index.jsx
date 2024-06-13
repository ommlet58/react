import React from 'react'
import kolchi from "../../../assets/kolchi.png";
import "../SideBar/sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaHouseUser } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { GrPowerShutdown } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import { makeRequest } from "../../../axios";


function SideBar() {

        const handleLogout = () => {
                logout().then(() => {
                  // Optionally redirect the user to the login page or homepage
                  window.location.href = '/login';
                });
        }

        
  return (
<div className='dash-container'>

        <div className='side-bar'>
        <div>
            <img src={kolchi} alt="kolchi"></img>
        </div>
<hr></hr>
        <div>
            <h1>Admin</h1>
        </div>
<hr></hr>

        <NavLink to="/dashBoard" className='box'>
        <RxDashboard></RxDashboard>
        <h2>DashBoard</h2>
        </NavLink>


        <NavLink to="/houseinfo" className='box'>
        <FaHouseUser></FaHouseUser>
        <h2>House Info</h2>
        </NavLink>
        
        <NavLink to="/booking" className='box'>
        <FaSwatchbook></FaSwatchbook>
        <h2>Booking</h2>
        </NavLink>
        <NavLink to="/houseSetting" className='box'>
        
        <IoSettings></IoSettings>
        <h2>Setting</h2>
        </NavLink>
<hr></hr>
        <div className='box' onClick={handleLogout}>
        <GrPowerShutdown></GrPowerShutdown>
        <h2>Sign Out</h2>
        </div>
</div>

<div className='dash'>
<Outlet></Outlet>
  </div>
    </div>
  )
}

export default SideBar




const logout = async () => {
        try {
          const response = await makeRequest.post('/auth/logout', {}, { withCredentials: true });
          if (response.status === 200) {
            console.log(response.data); 
            localStorage.removeItem("user");
            
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
      };