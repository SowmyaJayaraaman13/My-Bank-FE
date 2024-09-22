import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "HDFC Bank", value: 400 },
  { name: "IDI Bank", value: 300 },
  { name: "SBI Bank", value: 200 },
];

const COLORS = ["#0088FE", "#00C48C", "#FFBB2D", "#FF8042"];

const PieChartExample = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <Card>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" layout="horizontal" />
      </PieChart>
    </Card>
  );
};

export default PieChartExample;
