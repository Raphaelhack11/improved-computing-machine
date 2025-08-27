import { useState } from "react";
import { createTransaction } from "../utils/api";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");
  const min = 70;

  async function submit() {
    const val = Number(amount);
    if (!val || val < min) {
      setAmount("");
      const el = document.getElementById("wamount");
      el.classList.add("animate-[wiggle_0.2s_ease-in-out_2]");
      setTimeout(()=>el.classList.remove("animate-[wiggle_0.2s_ease-in-out_2]"), 400);
      alert("Minimum withdrawable amount $70");
      return;
    }
    try {
      await createTransaction("withdraw", val, token);
      alert("Withdrawal created. Admin will approve.");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700">Withdraw</h1>
      <p className="text-gray-600 mt-1">Minimum withdrawable amount <b>$70</b></p>

      <div className="mt-6 rounded-3xl border p-6 bg-white shadow-glossy">
        <label className="text-sm text-gray-600">Amount (USD)</label>
        <input id="wamount" value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" className="w-full border rounded-lg px-3 py-2 mt-1" />
        <button onClick={submit} className="mt-4 w-full rounded-lg bg-brand-500 text-white py-2 hover:bg-brand-600">
          Request Withdrawal
        </button>
      </div>
    </div>
  );
  }
