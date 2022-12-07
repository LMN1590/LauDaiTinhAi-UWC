import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "20/11",
    collected: 12,
    uncollected: 12,
  },
  {
    name: "22/11",
    collected: 36,
    uncollected: 4,
  },
  {
    name: "23/11",
    collected: 12,
    uncollected: 28,
  },
  {
    name: "24/11",
    collected: 15,
    uncollected: 21,
  },
  {
    name: "25/11",
    collected: 31,
    uncollected: 26,
  },
  {
    name: "26/11",
    collected: 38,
    uncollected: 16,
  },
];

function Chart() {
  return (
    <div style={{ height: "30vh", width: "40vw" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="collected"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uncollected" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
