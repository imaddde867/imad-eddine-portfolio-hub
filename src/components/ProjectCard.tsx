import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SkillBadge from "./SkillBadge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  image,
  repoUrl,
  demoUrl,
  technologies,
}) => {
  const linkTo = `/projects/${slug}`;

  return (
    <Link to={linkTo} className="block h-full group" aria-label={`View project: ${title}`}>
      <div className="bg-card rounded-md border border-border overflow-hidden subtle-hover brutalist-padding flex flex-col h-full group-hover:border-accent/50 transition-colors duration-300">
        <div className="relative overflow-hidden h-48 mb-4">
          {image && (
            <div className="absolute inset-0 bg-muted/50">
              <img src={image} alt={`${title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          )}
          {!image && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent font-heading opacity-50">{title.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <div className="p-0 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
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
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm font-medium z-10 relative"
                onClick={(e) => e.stopPropagation()}
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
                className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm font-medium z-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} className="mr-1.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
