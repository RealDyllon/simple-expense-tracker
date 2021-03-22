import React from "react";
import { Line, LineChart, Pie, PieChart, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", cost: 400 },
  { name: "Group B", cost: 300 },
  { name: "Group C", cost: 300 },
  { name: "Group D", cost: 200 },
];

const TotalPie = ({ expenses }) => {
  const expensesData = expenses;

  console.log("expenses Data", expensesData);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="cost"
        nameKey="name"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
        label={(entry) => entry.name + " - " + entry.cost}
      />
    </PieChart>
  );
};

export default TotalPie;
