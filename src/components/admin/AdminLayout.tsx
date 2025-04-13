import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, FileText, LogOut } from 'lucide-react';

const AdminLayout = () => {
  // Placeholder for authentication check
  const isAuthenticated = true; // Replace with actual auth logic

  // Placeholder for logout function
  const handleLogout = () => {
    console.log("Logout clicked - implement actual logout logic");
    // Redirect to login or home page after logout
  };

  if (!isAuthenticated) {
    // In a real app, you'd redirect to /admin/login
    // For now, we'll just show a message or redirect in a useEffect
    // For simplicity here, we assume auth happens before this component mounts,
    // or a HOC/Route protection handles the redirect.
    return <div>Redirecting to login...</div>; 
  }

  return (
    <div className="min-h-screen flex bg-imadlab-gradient text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-imadlab.deep-navy/30 backdrop-blur-md p-4 flex flex-col border-r border-imadlab.neon-blue/20">
        <div className="mb-8 text-center">
          <Link to="/admin/dashboard" className="text-2xl font-bold font-heading text-white flex items-center justify-center">
            <span className="text-imadlab.neon-blue mr-1">[</span>
            <span>ImadLab</span>
            <span className="text-imadlab.neon-blue ml-1">Admin]</span>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="mb-2">
              <Link 
                to="/admin/dashboard" 
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-imadlab.neon-blue/20 hover:text-white transition-colors duration-200"
              >
                <LayoutDashboard size={18} className="mr-3 text-imadlab.neon-blue" />
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/portfolio"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-imadlab.neon-blue/20 hover:text-white transition-colors duration-200"
              >
                <FolderKanban size={18} className="mr-3 text-imadlab.neon-blue" />
                Portfolio
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/blog"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-imadlab.neon-blue/20 hover:text-white transition-colors duration-200"
              >
                <FileText size={18} className="mr-3 text-imadlab.neon-blue" />
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div>
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
      <main className="flex-1 p-6 md:p-10 overflow-y-auto relative">
         {/* Subtle Particle Effect Placeholder - Implement actual particle library if needed */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Example: Add a div for background effects */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-5"></div> */}
         </div>
         <Outlet /> { /* Child routes will render here */ }
      </main>
    </div>
  );
};

export default AdminLayout; 