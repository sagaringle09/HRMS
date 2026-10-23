
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
