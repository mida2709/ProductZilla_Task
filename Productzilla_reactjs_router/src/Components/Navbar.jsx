import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active_Styles" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_Styles" exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_Styles" exact to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_Styles" exact to="/services">
            Services
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
