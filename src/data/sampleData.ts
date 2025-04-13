// Define interfaces for our data structures

export interface ProjectData {
  slug: string; // URL-friendly identifier
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string; // Optional preview image
  longDescription?: string; // Optional longer description for detail page
  date?: string; // Publication/creation date
}

export interface PostData {
  slug: string; // URL-friendly identifier
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  url: string; // Keep this? Or generate from slug?
  thumbnail?: string;
  content?: string; // Placeholder for full blog content
}

// Sample project data (replace with your actual projects)
export const sampleProjects: ProjectData[] = [
  {
    slug: "navicast-maritime-intelligence",
    title: "NaviCast Maritime Intelligence",
    description: "AI-powered platform processing millions of vessel data points for predictive analytics and anomaly detection in maritime routes.",
    technologies: ["Python", "AWS SageMaker", "TensorFlow", "ETL", "PostgreSQL", "React"],
    repoUrl: "#", // Add repo URL
    demoUrl: "#", // Add demo URL
    // image: "/path/to/navicast-image.jpg" // Add image path if available
    longDescription: "Detailed description about NaviCast...",
    date: "2024-05-15"
  },
  {
    slug: "recommendation-engine",
    title: "Recommendation Engine",
    description: "Developed a content recommendation system using collaborative filtering and NLP techniques to personalize user experience.",
    technologies: ["Python", "Scikit-learn", "NLTK", "Flask", "React"],
    repoUrl: "#",
    longDescription: "More details about the recommendation engine...",
    date: "2024-04-10"
  },
  {
    slug: "serverless-data-pipeline",
    title: "Serverless Data Pipeline",
    description: "Architected and implemented a scalable, real-time data processing pipeline using AWS Lambda, Kinesis, and DynamoDB.",
    technologies: ["AWS Lambda", "Kinesis", "DynamoDB", "Serverless", "Python", "IaC"],
    repoUrl: "#",
    longDescription: "In-depth explanation of the serverless pipeline...",
    date: "2024-03-05"
  },
  {
    slug: "portfolio-website-v2",
    title: "Portfolio Website V2",
    description: "This very website! Built with React, TypeScript, Tailwind CSS, featuring a sleek dark mode and minimalist design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "#", // Add link to this repo
    longDescription: "Details about the portfolio build process...",
    date: "2024-02-20"
  },
];

// Sample blog post data (replace with your actual posts)
export const samplePosts: PostData[] = [
  {
    slug: "understanding-large-language-models",
    title: "Understanding Large Language Models (LLMs)",
    excerpt: "A deep dive into the architecture and capabilities of modern LLMs, exploring transformers, attention mechanisms, and their impact.",
    category: "AI",
    date: "2024-03-10",
    readTime: "8 min read",
    url: "#",
    // thumbnail: "/path/to/llm-thumb.jpg"
    content: "Full blog post content about LLMs goes here..."
  },
  {
    slug: "building-real-time-data-pipelines-aws",
    title: "Building Real-time Data Pipelines on AWS",
    excerpt: "A practical guide to designing and implementing scalable, real-time data pipelines using Kinesis, Lambda, and other AWS services.",
    category: "Cloud",
    date: "2024-02-25",
    readTime: "12 min read",
    url: "#",
    content: "Full blog post content about AWS pipelines goes here..."
  },
  {
    slug: "trajectory-forecasting-maritime-navigation",
    title: "Trajectory Forecasting for Maritime Navigation",
    excerpt: "Exploring advanced techniques for predicting vessel paths using historical AIS data and sequence models.",
    category: "Machine Learning",
    date: "2024-01-15",
    readTime: "10 min read",
    url: "#",
    content: "Full blog post content about trajectory forecasting goes here..."
  },
]; 