import Sidebar from "../Components/SideBar/SideBar";
import Dashboard from "../pages/dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <main className="p-6 bg-gray-100 min-h-screen">
            <Dashboard/>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
