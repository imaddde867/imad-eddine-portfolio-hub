import React from "react";
import { Calendar, Clock } from "lucide-react";
import SkillBadge from "./SkillBadge";
import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail?: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  thumbnail,
  url,
}) => {
  const linkTo = `/blog/${slug}`;

  return (
    <article className="bg-card rounded-md border border-border overflow-hidden subtle-hover flex flex-col h-full group">
      <Link to={linkTo} aria-label={`Read post: ${title}`} className="block">
        <div className="relative overflow-hidden h-48">
          {thumbnail && (
            <div className="absolute inset-0 bg-muted/50">
              <img 
                src={thumbnail} 
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          {!thumbnail && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent font-heading opacity-50">{category.charAt(0)}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <SkillBadge name={category} size="sm" />
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar size={14} className="mr-1.5" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <Link to={linkTo} aria-label={`Read post: ${title}`} className="block mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-muted-foreground text-xs mt-auto pt-3 border-t border-border/50">
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" />
            <span>{readTime}</span>
          </div>
          <Link to={linkTo} className="font-medium text-accent hover:underline underline-offset-2">
            Read More &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
