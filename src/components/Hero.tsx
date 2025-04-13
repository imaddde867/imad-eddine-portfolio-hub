import React from "react";
import { ArrowDown, Code, Database, Terminal, Sparkles, BrainCircuit, Network, Cpu, LineChart } from "lucide-react";

// Reusable components
const HighlightText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="highlight ml-1 mr-1 group">
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </span>
  </span>
);

const TechBadge: React.FC<{
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  delay?: number;
}> = ({ icon, text, className = "", delay = 0 }) => (
  <div 
    className={`absolute bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float-smooth ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {text ? (
      <span className="px-4 py-2 text-foreground font-semibold text-sm dark:text-white">{text}</span>
    ) : (
      <div className="p-3">{icon}</div>
    )}
  </div>
);

const BackgroundEffects: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Static grid overlay */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')] bg-[length:40px_40px] opacity-[0.08]" />
    
    {/* Static mesh gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-20" />
    
    {/* Minimal floating particles */}
    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent/50 animate-float-smooth" style={{ animationDelay: '0s' }} />
    <div className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-secondary/50 animate-float-smooth" style={{ animationDelay: '5s' }} />
    <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-primary/40 animate-float-smooth" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-1/4 left-1/3 w-3.5 h-3.5 rounded-full bg-accent/40 animate-float-smooth" style={{ animationDelay: '7s' }} />
    
    {/* Additional particles */}
    <div className="absolute top-1/5 right-1/5 w-2 h-2 rounded-full bg-accent/40 animate-float-smooth" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-1/5 left-1/5 w-2.5 h-2.5 rounded-full bg-secondary/40 animate-float-smooth" style={{ animationDelay: '3s' }} />
    <div className="absolute top-3/4 left-1/2 w-3 h-3 rounded-full bg-primary/40 animate-float-smooth" style={{ animationDelay: '4s' }} />
    
    {/* Static glow accent */}
    <div className="absolute -left-32 top-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-30 blur-xl" />
    
    {/* Static radial gradient */}
    <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-40" />
    
    {/* Modern geometric shapes */}
    <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-primary/20 opacity-30 animate-pulse-slow" style={{ animationDuration: '8s' }} />
    <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full border border-secondary/20 opacity-30 animate-pulse-slow" style={{ animationDuration: '6s' }} />
    
    {/* Animated gradient orbs */}
    <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
    <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-3xl animate-float-slow" style={{ animationDelay: '6s' }} />
    
    {/* Subtle noise texture */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: '200px 200px'
    }} />
    
    {/* Animated lines */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-right" style={{ animationDuration: '15s' }} />
    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-slide-left" style={{ animationDuration: '12s' }} />
  </div>
);

// New reusable components
const TagLine: React.FC<{ text: string }> = ({ text }) => (
  <div className="inline-flex items-center rounded-full border border-border/30 bg-card/30 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground mb-6 group hover:border-accent/50 hover:text-accent transition-colors duration-300">
    <Sparkles className="h-3 w-3 text-accent mr-2" />
    <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
    {text}
  </div>
);

const GradientHeading: React.FC<{ firstLine: string; secondLine: string }> = ({ firstLine, secondLine }) => (
  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 font-display tracking-tight">
    <span className="block">{firstLine}</span>
    <span className="block mt-1 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{secondLine}</span>
  </h1>
);

const CTAButton: React.FC<{
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}> = ({ href, primary = true, children }) => (
  <a
    href={href}
    className={`relative overflow-hidden group px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
      primary 
        ? "bg-gradient-to-r from-primary/90 to-accent/90 text-white shadow-lg hover:shadow-accent/20" 
        : "bg-transparent border border-border/50 dark:border-border/30 shadow-sm hover:border-accent/50 hover:text-accent"
    }`}
  >
    <span className={`flex items-center gap-2 ${primary ? "relative z-10" : ""}`}>
      {children}
      <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
    </span>
    {primary && (
      <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    )}
  </a>
);

const ProfileAvatar: React.FC = () => (
  <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
    {/* Background glow effect */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-primary to-secondary opacity-60 dark:opacity-80 blur-xl"></div>
    </div>
    
    {/* Main circle */}
    <div className="absolute inset-0 rounded-full overflow-hidden">
      <div className="relative h-full w-full rounded-full bg-gradient-to-br from-card to-background p-1 dark:from-dark-card dark:to-dark-bg shadow-xl overflow-hidden">
        <div className="w-full h-full rounded-full bg-card dark:bg-dark-card flex items-center justify-center overflow-hidden border border-border/50">
          <span className="text-8xl font-bold text-accent/70 font-display dark:text-accent/90 dark:drop-shadow-[0_0_8px_rgba(64,196,255,0.5)]">
            IE
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ScrollIndicator: React.FC = () => (
  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
    <p className="text-muted-foreground text-xs mb-2 flex items-center gap-1">
      <Sparkles className="h-3 w-3 text-accent" />
      Scroll for more
    </p>
    <a
      href="#about"
      className="group w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
    >
      <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
    </a>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background dark:bg-dark-bg"
    >
      <BackgroundEffects />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,0.8fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Tag line */}
            <TagLine text="Data Engineering & AI Student" />
            
            {/* Main heading */}
            <GradientHeading firstLine="Imad Eddine" secondLine="EL MOUSS" />
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Results-driven Data Engineering & AI student with a focus on 
              <HighlightText>scalable data pipelines</HighlightText>,
              <HighlightText>machine learning</HighlightText>, and
              <HighlightText>big data solutions</HighlightText>.
            </p>
            
            {/* CTA buttons */}
            <div className="flex gap-5 mb-10">
              <CTAButton href="#projects">
                Projects
              </CTAButton>
              <CTAButton href="#blog" primary={false}>
                Blog
              </CTAButton>
            </div>
          </div>
          
          {/* Profile illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <ProfileAvatar />
              
              {/* Tech badges */}
              <TechBadge
                icon={<Code className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />}
                className="top-0 -right-4"
              />
              <TechBadge
                icon={<Database className="text-secondary h-6 w-6 dark:text-secondary dark:drop-shadow-[0_0_5px_rgba(190,75,255,0.5)]" />}
                className="-bottom-2 -left-6"
                delay={5}
              />
              <TechBadge
                icon={<Network className="text-secondary h-6 w-6 dark:text-secondary dark:drop-shadow-[0_0_5px_rgba(190,75,255,0.5)]" />}
                className="bottom-20 -right-8"
                delay={10}
              />
              <TechBadge
                icon={<Terminal className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />}
                className="top-16 -left-10"
                delay={7}
              />
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
