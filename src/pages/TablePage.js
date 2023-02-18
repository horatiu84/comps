import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Bannana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Grape", color: "bg-blue-500", score: 2 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    { label: "Color", render: (fruit) => fruit.color },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
