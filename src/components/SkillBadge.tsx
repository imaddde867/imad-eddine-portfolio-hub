import React from "react";

interface SkillBadgeProps {
  name: string;
  size?: "sm" | "md";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, size = "md" }) => {
  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1";

  return (
    <span
      className={`
        inline-flex items-center rounded-full 
        border border-border 
        bg-muted/50 hover:bg-muted/80 
        text-muted-foreground 
        ${sizeClass} 
        font-medium 
        transition-colors duration-200
      `}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
