import { useState } from "react";
import CopyButton from "../components/CopyButton";
import { createTransaction } from "../utils/api";

const ADDR = {
  Bitcoin:  "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7",
  USDT:     "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA",
  Ethereum: "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA"
};

export default function Deposit() {
  const [method, setMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");
  const min = 50;

  async function submit() {
    const val = Number(amount);
    if (!val || val < min) {
      setAmount("");
      const el = document.getElementById("amount");
      el.classList.add("animate-[wiggle_0.2s_ease-in-out_2]");
      setTimeout(()=>el.classList.remove("animate-[wiggle_0.2s_ease-in-out_2]"), 400);
      alert("Minimum deposit amount $50");
      return;
    }
    try {
      await createTransaction("deposit", val, token);
      alert("Deposit created. Admin will approve.");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700">Deposit</h1>
      <p className="text-gray-600 mt-1">Minimum deposit amount <b>$50</b></p>

      <div className="mt-6 rounded-3xl border p-6 bg-white shadow-glossy">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Payment Method</label>
            <select value={method} onChange={(e)=>setMethod(e.target.value)} className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Bitcoin</option>
              <option>USDT</option>
              <option>Ethereum</option>
            </select>

            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-1">Wallet Address {method==="USDT" && <span className="text-xs text-gray-500">(ERC-20 only)</span>}</div>
              <div className="flex items-center gap-2">
                <code className="text-sm bg-gray-50 px-2 py-1 rounded">{ADDR[method]}</code>
                <CopyButton value={ADDR[method]} />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Amount (USD)</label>
            <input id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" className="w-full border rounded-lg px-3 py-2 mt-1" />

            <button onClick={submit} className="mt-4 w-full rounded-lg bg-brand-500 text-white py-2 hover:bg-brand-600">
              Create Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
                                              }
