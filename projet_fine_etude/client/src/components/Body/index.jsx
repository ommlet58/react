import React from "react";
import { FaHouse } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { MdOutlineManageSearch } from "react-icons/md";
import "../Body/body.css";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header";

function Body() {
  return (<>
  <header className="App-header">
        <Header></Header>
      </header>
      <hr className='line'></hr>
    <div className="body">
      <div className="icons">
        <NavLink to="search" className='my-nav'>
          <div className="icon-block">
            <MdOutlineManageSearch className="main-icon" />
            <p>Your Search</p>
          </div>
        </NavLink>
        <NavLink to="/houses" className='my-nav'>
          <div className="icon-block">
            <FaHouse className="main-icon"></FaHouse>
            <p>Houses</p>
          </div>
        </NavLink>
        <NavLink to="/restaurant" className='my-nav'>
          <div className="icon-block" >
            <IoRestaurantOutline className="main-icon"></IoRestaurantOutline>
            <p>restaurant</p>
          </div>
        </NavLink >
        <NavLink to="/grocery" className='my-nav'>
          <div className="icon-block">
            <MdLocalGroceryStore className="main-icon" />
            <p>grocery</p>
          </div>
        </NavLink>

        <NavLink to="/streetfood" className='my-nav'>
          <div className="icon-block">
            <GiFoodTruck className="main-icon" />
            <p>Street Food</p>
          </div>
        </NavLink>
        <NavLink to="/gym" className='my-nav'>
          <div className="icon-block">
            <CgGym className="main-icon" />
            <p>Gym</p>
          </div>
        </NavLink>
        <NavLink to="/trasnportation" className='my-nav'>
          <div className="icon-block">
            <GiCarSeat className="main-icon" />
            <p>Trasnportation</p>
          </div>
        </NavLink>
        <NavLink to="/tradespersons" className='my-nav'>
          <div className="icon-block">
            <GrUserWorker className="main-icon" />
            <p>Tradespersons</p>
          </div>
        </NavLink>
      </div>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  </>
  );
}

export default Body;
