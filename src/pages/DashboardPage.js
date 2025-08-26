import React from "react";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          Logout
        </button>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Balance</h2>
          <p className="text-2xl font-semibold text-gray-800">$12,340</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Income</h2>
          <p className="text-2xl font-semibold text-green-600">+$4,500</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Expenses</h2>
          <p className="text-2xl font-semibold text-red-600">-$1,250</p>
        </div>
      </section>

      {/* Transactions */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Transactions
        </h2>
        <ul className="divide-y divide-gray-200">
          <li className="flex justify-between py-3">
            <span>Payment from Client</span>
            <span className="text-green-600">+ $1,200</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Groceries</span>
            <span className="text-red-600">- $150</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Netflix Subscription</span>
            <span className="text-red-600">- $12</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DashboardPage;
