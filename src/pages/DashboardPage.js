import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "deposit" or "withdraw"
  const [amount, setAmount] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchUser();
      fetchTransactions();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!amount || isNaN(amount)) return alert("Enter a valid amount");

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/transactions/${modalType}`,
        { amount: parseFloat(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Refresh data
      fetchUser();
      fetchTransactions();
      setAmount("");
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  if (!user) return <p className="text-center mt-10">Loading dashboard...</p>;

  // 📊 Chart Data
  const chartData = transactions.map((tx) => ({
    date: new Date(tx.createdAt).toLocaleDateString(),
    deposit: tx.type === "deposit" ? tx.amount : 0,
    withdraw: tx.type === "withdraw" ? tx.amount : 0,
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, <span className="text-blue-600">{user.email}</span>
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-green-600">
            ${user.balance?.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold">Total Deposits</h2>
          <p className="text-2xl font-bold text-blue-600">
            $
            {transactions
              .filter((t) => t.type === "deposit")
              .reduce((sum, t) => sum + t.amount, 0)
              .toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold">Total Withdrawals</h2>
          <p className="text-2xl font-bold text-red-600">
            $
            {transactions
              .filter((t) => t.type === "withdraw")
              .reduce((sum, t) => sum + t.amount, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => {
            setModalType("deposit");
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Deposit
        </button>
        <button
          onClick={() => {
            setModalType("withdraw");
            setShowModal(true);
          }}
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700"
        >
          Withdraw
        </button>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">Transaction Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="deposit" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="withdraw" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Type</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map((tx) => (
                <tr key={tx.id} className="border-b">
                  <td className="p-3 capitalize">{tx.type}</td>
                  <td className="p-3">${tx.amount.toFixed(2)}</td>
                  <td
                    className={`p-3 font-medium ${
                      tx.status === "completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {tx.status}
                  </td>
                  <td className="p-3">
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4 capitalize">{modalType}</h2>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-2 rounded-lg mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 rounded-lg text-white ${
                  modalType === "deposit"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {modalType === "deposit" ? "Deposit" : "Withdraw"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
