import ListRoundedIcon from "@material-ui/icons/ListRounded";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Context } from "../Context";
import { Button } from "@material-ui/core";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const [loggedIn, setLoggedIn] = useContext(Context);
  const who = useContext(Context);

  useEffect(() => {}, [loggedIn]);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <div className="topnav">
          <div>
            <Link to="/home" className="app_title">
              SQIMS
            </Link>
            <ListRoundedIcon
              className="icon"
              onClick={handleOpen}
              color="primary"
              fontSize="large"
            />
          </div>
          <div className={isOpen ? "show_nav" : "nav_header"}>
            <Button
              style={{ fontSize: "13px", textAlign: "center" }}
              component={Link}
              to="/home"
              variant="outlined"
              color="primary"
              onClick={handleLogout}
            >
              Log out
            </Button>
            {who[0] === "Student" ? <Link to="/studentlogin">Query</Link> : ""}
            {who[0] === "admin" ? <Link to="/adminlogin">Admin</Link> : ""}
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
          </div>
        </div>
      ) : (
        <div className="topnav">
          <div>
            <Link className="app_title" to="/">
              SQIMS
            </Link>
            <ListRoundedIcon
              className="icon"
              onClick={handleOpen}
              color="primary"
              fontSize="large"
            />
          </div>
          <div className={isOpen ? "show_nav" : "nav_header"}>
            <Link to="/admin">Admin</Link>
            <Link to="/visitor">Visitor</Link>
            <Link to="/parent">Parent</Link>

            <Link to="/student">Student</Link>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
          </div>
        </div>
      )}
    </>
  );
}
