
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Settings,
  HeartPulse,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Patients",
    path: "/patients",
    icon: Users,
  },
  {
    label: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    label: "Medical Records",
    path: "/medical-records",
    icon: FileText,
  },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-slate-900 text-white">
      <div className="flex items-center gap-3 border-b border-slate-700 px-6 py-5">
        <div className="rounded-lg bg-blue-600 p-2">
          <HeartPulse size={24} />
        </div>

        <div>
          <h1 className="font-bold">HealthCare</h1>
          <p className="text-xs text-slate-400">
            Record Management
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-slate-800"
        >
          <Settings size={19} />
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
