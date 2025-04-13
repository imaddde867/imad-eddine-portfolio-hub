import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectData } from '../data/sampleData'; // Import only the type
import { useAdminStore } from '../data/adminStore'; // Import the admin store
import NotFound from './NotFound'; // Import NotFound for handling invalid slugs
import SkillBadge from '../components/SkillBadge';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Get projects from the admin store instead of the static sample data
  const { projects } = useAdminStore();
  const project = projects.find((p) => p.slug === slug);

  // Handle case where project with the slug is not found
  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="container-custom section-padding">
      {/* Back Link */}
      <Link 
        to="/projects"
        className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-12 text-center">
        <h1 className="section-title mb-3">{project.title}</h1>
        <p className="section-subtitle max-w-3xl mx-auto">{project.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */} 
        <div className="lg:col-span-2 space-y-6">
          {project.image && (
             <div className="mb-8 rounded-md overflow-hidden border border-border shadow-md">
               <img src={project.image} alt={`${project.title} preview`} className="w-full h-auto object-cover" />
             </div>
          )}
          
          <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
           {/* Display long description if available, otherwise fallback or hide */}
          {project.longDescription ? (
             <div className="prose prose-invert max-w-none text-muted-foreground text-lg">
               {/* Render markdown here if needed, or just display text */}
               <p>{project.longDescription}</p>
             </div>
           ) : (
             <p className="text-muted-foreground text-lg">Further details about this project are coming soon.</p>
           )}
        </div>

        {/* Sidebar Info */} 
        <aside className="bg-card/30 border border-border rounded-md p-6 lg:p-8 h-fit">
          <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-3">Details</h3>
          
           {/* Technologies */}
          <div className="mb-5">
             <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Technologies Used</h4>
             <div className="flex flex-wrap gap-2">
               {project.technologies.map((tech) => (
                 <SkillBadge key={tech} name={tech} size="sm" />
               ))}
             </div>
           </div>

          {/* Links */}
          {(project.repoUrl || project.demoUrl) && (
             <div className="mb-5 pt-4 border-t border-border/50">
               <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Links</h4>
               <div className="space-y-2">
                 {project.repoUrl && (
                   <a
                     href={project.repoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                   >
                     <Github size={16} className="mr-2 flex-shrink-0" />
                     View Code on GitHub
                   </a>
                 )}
                 {project.demoUrl && (
                   <a
                     href={project.demoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                   >
                     <ExternalLink size={16} className="mr-2 flex-shrink-0" />
                     View Live Demo
                   </a>
                 )}
               </div>
             </div>
           )}
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail; 