import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Parent from "./pages/Parent";
import Student from "./pages/Student";
import Visitor from "./pages/Visitor";
import About from "./pages/About";
import Root from "./pages/Root";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/parent" component={Parent}></Route>
        <Route exact path="/student" component={Student}></Route>
        <Route exact path="/visitor" component={Visitor}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/studentlogin" component={StudentLogin}></Route>
        <Route exact path="/facultylogin" component={FacultyLogin}></Route>
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
        <Route exact path="/" component={Root}></Route>{" "}
      </Switch>
    </div>
  );
}

export default App;
