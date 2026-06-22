
import Chart from "./components/Chart";
import "./App.css";

export default function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>📊 Analytics Dashboard</h1>
        <p className="subtitle">Track your key performance metrics in real time</p>
      </header>
      <main className="content">
        <div className="card">
          <Chart />
        </div>
      </main>
    </div>
  );
}

