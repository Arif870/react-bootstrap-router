import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const activeClass = {
    backgroundColor: "purple",
    color: "white",
    borderRadius: "4px",
  };
  return (
    <div className="manu">
      <NavLink
        style={design => (design.isActive ? activeClass : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        style={design => (design.isActive ? activeClass : undefined)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={design => (design.isActive ? activeClass : undefined)}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        style={design => (design.isActive ? activeClass : undefined)}
        to="/users"
      >
        Users
      </NavLink>
    </div>
  );
};

export default Menu;
