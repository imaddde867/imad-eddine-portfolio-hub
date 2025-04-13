import React from "react";
import BlogCard from "../components/BlogCard";
import { samplePosts, PostData } from "../data/sampleData"; // Import data and type

const Blog: React.FC = () => {
  return (
    <div className="container-custom section-padding">
      <h1 className="section-title text-center mb-4">Blog</h1>
      <p className="section-subtitle mb-12">
        Thoughts, tutorials, and insights on data science and tech.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {samplePosts.map(
          (
            post: PostData, // Ensure type safety
          ) => (
            <BlogCard
              key={post.slug} // Use slug as key
              slug={post.slug} // Pass slug prop
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              url={post.url} // Keep original URL if needed, or remove if link is always to detail page
              thumbnail={post.thumbnail}
            />
          ),
        )}
      </div>
      {/* Add Pagination or Load More button if needed */}
    </div>
  );
};

export default Blog;
