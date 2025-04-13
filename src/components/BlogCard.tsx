
import React from "react";
import { Calendar, Clock } from "lucide-react";

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
  const getCategoryColor = (category: string) => {
    const categories: Record<string, string> = {
      "AI": "bg-purple-100 text-purple-800",
      "Machine Learning": "bg-blue-100 text-blue-800",
      "Data Engineering": "bg-green-100 text-green-800",
      "Cloud": "bg-cyan-100 text-cyan-800",
      "Tutorial": "bg-amber-100 text-amber-800",
    };
    
    return categories[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="group">
      <a href={url} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-700">
        <div className="h-48 bg-navy-100 dark:bg-navy-800 overflow-hidden">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-github/20 to-teal-500/20">
              <span className="text-2xl font-bold text-navy-500 dark:text-navy-300">{title.slice(0, 2)}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
              {category}
            </span>
            <div className="flex items-center text-navy-500 dark:text-navy-400 text-xs">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-navy-800 dark:text-white mb-2 group-hover:text-github transition-colors duration-200">
            {title}
          </h3>
          <p className="text-navy-600 dark:text-navy-300 text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center text-navy-500 dark:text-navy-400 text-xs">
            <Clock size={14} className="mr-1" />
            <span>{readTime} read</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
