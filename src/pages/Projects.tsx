import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { sampleProjects, ProjectData } from '../data/sampleData'; // Import data and type

const Projects: React.FC = () => {
  return (
    <div className="container-custom section-padding">
      <h1 className="section-title text-center mb-4">Projects</h1>
      <p className="section-subtitle text-center">
        A selection of my work in data science and development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {sampleProjects.map((project: ProjectData) => ( // Ensure type safety
          <ProjectCard 
            key={project.slug} // Use slug as key
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