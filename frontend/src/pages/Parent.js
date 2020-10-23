import React from "react";
import "../styles/parent.css";
import parent_img from "../parent-query.png";
import ParentQuery from "../components/ParentQuery";

export default function Parent() {
  return (
    <div className="parent_page">
      <div className="parent_login">
        <div className="parent_about">
          <div className="parent_description">
            <h1>About</h1>
            <p>
              doihjd aesdfojsde ;sdjfcsd sdcfjm swd das jaspdfa sdfks fc fdeswfd
              sdfvsd dsfs sdfsdw gefdg erg erg g ersdgd dfgdf g edgedg g rgrg dg
              swedf swdeswfswdw
            </p>
          </div>
          <img src={parent_img} alt="parent_query" />
        </div>
        {/* <h1> query </h1> */}
        <ParentQuery/>
      </div>
      <div className="parent_sub">
        <h1> sub section</h1>
      </div>
    </div>
  );
}
