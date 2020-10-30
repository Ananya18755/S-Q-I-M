import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/login.css";
import Axios from "axios";

export default function ParentQuery({onQuery}) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    await Axios({
      url: "/parentQuery",
      method: "POST",
      data: { query: query },
    })
      .then((response) => onQuery(response.data.status))
      .then(setQuery(""));
  };

  return (
    <div className="login">
      <FormControl className="login_form" variant="outlined">
        <h2>Namastey! How we may help you?</h2>
        <TextField
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
        />
      </FormControl>
      <center>
        <Button
          className="login_button"
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </center>
    </div>
  );
}
