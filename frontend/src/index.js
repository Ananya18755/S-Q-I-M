import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Parent from "./pages/Parent";
import Student from "./pages/Student";
import Visitor from "./pages/Visitor";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";

ReactDOM.render(
  <>
    <Router>
      <App />
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/parent" component={Parent}></Route>
      <Route exact path="/student" component={Student}></Route>
      <Route exact path="/visitor" component={Visitor}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/" component={Root}></Route>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
