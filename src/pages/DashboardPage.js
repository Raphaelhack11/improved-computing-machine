import { useEffect, useState } from "react";
import { getBalance, deposit, withdraw } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    getBalance(token)
      .then((data) => setBalance(data.balance))
      .catch(() => setBalance("Error ❌"));
  }, [navigate, token]);

  const handleDeposit = async () => {
    try {
      await deposit(token, Number(amount));
      const data = await getBalance(token);
      setBalance(data.balance);
      setAmount("");
      toast.success("Deposit successful ✅");
    } catch {
      toast.error("Deposit failed ❌");
    }
  };

  const handleWithdraw = async () => {
    try {
      await withdraw(token, Number(amount));
      const data = await getBalance(token);
      setBalance(data.balance);
      setAmount("");
      toast.success("Withdraw successful ✅");
    } catch {
      toast.error("Withdraw failed ❌");
    }
  };

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
          <Link to="/transactions">Transactions</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Main */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white p-6 rounded shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h2>
          <p className="text-lg mb-4">Your Balance:</p>
          <p className="text-3xl font-bold text-green-600 mb-4">
            {balance !== null ? `$${balance}` : "Loading..."}
          </p>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleDeposit}
              className="flex-1 bg-green-500 text-white py-2 rounded"
            >
              Deposit
            </button>
            <button
              onClick={handleWithdraw}
              className="flex-1 bg-red-500 text-white py-2 rounded"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
