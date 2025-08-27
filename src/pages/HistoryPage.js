import React, { useEffect, useState } from "react";
import { getHistory } from "../api";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchHistory() {
      const data = await getHistory(token);
      setHistory(data || []);
    }
    fetchHistory();
  }, [token]);

  return (
    <div className="history-page">
      <h2>Transaction History</h2>
      <ul>
        {history.map((tx) => (
          <li key={tx.id}>
            {tx.type} - ${tx.amount} - {tx.status} ({tx.createdAt})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
