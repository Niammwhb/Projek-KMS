import { Search, Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="dashboard-header-modern">
      <div className="dashboard-header-left">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-header-right">
        <div className="dashboard-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="dashboard-notif-btn">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
