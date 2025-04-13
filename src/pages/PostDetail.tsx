import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useAdminStore } from "../data/adminStore";
import NotFound from "./NotFound"; // Import NotFound for handling invalid slugs
import SkillBadge from "../components/SkillBadge";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import NewsletterSubscription from "../components/NewsletterSubscription";
import YouTubeEmbed from "../components/YouTubeEmbed";

// Extended sanitization schema to allow iframes for YouTube
const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div || []), ['className']],
    iframe: [
      ['className'],
      ['src'],
      ['title'],
      ['allow'],
      ['allowFullScreen'],
      ['width'],
      ['height'],
      ['style'],
    ],
  },
  tagNames: [...(defaultSchema.tagNames || []), 'iframe'],
};

// Helper function to extract YouTube video ID from various URL formats
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Reusable components
const BackLink: React.FC = () => (
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
);

const PostHeader: React.FC<{
  category: string;
  title: string;
  date: string;
  readTime: string;
}> = ({ category, title, date, readTime }) => (
      <header className="mb-12">
    <div className="flex items-center justify-between mb-4">
      <SkillBadge name={category} />
      <div className="flex items-center gap-3">
        <button 
          className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
          aria-label="Share post"
        >
          <Share2 size={18} />
        </button>
        <button 
          className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
          aria-label="Bookmark post"
        >
          <Bookmark size={18} />
        </button>
      </div>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
      {title}
        </h1>
        <div className="flex items-center text-muted-foreground text-sm space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
        <time dateTime={date}>{date}</time>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
        <span>{readTime}</span>
          </div>
        </div>
      </header>
);

const PostThumbnail: React.FC<{
  thumbnail: string;
  title: string;
}> = ({ thumbnail, title }) => (
  <div className="mb-12 rounded-xl overflow-hidden border border-border/30 shadow-lg aspect-video">
    <img
      src={thumbnail}
      alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
    />
  </div>
);

// Markdown components for ReactMarkdown
const markdownComponents = {
  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-foreground" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 text-foreground" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 text-foreground" {...props} />,
  p: ({node, children, ...props}) => {
    // Check if the paragraph contains a YouTube URL
    const content = children?.toString() || '';
    if (content.includes('youtube.com') || content.includes('youtu.be')) {
      const videoId = getYouTubeId(content);
      if (videoId) {
        return <YouTubeEmbed videoId={videoId} />;
      }
    }
    return <p className="mb-4 text-muted-foreground" {...props}>{children}</p>;
  },
  a: ({node, href, children, ...props}) => {
    // Check if the link is a YouTube URL
    if (href && (href.includes('youtube.com') || href.includes('youtu.be'))) {
      const videoId = getYouTubeId(href);
      if (videoId) {
        return <YouTubeEmbed videoId={videoId} title={children?.toString()} />;
      }
    }
    return (
      <a
        className="text-accent hover:text-accent/80 underline-offset-4 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  },
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
};

const PostContent: React.FC<{
  content: string;
}> = ({ content }) => (
  <article className="prose prose-invert prose-lg max-w-none">
    <div className="bg-card/70 backdrop-blur-lg rounded-xl p-6 lg:p-8 border-2 border-border/70 shadow-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, schema],
          rehypeHighlight
        ]}
        components={markdownComponents}
      >
        {content || 'Blog post content coming soon...'}
      </ReactMarkdown>
    </div>
  </article>
);

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useAdminStore();
  
  // Memoize the post lookup to prevent unnecessary re-renders
  const post = useMemo(() => 
    posts.find((p) => p.slug === slug),
    [posts, slug]
  );

  // Handle case where post with the slug is not found
  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="container-custom section-padding">
      <BackLink />
      
      {/* Post Header */}
      <header className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <SkillBadge name={post.category} />
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
              aria-label="Share post"
            >
              <Share2 size={18} />
            </button>
            <button 
              className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
              aria-label="Bookmark post"
            >
              <Bookmark size={18} />
            </button>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
      
      {/* Thumbnail and Details Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Thumbnail */}
        <div className="lg:col-span-2">
          {post.thumbnail && (
            <div className="rounded-xl overflow-hidden border border-border/30 shadow-lg aspect-video">
              <img
                src={post.thumbnail}
                alt={`${post.title} thumbnail`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        
        {/* Post Details Sidebar */}
        <aside className="bg-card/70 backdrop-blur-lg rounded-xl p-6 lg:p-8 h-fit shadow-lg border-2 border-border/70">
          <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
            About This Post
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                Category
              </h4>
              <SkillBadge name={post.category} />
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                Published
              </h4>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar size={16} className="mr-2 flex-shrink-0" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                Read Time
              </h4>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock size={16} className="mr-2 flex-shrink-0" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      {/* Main Content Area - Full Width */}
      <div className="space-y-8">
        <PostContent content={post.content} />
        
        {/* Newsletter subscription at the bottom of the post */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
