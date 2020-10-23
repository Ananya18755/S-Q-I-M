import { Button, FormControl, TextField } from "@material-ui/core";
import React from "react";
import "../styles/login.css";

export default function ParentQuery() {
  return (
    <div className="login">
      <FormControl className="login_form" variant="outlined">
        <h2>Namastey! How we may help you?</h2>
        <TextField variant="outlined" />
      </FormControl>
      <center>
        <Button className="login_button" variant="outlined" color="secondary">
          Submit
        </Button>
      </center>
    </div>
  );
}
