import { useEffect, useState } from "react";
import { adminApprove, adminGetTransactions, adminGetUsers, adminReject } from "../utils/api";

export default function AdminDashboard() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [txs, setTxs] = useState([]);

  async function refresh() {
    try {
      const [u,t] = await Promise.all([adminGetUsers(token), adminGetTransactions(token)]);
      setUsers(u);
      setTxs(t);
    } catch (e) {
      // backend may not be ready yet
    }
  }
  useEffect(()=>{ refresh(); },[]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700 mb-6">Admin Dashboard</h1>

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-brand-700 mb-3">Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-brand-50 text-left">
                <th className="p-2">Name</th><th className="p-2">Email</th><th className="p-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u=>(
                <tr key={u._id} className="border-t">
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">${u.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 mt-8">
        <h2 className="text-lg font-semibold text-brand-700 mb-3">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-brand-50 text-left">
                <th className="p-2">Type</th><th className="p-2">Amount</th><th className="p-2">Status</th><th className="p-2">User</th><th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {txs.map(tx=>(
                <tr key={tx._id} className="border-t">
                  <td className="p-2 capitalize">{tx.type}</td>
                  <td className="p-2">${tx.amount}</td>
                  <td className="p-2">{tx.status}</td>
                  <td className="p-2">{tx.user?.email || "-"}</td>
                  <td className="p-2">
                    {tx.status==="pending" && (
                      <div className="flex gap-2">
                        <button onClick={()=>adminApprove(tx._id, token).then(refresh)} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>
                        <button onClick={()=>adminReject(tx._id, token).then(refresh)} className="px-3 py-1 rounded bg-red-600 text-white">Reject</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {txs.length===0 && (
                <tr><td className="p-3 text-gray-500" colSpan="5">No transactions yet or backend not connected.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
    }
