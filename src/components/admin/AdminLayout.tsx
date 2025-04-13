import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, FolderKanban, FileText, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const AdminLayout = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  // Properly handle logout with auth context
  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-black/30 backdrop-blur-md p-4 flex flex-col border-r border-[#40C4FF]/20">
        <div className="mb-8 text-center">
          <Link
            to="/admin"
            className="text-2xl font-bold font-heading text-white flex items-center justify-center"
          >
            <span className="text-[#40C4FF] mr-1">[</span>
            <span>Admin Portal</span>
            <span className="text-[#40C4FF] ml-1">]</span>
          </Link>
        </div>

        {/* User info */}
        <div className="mb-6 px-2 py-3 bg-[#40C4FF]/5 rounded-md border border-[#40C4FF]/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#40C4FF]/10 rounded-full">
              <User size={18} className="text-[#40C4FF]" />
            </div>
            <div>
              <div className="text-sm font-medium">{user?.username || "Admin"}</div>
              <div className="text-xs text-gray-400">{user?.email || "admin@example.com"}</div>
            </div>
          </div>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-1">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-[#40C4FF]/20 hover:text-white transition-colors duration-200"
              >
                <LayoutDashboard
                  size={18}
                  className="mr-3 text-[#40C4FF]"
                />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/projects"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-[#40C4FF]/20 hover:text-white transition-colors duration-200"
              >
                <FolderKanban
                  size={18}
                  className="mr-3 text-[#40C4FF]"
                />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-[#40C4FF]/20 hover:text-white transition-colors duration-200"
              >
                <FileText size={18} className="mr-3 text-[#40C4FF]" />
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-[#40C4FF]/10 pt-4 mt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-2 rounded-md text-gray-300 hover:bg-red-500/30 hover:text-white transition-colors duration-200"
          >
            <LogOut size={18} className="mr-3 text-red-400" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
