import { useState } from "react";

export default function WithdrawPage() {
  const [form, setForm] = useState({ amount: "", address: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = Number(form.amount);
    if (amt < 70) {
      alert("Minimum withdrawal amount is $70");
      return;
    }
    alert(`Withdrawal requested: $${amt} to ${form.address} (demo)`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Withdraw Funds</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount (min $70)"
            value={form.amount}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            required
            min="0"
          />

          <input
            type="text"
            name="address"
            placeholder="Your USDT (ERC-20) Wallet Address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:brightness-95"
          >
            Request Withdrawal
          </button>
        </form>
      </div>
    </div>
  );
}
