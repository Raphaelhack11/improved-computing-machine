export default function HistoryPage() {
  const transactions = [
    { id: 1, type: "Deposit", amount: 200, date: "2025-08-20" },
    { id: 2, type: "Withdrawal", amount: 100, date: "2025-08-22" },
    { id: 3, type: "Deposit", amount: 500, date: "2025-08-25" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Transaction History</h2>
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-gray-600">Type</th>
              <th className="py-3 px-4 text-gray-600">Amount</th>
              <th className="py-3 px-4 text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="py-3 px-4 font-medium">{tx.type}</td>
                <td className="py-3 px-4">${tx.amount}</td>
                <td className="py-3 px-4">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
