import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/login.css";
import Axios from "axios";
export default function ParentQuery({ onQuery, clearAns, text, who }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    await Axios({
      url: who ==="Student" ? ("/studentQuery"):("/parentQuery"),
      method: "POST",
      data: { query: query },
    }).then((response) => onQuery(response.data.ans));
  };

  const mystyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10px",
  };

  const buttonStyle = {
    width: "40%",
  };

  return (
    <div className="login">
      <FormControl className="login_form" variant="outlined">
        <h2>{text}</h2>
        <TextField
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
        />
      </FormControl>
      <div style={mystyle}>
        <Button
          // className="login_button"
          style={buttonStyle}
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          // className="login_button"
          style={buttonStyle}
          variant="outlined"
          color="secondary"
          onClick={() => {
            setQuery("");
            clearAns();
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
