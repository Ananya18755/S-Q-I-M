import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/login.css";
import Axios from "axios";

export default function Login({ field }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const submit = async () => {
      await Axios({
        url: "/login",
        method: "POST",
        data: { user: user, password: password },
      })
        .then((res) => console.log(res.data.status))
        .then(setUser(""),setPassword(""));
    };

    submit();
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
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </center>
    </div>
  );
}
