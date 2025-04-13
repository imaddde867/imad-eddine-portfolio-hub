import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { samplePosts, PostData } from '../data/sampleData';
import NotFound from './NotFound'; // Import NotFound for handling invalid slugs
import SkillBadge from '../components/SkillBadge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = samplePosts.find((p) => p.slug === slug);

  // Handle case where post with the slug is not found
  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container-custom section-padding max-w-4xl mx-auto">
       {/* Back Link */}
      <Link 
        to="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-12">
        <SkillBadge name={post.category} />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground my-4">{post.title}</h1>
        <div className="flex items-center text-muted-foreground text-sm space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Optional Thumbnail */} 
      {post.thumbnail && (
        <div className="mb-12 rounded-md overflow-hidden border border-border shadow-md aspect-video">
          <img src={post.thumbnail} alt={`${post.title} thumbnail`} className="w-full h-full object-cover" />
        </div>
      )}

       {/* Post Content Area - Style using prose classes */}
      <article className="prose prose-invert lg:prose-xl max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-accent prose-li:marker:text-accent">
         {/* Render markdown here if 'content' is markdown, or just display text */}
        {post.content ? (
           <p>{post.content}</p> // Replace with markdown renderer if needed
         ) : (
           <p>Blog post content coming soon...</p>
         )}
      </article>
    </div>
  );
};

export default PostDetail; 