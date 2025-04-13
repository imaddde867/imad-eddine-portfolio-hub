
import React from "react";

interface SkillBadgeProps {
  name: string;
  category?: "AI" | "Data" | "Cloud" | "Language" | "Tool";
  size?: "sm" | "md" | "lg";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  category = "Tool",
  size = "md"
}) => {
  const getCategoryColor = () => {
    switch (category) {
      case "AI":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Data":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Cloud":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "Language":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "text-xs px-2 py-1";
      case "lg":
        return "text-base px-4 py-2";
      default:
        return "text-sm px-3 py-1";
    }
  };

  return (
    <span className={`inline-flex items-center rounded-full border ${getCategoryColor()} ${getSizeClass()} font-medium`}>
      {name}
    </span>
  );
};

export default SkillBadge;
