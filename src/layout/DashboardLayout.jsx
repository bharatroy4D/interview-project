import Navbar from "../components/Navbar";
import SideBar from "../Components/SideBar/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
