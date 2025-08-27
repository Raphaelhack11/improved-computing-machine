import React, { useEffect, useState } from "react";
import { getBalance, deposit, withdraw } from "../api";

function DashboardPage() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBalance() {
      const data = await getBalance(token);
      if (data.balance !== undefined) {
        setBalance(data.balance);
      }
    }
    fetchBalance();
  }, [token]);

  const handleDeposit = async () => {
    const result = await deposit(Number(amount), token);
    alert(result.message);
  };

  const handleWithdraw = async () => {
    const result = await withdraw(Number(amount), token);
    alert(result.message);
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>Balance: ${balance}</p>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default DashboardPage;
