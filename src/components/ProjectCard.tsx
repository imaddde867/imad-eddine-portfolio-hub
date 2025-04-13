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
    <div className="bg-card rounded-md border border-border overflow-hidden subtle-hover brutalist-padding flex flex-col h-full">
      {image && (
        <div className="h-48 bg-muted/50 overflow-hidden">
          <img src={image} alt={`${title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      {!image && (
        <div className="h-48 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
          <span className="text-3xl font-bold text-accent font-heading opacity-50">{title.charAt(0)}</span>
        </div>
      )}
      
      <div className={`p-6 flex-grow flex flex-col ${!image ? 'pt-6' : ''}`}>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} size="sm" />
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto pt-4 border-t border-border/50">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View code for ${title}`}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm font-medium"
            >
              <Github size={16} className="mr-1.5" />
              Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${title}`}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm font-medium"
            >
              <ExternalLink size={16} className="mr-1.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
