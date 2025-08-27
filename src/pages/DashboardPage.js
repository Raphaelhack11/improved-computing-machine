import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";

// Your backend base URL
const API_URL = import.meta.env.VITE_API_URL || "https://your-backend-url.onrender.com";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ fetch balance
        const balRes = await axios.get(`${API_URL}/balance`, { withCredentials: true });
        setBalance(balRes.data.balance);

        // ✅ fetch transaction history
        const txRes = await axios.get(`${API_URL}/history`, { withCredentials: true });
        setTransactions(txRes.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load dashboard data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 gap-6">
      {/* Balance card */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-bold">Your Balance</h2>
          <p className="text-3xl mt-2 text-green-600">${balance.toFixed(2)}</p>
        </CardContent>
      </Card>

      {/* Transactions list */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions yet.</p>
          ) : (
            <ul className="space-y-2">
              {transactions.map((tx) => (
                <li
                  key={tx.id}
                  className="flex justify-between border-b pb-2 last:border-none"
                >
                  <span className="capitalize">{tx.type}</span>
                  <span
                    className={`${
                      tx.amount > 0 ? "text-green-600" : "text-red-600"
                    } font-semibold`}
                  >
                    {tx.amount > 0 ? "+" : ""}
                    {tx.amount}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(tx.createdAt).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
