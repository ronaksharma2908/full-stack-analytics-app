import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="5 5" stroke="#ddd" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#555" }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Users" stroke="#1976d2" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Revenue" stroke="#ef5350" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Sessions" stroke="#43a047" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="BounceRate" stroke="#ff9800" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
