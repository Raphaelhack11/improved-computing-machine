export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Profit Bliss Dashboard</h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">$5,230.00</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <ul className="mt-2 text-sm text-gray-600">
            <li>+ $200 Deposit</li>
            <li>- $50 Withdrawal</li>
            <li>+ $100 Profit</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Deposit
          </button>
          <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Withdraw
          </button>
        </div>
      </main>
    </div>
  );
    }
