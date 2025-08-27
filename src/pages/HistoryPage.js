import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function HistoryPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [transactions, setTransactions] = useState([]);

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    // 🔴 Replace with backend API later
    setTransactions([
      { id: 1, type: "Deposit", amount: 100, status: "Completed" },
      { id: 2, type: "Withdrawal", amount: 50, status: "Pending" },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast("Logged out");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="font-bold">Profit Bliss</h1>
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
          <Link to="/settings">Settings</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Transactions */}
      <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Transaction History</h2>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul className="space-y-3">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="flex justify-between border p-3 rounded"
              >
                <span>{t.type}</span>
                <span>${t.amount}</span>
                <span className={t.status === "Completed" ? "text-green-600" : "text-yellow-600"}>
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
    }
