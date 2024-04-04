import React from "react";
import logo from "../../assets/logoino.png";
import { IoRestaurant } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaCarrot } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { AiTwotoneShop } from "react-icons/ai";
import { MdHandyman } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { GrBike } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";
import { GiSurfBoard } from "react-icons/gi";


import { NavLink, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className="mainpage">
    <div className="sidebar">
      <NavLink>
        <img src={logo} alt="logo"></img>
      </NavLink>
      <hr></hr>
      <h1>FOOD</h1>
      <ul>
        <li>
          <NavLink className="myNavLink" to="/restaurant">
            <IoRestaurant />
            <span>Restaurant</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="myNavLink">
          <GiFoodTruck />
            <span>StreetFood</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="myNavLink">
          <FaCarrot />
            <span>
                Fruits & Vegetables
                </span>
            </NavLink>
        </li>
        <li>
          
          <NavLink className="myNavLink"><TbMeat /><span>chicken & meat</span></NavLink>
        </li>
        <li>
          
          <NavLink className="myNavLink"><AiTwotoneShop /><span>Shops</span></NavLink>
        </li>
        <li>
            <NavLink className="myNavLink"><GiSurfBoard/><span>Surf Camps</span></NavLink>
        </li>
      </ul>
      <hr></hr>
      <h1>SERVICES</h1>
      <ul>
        <li>   
          <NavLink className="myNavLink"><MdHandyman /><span>tradespeople</span></NavLink>
        </li>
        <li>
          <NavLink className="myNavLink"><FaCarSide/><span>Car Rental</span></NavLink>
        </li>
        <li>
          <NavLink className="myNavLink"><FaTaxi/><span>Transportation</span></NavLink>
        </li>
        <li>
          <NavLink className="myNavLink"><GrBike/><span>sports equipment</span></NavLink>
        </li>
        <li>
          <NavLink className="myNavLink"><FaHouse/><span>House Rental</span></NavLink>
        </li>
      </ul>
    </div>
    <Outlet></Outlet>
    </div>
  );
}

export default SideBar;
