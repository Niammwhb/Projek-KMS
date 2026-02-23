import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, LogOut } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import logo from "../assets/logo.png";
import "../styles/sidebar.css";

export default function Sidebar() {
  const { user, logout } = useAuth(); // ambil user juga
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="kms-sidebar">
      {/* LOGO */}
      <div className="kms-sidebar-header">
        <div className="sidebar-brand">
          <img src={logo} alt="RBS Logo" />
        </div>
      </div>

      {/* MENU */}
      <nav className="kms-sidebar-menu">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "kms-menu-item active" : "kms-menu-item"
          }
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/knowledge"
          className={({ isActive }) =>
            isActive ? "kms-menu-item active" : "kms-menu-item"
          }
        >
          <BookOpen size={18} />
          <span>Knowledge</span>
        </NavLink>

        {/* HANYA SUPERADMIN BISA LIHAT MENU INI */}
        {user?.role === "superadmin" && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "kms-menu-item active" : "kms-menu-item"
            }
          >
            <Users size={18} />
            <span>Kelola User</span>
          </NavLink>
        )}
      </nav>

      {/* LOGOUT */}
      <div className="kms-sidebar-footer">
        <button className="kms-logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
