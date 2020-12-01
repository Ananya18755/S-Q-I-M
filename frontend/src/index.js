import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Context } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

// import { Context } from "./Context";

const AppWrapper = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [who, setWho] = useState("");

  return (
    <Context.Provider value={[loggedIn, setLoggedIn, who, setWho]}>
      <Router>
        <App />
      </Router>
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
