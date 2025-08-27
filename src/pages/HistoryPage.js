import { useEffect, useState } from "react";
import { getTransactions } from "../utils/api";

export default function History() {
  const [txs, setTxs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getTransactions(token).then(setTxs).catch(()=>{});
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700 mb-4">Transaction History</h1>
      <div className="rounded-2xl border bg-white overflow-hidden">
        <div className="grid grid-cols-4 px-4 py-3 bg-brand-50 text-sm font-semibold">
          <div>Type</div><div>Amount</div><div>Status</div><div>Date</div>
        </div>
        {txs.length===0 ? (
          <div className="p-6 text-gray-600">No transactions yet.</div>
        ) : txs.map(tx => (
          <div key={tx._id} className="grid grid-cols-4 px-4 py-3 border-t text-sm">
            <div className="capitalize">{tx.type}</div>
            <div>${tx.amount}</div>
            <div className={`${tx.status==='approved'?'text-green-600':tx.status==='rejected'?'text-red-600':'text-yellow-600'}`}>{tx.status}</div>
            <div>{new Date(tx.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
                    }
