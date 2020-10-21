import { Button, FormControl, TextField } from "@material-ui/core";
import React from "react";
import "../styles/login.css";

export default function Login({field}) {
  return (
    <div className='login'>
      <FormControl className="login_form" variant='outlined'>
        <TextField variant='outlined' label={field} />
        <TextField variant='outlined' type="password" label="password" />
      </FormControl>
      <center>
        <Button className="login_button" variant="outlined" color="secondary">
          Log In
        </Button>
      </center>
    </div>
  );
}
