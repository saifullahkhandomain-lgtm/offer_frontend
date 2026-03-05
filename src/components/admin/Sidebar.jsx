import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Stores", path: "/admin/stores", icon: "🏪" },
    { name: "Coupons", path: "/admin/coupons", icon: "🎫" },
    { name: "Categories", path: "/admin/categories", icon: "📁" },
    { name: "Blogs", path: "/admin/blogs", icon: "📝" },
    { name: "Pages", path: "/admin/pages", icon: "📄" },
    { name: "Messages", path: "/admin/messages", icon: "✉️" },
    { name: "Settings", path: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen text-white flex flex-col">
      {/* Logo */}
      <div className="p-2 border-b border-gray-700 flex items-center gap-3">
        <img
          src="/logo.png"
          alt="DealClick"
          className="h-16 w-auto object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        />
        <div style={{ display: "none" }}>
          <h1 className="text-2xl font-bold">
            Deal<span className="text-accent">Click</span>
          </h1>
        </div>
        {/* <span className="text-xs text-gray-400 mt-0.5">Admin Panel</span> */}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? "bg-purple-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
        >
          <span className="text-xl">🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
