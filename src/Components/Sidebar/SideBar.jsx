import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>

      <ul className="space-y-3">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
