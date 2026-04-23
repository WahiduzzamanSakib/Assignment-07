import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { GetData } from "./DataContext";


const Stats = () => {
  const { contest } = useContext(GetData);

 
  const actionCounts = contest.reduce((acc, entry) => {
    const action = entry.action || "unknown";
    acc[action] = (acc[action] || 0) + 1;
    return acc;
  }, {});

  const formatLabel = (type) => {
    if (type === "call") return "📞 Call";
    if (type === "text") return "💬 Text";
    if (type === "video") return "🎥 Video";
    return type;
  };


  const chartData = Object.keys(actionCounts).map((action) => ({
    name: formatLabel(action),
    value: actionCounts[action],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <h3 className="text-3xl font-bold container mx-auto">
        Friendship Analytics
      </h3>

      <div
        className="my-10 container mx-auto bg-base-200 rounded-lg p-4"
        style={{ width: "100%", height: 400 }}
      >
        <h3 className="ml-5 mb-2">By Interaction Type</h3>

        {chartData.length === 0 ? (
          <p className="text-center text-2xl font-semibold mt-10">
            No interaction data available
          </p>
        ) : (
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

export default Stats;