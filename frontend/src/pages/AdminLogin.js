import React from "react";
import { Tables } from "../components/Tables";
import "../styles/tables.css"
export default function AdminLogin() {
  return (
    <div>
      <h1>You are currently logged in admin</h1>
      <div className="containers" style={{margin:"20px"}} >
        <Tables />
      </div>
    </div>
  );
}
