import ListRoundedIcon from "@material-ui/icons/ListRounded";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="topnav">
      <div>
        <NavLink className="app_title" to="/">
          SQIMS
        </NavLink>
        <ListRoundedIcon
          className="icon"
          onClick={handleOpen}
          color="primary"
          fontSize="large"
        />
      </div>
      <div className={isOpen ? "show_nav" : "nav_header"}>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/visitor">Visitor</NavLink>
        <NavLink to="/parent">Parent</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
      </div>
    </div>
  );
}
