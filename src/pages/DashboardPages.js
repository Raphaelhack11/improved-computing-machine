import { Link } from "react-router-dom";

export default function DashboardPage() {
  const user = { name: "John Doe", balance: 1250.75, currency: "USD" };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>

      <div className="bg-white shadow rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Account Balance</h2>
        <p className="text-3xl font-extrabold text-yellow-500 mt-2">
          {user.currency} {user.balance.toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/deposit" className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Deposit</h3>
          <p className="text-gray-500 mt-2">Add funds securely</p>
        </Link>
        <Link to="/withdraw" className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Withdraw</h3>
          <p className="text-gray-500 mt-2">Request a payout</p>
        </Link>
        <Link to="/history" className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">History</h3>
          <p className="text-gray-500 mt-2">All transactions</p>
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Investment Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Basic", stake: 50, roi: "20%", duration: "1 month" },
            { name: "Gold", stake: 100, roi: "35%", duration: "1 month" },
            { name: "Master", stake: 200, roi: "50%", duration: "1 month" },
            { name: "Premium", stake: 300, roi: "75%", duration: "1 month" },
          ].map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-600 mt-2">Stake: ${p.stake}</p>
              <p className="text-gray-700 font-bold mt-1">Daily ROI: {p.roi}</p>
              <p className="text-gray-500 text-sm">{p.duration}</p>
              <button className="mt-4 w-full py-2 rounded-lg bg-yellow-500 text-white hover:brightness-95">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
