import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Sample project data (replace with your actual projects)
const sampleProjects = [
  {
    title: "NaviCast Maritime Intelligence",
    description: "AI-powered platform processing millions of vessel data points for predictive analytics and anomaly detection in maritime routes.",
    technologies: ["Python", "AWS SageMaker", "TensorFlow", "ETL", "PostgreSQL", "React"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Recommendation Engine",
    description: "Developed a content recommendation system using collaborative filtering and NLP techniques to personalize user experience.",
    technologies: ["Python", "Scikit-learn", "NLTK", "Flask", "React"],
    repoUrl: "#",
  },
  {
    title: "Serverless Data Pipeline",
    description: "Architected and implemented a scalable, real-time data processing pipeline using AWS Lambda, Kinesis, and DynamoDB.",
    technologies: ["AWS Lambda", "Kinesis", "DynamoDB", "Serverless", "Python", "IaC"],
    repoUrl: "#",
  },
  {
    title: "Portfolio Website V2",
    description: "This very website! Built with React, TypeScript, Tailwind CSS, featuring a sleek dark mode and minimalist design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container-custom section-padding">
      <h1 className="section-title text-center mb-4">Projects</h1>
      <p className="section-subtitle text-center">
        A selection of my work in data science and development.
      </p>
      
      {/* Use ProjectCard in the grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {sampleProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects; 