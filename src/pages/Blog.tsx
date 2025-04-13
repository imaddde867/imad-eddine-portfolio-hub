import React, { useMemo } from "react";
import BlogCard from "../components/BlogCard";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { samplePosts, PostData } from "../data/sampleData"; // Import data and type

// Reusable components
const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <>
    <h1 className="section-title text-center mb-4">{title}</h1>
    <p className="section-subtitle mb-12">{subtitle}</p>
  </>
);

const BlogGrid: React.FC<{
  posts: PostData[];
}> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
    {posts.map((post: PostData) => (
      <BlogCard
        key={post.slug}
        slug={post.slug}
        title={post.title}
        excerpt={post.excerpt}
        category={post.category}
        date={post.date}
        readTime={post.readTime}
        url={post.url}
        thumbnail={post.thumbnail}
      />
    ))}
  </div>
);

const Blog: React.FC = () => {
  // Memoize the posts to prevent unnecessary re-renders
  const posts = useMemo(() => samplePosts, []);

  return (
    <div className="container-custom section-padding">
      <SectionHeader 
        title="Blog" 
        subtitle="Thoughts, tutorials, and insights on data science and tech." 
      />

      <BlogGrid posts={posts} />

      {/* Newsletter Subscription */}
      <div className="mt-16 max-w-2xl mx-auto">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

export default Blog;
