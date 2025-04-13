
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  repoUrl,
  demoUrl,
  technologies,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-900 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-navy-100 dark:bg-navy-800 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-github/20 to-teal-500/20">
            <span className="text-2xl font-bold text-navy-500 dark:text-navy-300">{title.slice(0, 2)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-2">{title}</h3>
        <p className="text-navy-600 dark:text-navy-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} size="sm" />
          ))}
        </div>
        
        <div className="flex space-x-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 dark:text-navy-200 hover:text-github transition-colors duration-200 flex items-center text-sm"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 dark:text-navy-200 hover:text-github transition-colors duration-200 flex items-center text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
