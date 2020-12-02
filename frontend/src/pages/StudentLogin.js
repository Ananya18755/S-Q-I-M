import React, { useContext,useState } from "react";
import "../styles/parent.css";
import ParentQuery from "../components/ParentQuery";

export default function StudentLogin() {
  const [ans, setAns] = useState("");

  const handleSetQuery = (val) => {
    setAns(val);
  };

  const clearAns = () => {
    setAns("");
  };

  console.log(ans);

  return (
    <div className="parent_page">
      <div className="parent_login">
        <div className="parent_about">
          <div className="parent_description">
            <h1>Welcome !</h1>
            <h1>You are currently logged in as Student</h1>
            <p>
              doihjd aesdfojsde ;sdjfcsd sdcfjm swd das jaspdfa sdfks fc fdeswfd
              sdfvsd dsfs sdfsdw gefdg erg erg g ersdgd dfgdf g edgedg g rgrg dg
              swedf swdeswfswdw
            </p>
          </div>
          {/* <img src={parent_img} alt="parent_query" /> */}
        </div>
        {/* <h1> query </h1> */}
        <ParentQuery onQuery={handleSetQuery} clearAns={clearAns} text="Please enter your query below" who="Student"/>
      </div>
      <div className="parent_sub">
        <h1>Your answer will be displayed here</h1>
        <h1>{ans}</h1>
      </div>
    </div>
  );
}
