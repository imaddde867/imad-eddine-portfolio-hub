import React from "react";
import { Calendar, Clock } from "lucide-react";
import SkillBadge from "./SkillBadge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail?: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  thumbnail,
  url,
}) => {
  return (
    <article className="bg-card rounded-md border border-border overflow-hidden subtle-hover flex flex-col h-full group">
      <a href={url} aria-label={`Read post: ${title}`} className="block">
        {thumbnail && (
          <div className="h-48 bg-muted/50 overflow-hidden">
            <img 
              src={thumbnail} 
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {!thumbnail && (
          <div className="h-48 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
            <span className="text-3xl font-bold text-accent font-heading opacity-50">{category.charAt(0)}</span>
          </div>
        )}
      </a>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <SkillBadge name={category} size="sm" />
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar size={14} className="mr-1.5" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <a href={url} aria-label={`Read post: ${title}`} className="block">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center text-muted-foreground text-xs mt-auto pt-3 border-t border-border/50">
          <Clock size={14} className="mr-1.5" />
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
