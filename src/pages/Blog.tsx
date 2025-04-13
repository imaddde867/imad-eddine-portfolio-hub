import React from 'react';
import BlogCard from '../components/BlogCard'; // Import BlogCard

// Define interface for Blog Post data structure
interface PostData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  thumbnail?: string; // Mark thumbnail as optional here
}

// Sample blog post data (replace with your actual posts)
// Apply the PostData interface to the array
const samplePosts: PostData[] = [
  {
    title: "Understanding Large Language Models (LLMs)",
    excerpt: "A deep dive into the architecture and capabilities of modern LLMs, exploring transformers, attention mechanisms, and their impact.",
    category: "AI",
    date: "2024-03-10",
    readTime: "8 min read",
    url: "#", // Add URL to actual post
    // thumbnail: "/path/to/llm-thumb.jpg" // Add image path if available (can be omitted)
  },
  {
    title: "Building Real-time Data Pipelines on AWS",
    excerpt: "A practical guide to designing and implementing scalable, real-time data pipelines using Kinesis, Lambda, and other AWS services.",
    category: "Cloud",
    date: "2024-02-25",
    readTime: "12 min read",
    url: "#",
  },
  {
    title: "Trajectory Forecasting for Maritime Navigation",
    excerpt: "Exploring advanced techniques for predicting vessel paths using historical AIS data and sequence models.",
    category: "Machine Learning",
    date: "2024-01-15",
    readTime: "10 min read",
    url: "#",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container-custom section-padding">
      <h1 className="section-title text-center mb-4">Blog</h1>
      <p className="section-subtitle text-center">
        Thoughts, tutorials, and insights on data science and tech.
      </p>
      
      {/* Use BlogCard for posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {samplePosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            date={post.date} // Format date as needed
            readTime={post.readTime}
            url={post.url}
            thumbnail={post.thumbnail} // Now TS knows thumbnail might exist
          />
        ))}
      </div>
       {/* Add Pagination or Load More button if needed */}
    </div>
  );
};

export default Blog; 