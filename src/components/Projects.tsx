
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Search } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "NaviCast",
      description: "Maritime Traffic Intelligence Platform with AI-powered trajectory prediction for real-time vessel tracking.",
      technologies: ["Python", "TensorFlow", "AWS", "Maritime Data"],
      repoUrl: "https://github.com/",
      demoUrl: "https://demo.com/",
    },
    {
      title: "ClearBox",
      description: "Secure E2E encrypted messaging platform with enterprise security standards.",
      technologies: ["React", "Node.js", "Cryptography", "WebSockets"],
      repoUrl: "https://github.com/",
    },
    {
      title: "Sisu-Speak",
      description: "AI-powered Finnish language tutor using NLP and speech recognition.",
      technologies: ["Python", "NLP", "Speech Recognition", "React"],
      repoUrl: "https://github.com/",
      demoUrl: "https://demo.com/",
    },
    {
      title: "Spotify Recommendation Engine",
      description: "Unsupervised learning system for music discovery and personalized recommendations.",
      technologies: ["Python", "Machine Learning", "Spotify API", "Clustering"],
      repoUrl: "https://github.com/",
    },
  ];

  const filters = [
    "All",
    "Python",
    "Machine Learning",
    "AWS",
    "React",
    "NLP",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = activeFilter === "All" || 
      project.technologies.some(tech => tech === activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title animate-fade-in">Featured Projects</h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Exploring the intersection of AI, data engineering, and real-world applications
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-github text-white"
                    : "bg-navy-100 text-navy-700 hover:bg-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:hover:bg-navy-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 focus:outline-none focus:ring-1 focus:ring-github"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="animate-fade-in" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-navy-600 dark:text-navy-300">No projects match your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
