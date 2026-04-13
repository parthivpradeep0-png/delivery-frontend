import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [alerts, setAlerts] = useState(0);

  // 🔥 Animate numbers
  useEffect(() => {
    let b = 0, t = 0, a = 0;

    const interval = setInterval(() => {
      if (b < 50000) b += 1000;
      if (t < 12) t += 1;
      if (a < 1) a += 1;

      setBalance(b);
      setTransactions(t);
      setAlerts(a);

      if (b >= 50000 && t >= 12 && a >= 1) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <h2 style={title}>Dashboard</h2>

      <div style={grid}>
        {/* CARD 1 */}
        <div style={card}>
          <p style={label}>💰 Balance</p>
          <h3 style={value}>₹{balance.toLocaleString()}</h3>
        </div>

        {/* CARD 2 */}
        <div style={card}>
          <p style={label}>📈 Transactions</p>
          <h3 style={value}>{transactions}</h3>
        </div>

        {/* CARD 3 */}
        <div style={card}>
          <p style={label}>⚠️ Alerts</p>
          <h3 style={value}>{alerts}</h3>
        </div>
      </div>
    </Layout>
  );
}

const title = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "25px"
};

const card = {
  background: "linear-gradient(135deg, #ffffff, #f1f5f9)",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  transition: "0.3s",
  cursor: "pointer"
};

const label = {
  color: "#6b7280",
  marginBottom: "10px"
};

const value = {
  fontSize: "24px",
  fontWeight: "700"
};