import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../components/Chart";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/analytics")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Chart data={data} />
    </div>
  );
}
