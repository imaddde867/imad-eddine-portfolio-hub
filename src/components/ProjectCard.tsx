import React, { useMemo } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
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
  date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  image,
  repoUrl,
  demoUrl,
  technologies,
  date,
}) => {
  const linkTo = `/projects/${slug}`;
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  }) : null;

  // Take the first 3 technologies to display visibly, the rest will be in a +X format
  const visibleTechnologies = technologies.slice(0, 3);
  const remainingCount = technologies.length - 3;
  
  // Add a cache-busting parameter to prevent browser caching of updated images
  const imageSrc = useMemo(() => {
    if (!image) return null;
    // If it's a data URL or an absolute URL with http(s), return as is
    if (image.startsWith('data:') || image.startsWith('http')) {
      return image;
    }
    // For relative URLs, add a cache-busting parameter with a version key
    const version = new Date().getTime();
    return `${image}?v=${version}`;
  }, [image]); // Remove project._lastUpdated since it's not available

  return (
    <Link
      to={linkTo}
      className="block h-full group"
      aria-label={`View project: ${title}`}
    >
      <div className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group-hover:border-accent/50 group-hover:translate-y-[-4px]">
        {/* Image section with overlay gradient and improved hover effect */}
        <div className="relative overflow-hidden h-56">
          {imageSrc ? (
            <div className="relative w-full h-full">
              <img
                src={imageSrc}
                alt={`${title} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                key={imageSrc}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent font-heading">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Floating date badge with improved contrast */}
          {formattedDate && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-background/95 backdrop-blur-sm dark:bg-background/95 rounded-full border border-border text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Calendar size={12} className="text-accent" />
              <span className="text-foreground">{formattedDate}</span>
            </div>
          )}
        </div>

        <div className="p-5 flex-grow flex flex-col bg-background/95 dark:bg-background/95">
          {/* Primary technologies - small badges at the top */}
          <div className="flex gap-2 mb-3">
            {visibleTechnologies.map((tech) => (
              <SkillBadge key={tech} name={tech} size="sm" />
            ))}
            {remainingCount > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground inline-flex items-center">
                +{remainingCount}
              </span>
            )}
          </div>

          {/* Title with gradient hover effect */}
          <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-accent line-clamp-2">
            {title}
          </h3>

          {/* Description with height limit */}
          <p className="text-muted-foreground text-sm mb-5 flex-grow line-clamp-3">
            {description}
          </p>

          {/* Action buttons with improved styling */}
          <div className="flex space-x-4 mt-auto pt-4 border-t border-border/30 dark:border-dark-border/30">
            {/* View Details */}
            <span className="text-accent hover:text-accent/90 transition-colors duration-200 flex items-center text-sm font-medium relative">
              View Details
              <span className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
            </span>

            {/* External links */}
            <div className="ml-auto flex gap-4">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${title}`}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} className="opacity-75 group-hover:opacity-100" />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo for ${title}`}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="opacity-75 group-hover:opacity-100" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
