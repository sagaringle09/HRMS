
import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Health Record Management
        </h2>
        <p className="text-sm text-slate-500">
          Manage healthcare information in one place
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 sm:flex">
          <Search size={18} className="text-slate-400" />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="w-32 text-sm outline-none md:w-44"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
        >
          <Bell size={21} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            AD
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Admin User
            </p>
            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
