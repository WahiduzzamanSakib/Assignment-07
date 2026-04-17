import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useData from "./Common/useData";


const Stats = () => {
  const { data, loading } = useData();

  if (loading) {
    return <p>Loading Chart...</p>;
  }

 
  const statusCounts = data.reduce((acc, item) => {
    const status = item.status || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(statusCounts).map((status) => ({
    name: status,
    value: statusCounts[status],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <>
     <h3 className="text-3xl font-bold container mx-auto">Friendship Analytics</h3>
    <div className="my-10 container mx-auto ml-20 " style={{ width: "100%", height: 400}}>
      <h3>By Interaction Type</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default Stats;