import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { ProjectData } from "../data/sampleData";
import { useAdminStore } from "../data/adminStore";
import { Filter, ArrowDownUp, X, Layers, Code2, Database } from "lucide-react";

// Reusable components
const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <>
    <h1 className="section-title text-center mb-4">{title}</h1>
    <p className="section-subtitle text-center">{subtitle}</p>
  </>
);

const SearchBar: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <div className="relative w-full md:w-auto md:min-w-[260px] flex-grow md:flex-grow-0">
    <input
      type="text"
      placeholder="Search projects..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-card border border-border/50 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50"
    />
    {value && (
      <button 
        onClick={() => onChange("")}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent"
        aria-label="Clear search"
      >
        <X size={16} />
      </button>
    )}
  </div>
);

const FilterButton: React.FC<{
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  color?: "accent" | "secondary";
}> = ({ label, icon, isActive, onClick, color = "accent" }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-1.5 text-sm rounded-md transition-colors ${
      isActive
        ? `bg-${color} text-white`
        : "hover:bg-muted"
    }`}
  >
    {icon && <span className="mr-1.5">{icon}</span>}
    {label}
  </button>
);

const SortButton: React.FC<{
  order: 'newest' | 'oldest';
  onToggle: () => void;
}> = ({ order, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border/50 hover:bg-muted transition-colors"
    aria-label={`Sort by ${order === 'newest' ? 'oldest' : 'newest'} first`}
  >
    <ArrowDownUp size={14} />
    {order === 'newest' ? 'Newest' : 'Oldest'}
  </button>
);

const ResultsCount: React.FC<{
  count: number;
  filter: string;
  searchTerm: string;
}> = ({ count, filter, searchTerm }) => (
  <div className="mb-6 text-sm text-muted-foreground">
    Showing {count} {count === 1 ? 'project' : 'projects'}
    {filter !== "all" && <span> with <span className="text-accent">{filter}</span></span>}
    {searchTerm && <span> matching <span className="text-accent">"{searchTerm}"</span></span>}
  </div>
);

const EmptyState: React.FC<{
  onClearFilters: () => void;
}> = ({ onClearFilters }) => (
  <div className="text-center py-16 px-4">
    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
      <Filter className="h-10 w-10 text-muted-foreground" />
    </div>
    <h3 className="text-xl font-medium mb-2">No projects found</h3>
    <p className="text-muted-foreground max-w-md mx-auto mb-6">
      No projects match your current filters. Try adjusting your search or filters to find what you're looking for.
    </p>
    <button
      onClick={onClearFilters}
      className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
    >
      Clear all filters
    </button>
  </div>
);

const Projects: React.FC = () => {
  const { projects } = useAdminStore();
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
  const allTechnologies = useMemo(() => 
    Array.from(
      new Set(projects.flatMap(project => project.technologies))
    ).sort(),
    [projects]
  );

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
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
    
    return result;
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

  // Clear all filters
  const clearFilters = () => {
    setActiveFilter("all");
    setSearchTerm("");
  };

  return (
    <div className="container-custom section-padding">
      {/* Section header with consistent styling */}
      <SectionHeader 
        title="Portfolio" 
        subtitle="Delivering innovative solutions through data engineering and AI technologies" 
      />

      {/* Filtering, searching and sorting controls */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-start">
        {/* Search bar */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="flex items-center gap-2 flex-wrap">
          {/* Technology filters */}
          <div className="flex items-center bg-card rounded-lg border border-border/50 p-1">
            <FilterButton 
              label="All" 
              isActive={activeFilter === "all"} 
              onClick={() => setActiveFilter("all")} 
            />

            <FilterButton 
              label="Python" 
              icon={<Code2 size={14} />} 
              isActive={activeFilter === "Python"} 
              onClick={() => setActiveFilter("Python")} 
            />

            <FilterButton 
              label="ML" 
              icon={<Layers size={14} />} 
              isActive={activeFilter === "Machine Learning"} 
              onClick={() => setActiveFilter("Machine Learning")} 
              color="secondary"
            />

            <FilterButton 
              label="SQL" 
              icon={<Database size={14} />} 
              isActive={activeFilter === "PostgreSQL"} 
              onClick={() => setActiveFilter("PostgreSQL")} 
            />
          </div>

          {/* Sort order toggle */}
          <SortButton 
            order={sortOrder} 
            onToggle={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')} 
          />
        </div>
      </div>

      {/* Results count */}
      <ResultsCount 
        count={filteredProjects.length} 
        filter={activeFilter} 
        searchTerm={searchTerm} 
      />

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
        <EmptyState onClearFilters={clearFilters} />
      )}

      {/* Newsletter Subscription */}
      <div className="mt-16 max-w-2xl mx-auto">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

export default Projects;
