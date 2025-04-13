import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { ProjectData } from "../data/sampleData";
import { useAdminStore } from "../data/adminStore";
import { Filter, ArrowDownUp, X, Layers, Code2, Database } from "lucide-react";

const Projects: React.FC = () => {
  const { projects } = useAdminStore();
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [refreshKey, setRefreshKey] = useState(0);

  // Force periodic refresh to catch image updates
  useEffect(() => {
    // Refresh the component on initial load and every 2 seconds
    const interval = setInterval(() => {
      setRefreshKey(prevKey => prevKey + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Get all unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on active filter and search term
  useEffect(() => {
    let result = [...projects];
    
    // Filter by technology if not "all"
    if (activeFilter !== "all") {
      result = result.filter(project => 
        project.technologies.includes(activeFilter)
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    // Sort by date
    result = result.sort((a, b) => {
      const dateA = new Date(a.date || "2000-01-01");
      const dateB = new Date(b.date || "2000-01-01");
      return sortOrder === 'newest' 
        ? dateB.getTime() - dateA.getTime() 
        : dateA.getTime() - dateB.getTime();
    });
    
    setFilteredProjects(result);
  }, [projects, activeFilter, searchTerm, sortOrder, refreshKey]);

  // Group technologies into categories (simplified example)
  const techCategories = {
    "Programming": ["Python", "React", "JavaScript", "TypeScript"],
    "Data": ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy", "Pandas", "NumPy"],
    "AI/ML": ["Machine Learning", "AI", "NLP", "Clustering Algorithms", "Random Forest"],
  };

  // Find category for a technology
  const getTechCategory = (tech: string) => {
    for (const [category, techs] of Object.entries(techCategories)) {
      if (techs.includes(tech)) return category;
    }
    return "Other";
  };

  return (
    <div className="container-custom section-padding">
      {/* Section header with consistent styling */}
      <h1 className="section-title text-center mb-4">Portfolio</h1>
      <p className="section-subtitle text-center">
        Delivering innovative solutions through data engineering and AI technologies
      </p>

      {/* Filtering, searching and sorting controls */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-start">
        {/* Search bar */}
        <div className="relative w-full md:w-auto md:min-w-[260px] flex-grow md:flex-grow-0">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-card border border-border/50 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Technology filters */}
          <div className="flex items-center bg-card rounded-lg border border-border/50 p-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === "all"
                  ? "bg-accent text-white"
                  : "hover:bg-muted"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setActiveFilter("Python")}
              className={`flex items-center px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === "Python"
                  ? "bg-accent text-white"
                  : "hover:bg-muted"
              }`}
            >
              <Code2 className="mr-1.5" size={14} />
              Python
            </button>

            <button
              onClick={() => setActiveFilter("Machine Learning")}
              className={`flex items-center px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === "Machine Learning"
                  ? "bg-secondary text-white"
                  : "hover:bg-muted"
              }`}
            >
              <Layers className="mr-1.5" size={14} />
              ML
            </button>

            <button
              onClick={() => setActiveFilter("PostgreSQL")}
              className={`flex items-center px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === "PostgreSQL"
                  ? "bg-accent text-white"
                  : "hover:bg-muted"
              }`}
            >
              <Database className="mr-1.5" size={14} />
              SQL
            </button>
          </div>

          {/* Sort order toggle */}
          <button
            onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border/50 hover:bg-muted transition-colors"
            aria-label={`Sort by ${sortOrder === 'newest' ? 'oldest' : 'newest'} first`}
          >
            <ArrowDownUp size={14} />
            {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
          </button>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        {activeFilter !== "all" && <span> with <span className="text-accent">{activeFilter}</span></span>}
        {searchTerm && <span> matching <span className="text-accent">"{searchTerm}"</span></span>}
      </div>

      {/* Project grid with improved spacing and responsive design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project: ProjectData) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
            image={project.image}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
            <Filter className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            No projects match your current filters. Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchTerm("");
            }}
            className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="mt-16 max-w-2xl mx-auto">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

export default Projects;
