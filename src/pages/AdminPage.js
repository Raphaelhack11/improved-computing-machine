export default function AdminPage() {
  const users = [
    { id: 1, name: "John Doe", balance: 1200, status: "Active" },
    { id: 2, name: "Jane Smith", balance: 750, status: "Pending" },
    { id: 3, name: "Mike Johnson", balance: 300, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-gray-600">User</th>
              <th className="py-3 px-4 text-gray-600">Balance</th>
              <th className="py-3 px-4 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="py-3 px-4 font-medium">{u.name}</td>
                <td className="py-3 px-4">${u.balance}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
