import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: "bold", marginRight: 50 }}
        style={{ marginRight: 50 }}
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", marginRight: 50 }}
        style={{ marginRight: 50 }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", marginRight: 50 }}
        style={{ marginRight: 50 }}
        to="/discover"
      >
        Discover
      </NavLink>
    </div>
  );
}
