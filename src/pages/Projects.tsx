import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectData } from "../data/sampleData"; // Import only the type
import { useAdminStore } from "../data/adminStore"; // Import the admin store

const Projects: React.FC = () => {
  // Get projects from the admin store instead of the static sample data
  const { projects } = useAdminStore();

  return (
    <div className="container-custom section-padding">
      <h1 className="section-title text-center mb-4">Projects</h1>
      <p className="section-subtitle text-center">
        A selection of my work in data science and development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project: ProjectData) => (
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
    </div>
  );
};

export default Projects;
