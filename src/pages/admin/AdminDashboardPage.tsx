import React from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, FileText } from 'lucide-react';

const AdminDashboardPage = () => {
  // Placeholder data - replace with actual data fetched from backend
  const stats = {
    totalProjects: 5, // Example value
    totalPosts: 12,   // Example value
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
        Welcome to <span className="text-imadlab.neon-blue">ImadLab</span> Admin
      </h1>
      
      <p className="text-lg text-gray-300 mb-10">
        Manage your portfolio projects and blog content from here.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-imadlab.deep-navy/40 backdrop-blur-sm rounded-lg border border-imadlab.neon-blue/20">
          <div className="flex items-center mb-3">
            <FolderKanban size={24} className="text-imadlab.neon-blue mr-3" />
            <h2 className="text-xl font-semibold font-heading text-white">Portfolio Projects</h2>
          </div>
          <p className="text-4xl font-bold text-imadlab.neon-green">{stats.totalProjects}</p>
          <p className="text-sm text-gray-400">Total projects published</p>
        </div>
        <div className="p-6 bg-imadlab.deep-navy/40 backdrop-blur-sm rounded-lg border border-imadlab.neon-blue/20">
          <div className="flex items-center mb-3">
            <FileText size={24} className="text-imadlab.neon-blue mr-3" />
            <h2 className="text-xl font-semibold font-heading text-white">Blog Posts</h2>
          </div>
          <p className="text-4xl font-bold text-imadlab.neon-green">{stats.totalPosts}</p>
          <p className="text-sm text-gray-400">Total posts published</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold font-heading mb-4 text-white">Quick Actions</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            to="/admin/portfolio/new"
            className="px-6 py-3 rounded-md bg-imadlab.neon-blue text-imadlab.deep-navy font-bold uppercase tracking-wider hover:bg-opacity-90 hover:shadow-neon-blue-glow transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FolderKanban size={18} />
            Add New Project
          </Link>
          <Link 
            to="/admin/blog/new"
            className="px-6 py-3 rounded-md bg-imadlab.neon-green text-imadlab.deep-navy font-bold uppercase tracking-wider hover:bg-opacity-90 hover:shadow-neon-green-glow transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Add New Blog Post
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboardPage; 