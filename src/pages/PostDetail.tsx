import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAdminStore } from "../data/adminStore";
import NotFound from "./NotFound"; // Import NotFound for handling invalid slugs
import SkillBadge from "../components/SkillBadge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useAdminStore();
  const post = posts.find((p) => p.slug === slug);

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
        <ArrowLeft
          size={16}
          className="mr-2 group-hover:-translate-x-1 transition-transform"
        />
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-12">
        <SkillBadge name={post.category} />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground my-4">
          {post.title}
        </h1>
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
          <img
            src={post.thumbnail}
            alt={`${post.title} thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Content Area - Enhanced with Markdown support */}
      <article className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
          components={{
            // Custom components for enhanced styling
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-foreground" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 text-foreground" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 text-foreground" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 text-muted-foreground" {...props} />,
            a: ({node, ...props}) => (
              <a
                className="text-accent hover:text-accent/80 underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            img: ({node, ...props}) => (
              <div className="my-6">
                <img
                  className="rounded-lg shadow-lg max-h-[500px] w-auto mx-auto"
                  {...props}
                  loading="lazy"
                />
              </div>
            ),
            code: ({node, inline, ...props}) => 
              inline ? (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
              ) : (
                <code className="block bg-muted p-4 rounded-lg overflow-x-auto" {...props} />
              ),
            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
            li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote
                className="border-l-4 border-accent pl-4 italic my-4 text-muted-foreground"
                {...props}
              />
            ),
            table: ({node, ...props}) => (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-border" {...props} />
              </div>
            ),
            th: ({node, ...props}) => (
              <th
                className="px-4 py-2 text-left font-semibold text-foreground bg-muted"
                {...props}
              />
            ),
            td: ({node, ...props}) => (
              <td className="px-4 py-2 border-t border-border" {...props} />
            ),
          }}
        >
          {post.content || 'Blog post content coming soon...'}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostDetail;
