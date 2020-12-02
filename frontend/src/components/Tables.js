import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function makeData(q, a) {
  return { q, a };
}

export const Tables = () => {
  const [d, setD] = useState("");

  useEffect(() => {
    const getData = async () => {
      await fetch("/tables")
        .then((res) => res)
        .then((res) => res.json())
        .then((res) => setD(res["0"]));
    };
    getData();
  }, []);

  let data = [];

  Object.keys(d).map((key) => data.push(makeData(key, d[key])));

  const columns = [
    {
      title: "Question",
      field: "q",
    },
    {
      title: "Answer",
      field: "a",
    },
  ];

  return (
    <MaterialTable title="Question Answer Data" data={data} columns={columns} />
  );
};
