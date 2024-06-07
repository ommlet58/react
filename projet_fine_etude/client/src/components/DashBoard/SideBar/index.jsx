import React from 'react'
import kolchi from "../../../assets/kolchi.png";
import "../SideBar/sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaHouseUser } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { GrPowerShutdown } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";



function SideBar() {
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
        <div className='box'>
        <RxDashboard></RxDashboard>
        <h2>DashBoard</h2>
        </div>
        <div className='box'>
        <FaHouseUser></FaHouseUser>
        <h2>House Info</h2>
        </div>
        <div className='box'>
        <FaSwatchbook></FaSwatchbook>
        <h2>Booking</h2>
        </div>
        <div className='box'>
        <NavLink to="/houseSetting">
        <IoSettings></IoSettings>
        <h2>Setting</h2>
        </NavLink>
        </div>
<hr></hr>
        <div className='box'>
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