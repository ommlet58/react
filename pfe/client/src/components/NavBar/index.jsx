import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-style ">
        <ul>
          <li className="">
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Aloha
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/surflevel"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Surf Level
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/package"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Package
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default NavBar;
