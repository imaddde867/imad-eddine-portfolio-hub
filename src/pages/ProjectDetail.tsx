import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectData } from "../data/sampleData"; // Import only the type
import { useAdminStore } from "../data/adminStore"; // Import the admin store
import NotFound from "./NotFound"; // Import NotFound for handling invalid slugs
import SkillBadge from "../components/SkillBadge";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Get projects from the admin store instead of the static sample data
  const { projects } = useAdminStore();
  const project = projects.find((p) => p.slug === slug);

  // Handle case where project with the slug is not found
  if (!project) {
    return <NotFound />;
  }

  // Add a cache-busting parameter to prevent browser caching of updated images
  const imageSrc = useMemo(() => {
    if (!project?.image) return null;
    // If it's a data URL or an absolute URL with http(s), return as is
    if (project.image.startsWith('data:') || project.image.startsWith('http')) {
      return project.image;
    }
    // For relative URLs, add a cache-busting parameter with a version key
    const version = new Date().getTime();
    return `${project.image}?v=${version}`;
  }, [project?.image, project?._lastUpdated]); // Add _lastUpdated to dependencies

  return (
    <div className="container-custom section-padding">
      {/* Back Link */}
      <Link
        to="/projects"
        className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group"
      >
        <ArrowLeft
          size={16}
          className="mr-2 group-hover:-translate-x-1 transition-transform"
        />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <SkillBadge key={tech} name={tech} size="sm" />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {imageSrc && (
            <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg border border-border/30">
              <img
                src={imageSrc}
                alt={`${project.title} preview`}
                className="w-full h-auto object-cover"
                key={imageSrc} // Add key to force re-render when image changes
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card/90 backdrop-blur-sm p-2 rounded-full text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card/90 backdrop-blur-sm p-2 rounded-full text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border/30">
              Project Overview
            </h2>
            {/* Display long description if available, otherwise fallback or hide */}
            {project.longDescription ? (
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-border/50 shadow-md">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
                  components={{
                    // Custom components for enhanced styling
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-foreground" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 text-foreground" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 text-foreground" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 text-muted-foreground" {...props} />,
                    a: ({node, ...props}) => (
                      <a
                        className="text-accent hover:text-accent/80 underline-offset-4 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    img: ({node, ...props}) => (
                      <div className="my-6">
                        <img
                          className="rounded-lg shadow-lg max-h-[500px] w-auto mx-auto"
                          {...props}
                          loading="lazy"
                        />
                      </div>
                    ),
                    code: ({node, inline, ...props}) => 
                      inline ? (
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
                      ) : (
                        <code className="block bg-muted p-4 rounded-lg overflow-x-auto" {...props} />
                      ),
                    ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote
                        className="border-l-4 border-accent pl-4 italic my-4 text-muted-foreground"
                        {...props}
                      />
                    ),
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full divide-y divide-border" {...props} />
                      </div>
                    ),
                    th: ({node, ...props}) => (
                      <th
                        className="px-4 py-2 text-left font-semibold text-foreground bg-muted"
                        {...props}
                      />
                    ),
                    td: ({node, ...props}) => (
                      <td className="px-4 py-2 border-t border-border" {...props} />
                    ),
                  }}
                >
                  {project.longDescription}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-border/50 shadow-md">
                <p className="text-muted-foreground text-lg">
                  Further details about this project are coming soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <aside className="bg-card/30 border border-border rounded-xl p-6 lg:p-8 h-fit shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
            Project Details
          </h3>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <SkillBadge key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.repoUrl || project.demoUrl) && (
            <div className="mb-6 pt-4 border-t border-border/50">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                Links
              </h4>
              <div className="space-y-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors text-sm font-medium bg-muted/30 p-3 rounded-lg hover:bg-muted/50"
                  >
                    <Github size={18} className="mr-3 flex-shrink-0" />
                    View Code on GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors text-sm font-medium bg-muted/30 p-3 rounded-lg hover:bg-muted/50"
                  >
                    <ExternalLink size={18} className="mr-3 flex-shrink-0" />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Info */}
          <div className="pt-4 border-t border-border/50">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
              Project Info
            </h4>
            <div className="space-y-3">
              {project.date && (
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span>Completed: {project.date}</span>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
