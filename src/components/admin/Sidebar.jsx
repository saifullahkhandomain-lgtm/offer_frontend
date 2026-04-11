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
      <div className="p-4 border-b border-gray-700 flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="2" width="28" height="28" rx="7" fill="#7C3AED" />
          <path d="M5 16 L12 9 L19 16 L12 23 Z" fill="white" strokeLinejoin="round" />
          <circle cx="16" cy="10" r="2.2" fill="#F472B6" />
        </svg>
        <div>
          <h1 className="text-lg font-bold leading-none">
            Deal<span className="text-primary">Dash</span>
          </h1>
          <span className="text-xs text-gray-400">Admin Panel</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? "bg-primary text-white"
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
