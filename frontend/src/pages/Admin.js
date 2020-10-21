import React from "react";
import Login from "../components/Login";

import "../styles/admin.css";

export default function Admin() {
  return (
    <div className="admin_page">
      <div className="faculty_login">
        <div className="admin_description">
          <h1>About Faculty</h1>
          <p>
            dsadasdk lkadnasknd asd askdnak nasda nasdn;akndasknd ak;ndas
            na;ksnd a;ksnd ;knas;k ndas;kn nsa;nas{" "}
          </p>
        </div>
        <Login field ="Faculty ID" />
      </div>
      <div className="admin_login">
        <div className="admin_description">
          <h1>About Admin</h1>
          <p>
            dsadasdk lkadnasknd asd askdnak nasda nasdn;akndasknd ak;ndas
            na;ksnd a;ksnd ;knas;k ndas;kn nsa;nas{" "}
          </p>
        </div>
        <Login field="Admin ID" />
      </div>
    </div>
  );
}
