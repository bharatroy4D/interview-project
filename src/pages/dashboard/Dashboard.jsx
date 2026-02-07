const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* ===== TOP STATS (Manual Cards) ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
          <p className="text-sm opacity-80">Total Users</p>
          <h2 className="text-3xl font-bold mt-2">1,240</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-green-600 text-white p-6 rounded-xl shadow">
          <p className="text-sm opacity-80">Revenue</p>
          <h2 className="text-3xl font-bold mt-2">$32,000</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
          <p className="text-sm opacity-80">Orders</p>
          <h2 className="text-3xl font-bold mt-2">320</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-orange-500 text-white p-6 rounded-xl shadow">
          <p className="text-sm opacity-80">Growth</p>
          <h2 className="text-3xl font-bold mt-2">+12%</h2>
        </div>

      </div>

      {/* ===== TABLE + ACTIVITY ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Users Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Users</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">Rahim</td>
                <td>rahim@gmail.com</td>
                <td className="text-green-600 font-medium">Active</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Karim</td>
                <td>karim@gmail.com</td>
                <td className="text-red-600 font-medium">Blocked</td>
              </tr>

              <tr>
                <td className="py-2">Hasan</td>
                <td>hasan@gmail.com</td>
                <td className="text-green-600 font-medium">Active</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Activity Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✅ New user registered</li>
            <li>💰 Payment successful</li>
            <li>📦 Order shipped</li>
            <li>⚠️ Password changed</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
