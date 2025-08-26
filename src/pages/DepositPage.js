import { useState } from "react";

const BTC_ADDRESS = "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7";
const ERC20_USDT = "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA";
const ETH_ADDRESS = "0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("USDT (ERC-20)");

  const getAddress = () =>
    method.startsWith("BTC") ? BTC_ADDRESS :
    method.startsWith("ETH") ? ETH_ADDRESS : ERC20_USDT;

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = Number(amount);
    if (amt < 50) {
      alert("Minimum deposit amount is $50");
      return;
    }
    alert(`Deposit requested: $${amt} via ${method}\nSend to: ${getAddress()}`);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(getAddress());
    alert("Address copied!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Deposit Funds</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full px-4 py-3 border rounded-lg">
            <option>USDT (ERC-20)</option>
            <option>BTC (Bitcoin)</option>
            <option>ETH (Ethereum)</option>
          </select>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Amount (min $50)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Enter amount"
              required
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Wallet Address</label>
            <div className="flex items-center gap-2">
              <input readOnly className="w-full px-4 py-3 border rounded-lg bg-gray-100 font-mono text-sm" value={getAddress()} />
              <button type="button" onClick={copy} className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:brightness-95">
                Copy
              </button>
            </div>
            {method.includes("USDT") && (
              <p className="text-xs text-gray-500 mt-1">USDT address is ERC-20 only.</p>
            )}
          </div>

          <button type="submit" className="w-full py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:brightness-95">
            Confirm Deposit
          </button>
        </form>
      </div>
    </div>
  );
}
