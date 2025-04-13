import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

// Placeholder component for blog post list item
const BlogPostListItem = ({ post }: { post: any }) => (
  <div className="p-4 bg-imadlab.deep-navy/40 backdrop-blur-sm rounded-lg border border-imadlab.neon-blue/20 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold text-white">{post.title}</h3>
      <p className="text-sm text-gray-400">
        Status: 
        <span className={`${post.status === 'Published' ? 'text-imadlab.neon-green' : 'text-yellow-400'}`}>
          {post.status}
        </span> 
        - Published: {post.date}
      </p>
    </div>
    <div className="flex gap-2">
      <Link 
        to={`/admin/blog/edit/${post.id}`} 
        className="px-3 py-1 rounded text-xs bg-imadlab.neon-blue/20 text-imadlab.neon-blue hover:bg-imadlab.neon-blue/40 transition-colors"
      >
        Edit
      </Link>
      <button 
        onClick={() => alert(`Delete post ${post.id}? Implement confirmation and undo!`)}
        className="px-3 py-1 rounded text-xs bg-red-500/20 text-red-400 hover:bg-red-500/40 transition-colors"
      >
        Delete
      </button>
    </div>
  </div>
);

const AdminBlogPage = () => {
  // Placeholder blog post data - replace with actual data fetched from backend
  const posts = [
    { id: 1, title: 'Scaling ML Models with AWS', date: '2024-07-25', status: 'Published' },
    { id: 2, title: 'Understanding Vector Databases', date: '2024-07-10', status: 'Published' },
    { id: 3, title: 'Intro to Explainable AI (XAI)', date: '2024-06-20', status: 'Draft' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-white">Manage Blog Posts</h1>
        <Link 
          to="/admin/blog/new"
          className="px-4 py-2 rounded-md bg-imadlab.neon-green text-imadlab.deep-navy font-bold uppercase tracking-wider text-sm hover:bg-opacity-90 hover:shadow-neon-green-glow transition-all duration-200 flex items-center gap-2"
        >
          <PlusCircle size={18} />
          Add New Post
        </Link>
      </div>

      {/* Blog Post List */}
      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <BlogPostListItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-10">No blog posts found. Add your first post!</p>
      )}
      
      {/* Placeholder for Add/Edit Form (likely a separate route/component) */}
    </div>
  );
};

export default AdminBlogPage; 