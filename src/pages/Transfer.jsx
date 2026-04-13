import { useState } from "react";
import Layout from "../components/Layout";

export default function Transfer() {
  const [form, setForm] = useState({
    from_account: 1,
    to_account: "",
    amount: ""
  });

  const [flag, setFlag] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTransfer = () => {
    if (!form.to_account || !form.amount) {
      alert("Fill all fields");
      return;
    }

    if (Number(form.amount) > 50000) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <Layout>
      <h2>Transfer Money</h2>

      <div style={card}>
        <input value={form.from_account} disabled style={input} />

        <input
          name="to_account"
          placeholder="Receiver Account"
          style={input}
          onChange={handleChange}
        />

        <input
          name="amount"
          placeholder="Amount"
          style={input}
          onChange={handleChange}
        />

        <button style={button} onClick={handleTransfer}>
          Send Money
        </button>

        {flag !== null && (
          flag ? (
            <p style={{ color: "red" }}>⚠️ Suspicious</p>
          ) : (
            <p style={{ color: "green" }}>✅ Success</p>
          )
        )}
      </div>
    </Layout>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  width: "400px",
  marginTop: "20px"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid #ddd"
};

const button = {
  background: "#2563eb",
  color: "white",
  padding: "10px",
  width: "100%",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer"
};