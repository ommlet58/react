import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {

  return (<>
    <nav className='nav-style'>
      <ul>
        <li className=""><NavLink  activeClassName='active' to='/' >Aloha</NavLink></li>
        <li><NavLink to='/location'>Location</NavLink></li>
        <li><NavLink to='/activities'>Activities</NavLink></li>
        <li><NavLink to='/surflevle'>Surf Level</NavLink></li>
        <li><NavLink to='/communnty'>Communnty</NavLink></li>
        <li><NavLink to='/package'>Package</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
      </ul>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default NavBar