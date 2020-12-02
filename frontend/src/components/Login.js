import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import "../styles/login.css";
import Axios from "axios";
import { Context } from "../Context";
import { useHistory } from "react-router";

export default function Login({ field }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [loggedIn, setLoggedIn] = useContext(Context);
  const [who, setWho] = useContext(Context);

  const handleSubmit = (field) => {
    const submit = async (field) => {
      await Axios({
        url: "/login",
        method: "POST",
        data: { user: user, password: password, field: field },
      })
        .then((res) => {
          if (res.status === 200) {
            setLoggedIn(true);
            setWho(res.data.who);
            if (res.data.who === "Student") {
              history.push("/studentlogin");
            } else if (res.data.who === "faculty") {
              history.push("/facultylogin");
            } else if (res.data.who === "admin") {
              history.push("/adminlogin");
            }
          }
        })
        .then(setUser(""), setPassword(""));
    };

    submit(field);
  };

  return (
    <div className="login">
      <FormControl className="login_form" variant="outlined">
        <TextField
          variant="outlined"
          label={field}
          value={user}
          onChange={handleUserChange}
        />
        <TextField
          variant="outlined"
          type="password"
          label="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <center>
        <Button
          className="login_button"
          variant="outlined"
          color="secondary"
          onClick={() => handleSubmit(field)}
        >
          Log In
        </Button>
      </center>
    </div>
  );
}
