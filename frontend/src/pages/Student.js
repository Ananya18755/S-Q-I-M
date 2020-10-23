import React from "react";
import "../styles/student.css";
import Login from "../components/Login";
import stu_img from "../student-query.gif";

export default function Student() {
  return (
    <div className="student_page">
      <div className="student_login">
        <div className="student_about">
          <div className="student_description">
            <h1>About</h1>
            <p>
              Dexsadasdasfasdf asdfa asdf asf aswdsad das dasd asdas safdasfesf
              sdfsajfjwe sadjfsad jfd asdja asjf asf asfas ;asfdfdjsafdca as;f
              as dada eadija sdas;djl ojfdas;f ;ljdfsaojas;ljd ojfdao jaosjda;l
              dapskdak dsfapk askfd 'sakdf'as sadf ka'sdfkda odsa asdoj sa'dck a
            </p>
          </div>
          <img src={stu_img} alt="query_image" />
        </div>
        <Login field="Student ID" />
      </div>
      <div className="student_sub">
        <h1> sub section</h1>
      </div>
    </div>
  );
}
