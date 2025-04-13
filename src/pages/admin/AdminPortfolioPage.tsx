import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

// Placeholder component for project list item
const ProjectListItem = ({ project }: { project: any }) => (
  <div className="p-4 bg-imadlab.deep-navy/40 backdrop-blur-sm rounded-lg border border-imadlab.neon-blue/20 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-sm text-gray-400">Published: {project.date}</p>
    </div>
    <div className="flex gap-2">
      <Link 
        to={`/admin/portfolio/edit/${project.id}`} 
        className="px-3 py-1 rounded text-xs bg-imadlab.neon-blue/20 text-imadlab.neon-blue hover:bg-imadlab.neon-blue/40 transition-colors"
      >
        Edit
      </Link>
      <button 
        onClick={() => alert(`Delete project ${project.id}? Implement confirmation and undo!`)}
        className="px-3 py-1 rounded text-xs bg-red-500/20 text-red-400 hover:bg-red-500/40 transition-colors"
      >
        Delete
      </button>
    </div>
  </div>
);

const AdminPortfolioPage = () => {
  // Placeholder project data - replace with actual data fetched from backend
  const projects = [
    { id: 1, title: 'Customer Churn Predictor', date: '2024-07-28' },
    { id: 2, title: 'Real-time Anomaly Detection', date: '2024-06-15' },
    { id: 3, title: 'NLP Sentiment Analysis API', date: '2024-05-01' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-white">Manage Portfolio</h1>
        <Link 
          to="/admin/portfolio/new"
          className="px-4 py-2 rounded-md bg-imadlab.neon-blue text-imadlab.deep-navy font-bold uppercase tracking-wider text-sm hover:bg-opacity-90 hover:shadow-neon-blue-glow transition-all duration-200 flex items-center gap-2"
        >
          <PlusCircle size={18} />
          Add New Project
        </Link>
      </div>

      {/* Project List */}
      {projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-10">No projects found. Add your first project!</p>
      )}

      {/* Placeholder for Add/Edit Form (likely a separate route/component) */}
      {/* <Outlet /> could be used here if using nested routes for add/edit */}
    </div>
  );
};

export default AdminPortfolioPage; 