import React from "react";
import { ArrowDown, Code, Database, Terminal, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background dark:bg-dark-bg"
    >
      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single static grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')] bg-[length:40px_40px] opacity-[0.03]" />
        
        {/* Static mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-10" />
        
        {/* Minimal floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/30 animate-float-slow" style={{ animationDuration: '15s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-secondary/30 animate-float-slow" style={{ animationDuration: '15s', animationDelay: '5s' }} />
        
        {/* Static glow accents */}
        <div className="absolute -left-32 top-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-20 blur-xl" />
        <div className="absolute -right-32 top-2/3 w-64 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-20 blur-xl" />
        
        {/* Single static radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,0.8fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Modern tag line */}
            <div className="inline-flex items-center rounded-full border border-border/30 bg-card/30 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground mb-6 group hover:border-accent/50 hover:text-accent transition-colors duration-300">
              <Sparkles className="h-3 w-3 text-accent mr-2" />
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Data Engineering & AI Student
            </div>
            
            {/* Modern main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 font-display tracking-tight">
              <span className="block">Imad Eddine</span>
              <span className="block mt-1 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">EL MOUSS</span>
            </h1>
            
            {/* Modern description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Results-driven Data Engineering & AI student with a focus on 
              <span className="highlight ml-1 mr-1 group">
                <span className="relative">
                  scalable data pipelines
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </span>,
              <span className="highlight ml-1 mr-1 group">
                <span className="relative">
                  machine learning
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </span>, and
              <span className="highlight ml-1 group">
                <span className="relative">
                  big data solutions
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </span>.
            </p>
            
            {/* Modern CTA buttons */}
            <div className="flex gap-5 mb-10">
              <a
                href="#projects"
                className="relative overflow-hidden group px-8 py-3 bg-gradient-to-r from-primary/90 to-accent/90 rounded-full text-white font-medium shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Projects
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#blog"
                className="relative overflow-hidden group px-8 py-3 bg-transparent border border-border/50 dark:border-border/30 rounded-full font-medium shadow-sm hover:border-accent/50 hover:text-accent transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Blog
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
          
          {/* Modern right side with profile illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Modern main profile blob */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative group">
                {/* Modern background glow effect */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-primary to-secondary opacity-60 dark:opacity-80 blur-xl" style={{ borderRadius: '50%' }}></div>
                </div>
                
                {/* Modern main circle */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="relative h-full w-full rounded-full bg-gradient-to-br from-card to-background p-1 dark:from-dark-card dark:to-dark-bg shadow-xl overflow-hidden group-hover:shadow-accent/20 transition-shadow duration-300">
                    <div className="w-full h-full rounded-full bg-card dark:bg-dark-card flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-accent/50 transition-colors duration-300">
                      <span className="text-8xl font-bold text-accent/70 font-display dark:text-accent/90 dark:drop-shadow-[0_0_8px_rgba(64,196,255,0.5)]">
                        IE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Optimized floating tech badges */}
              <div 
                className="absolute top-0 -right-4 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float-slow" 
                style={{ animationDuration: '15s' }}
              >
                <Code className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
              </div>
              
              <div 
                className="absolute -bottom-2 -left-6 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float-slow" 
                style={{ animationDuration: '15s', animationDelay: '5s' }}
              >
                <Database className="text-secondary h-6 w-6 dark:text-secondary dark:drop-shadow-[0_0_5px_rgba(190,75,255,0.5)]" />
              </div>
              
              <div 
                className="absolute bottom-20 -right-8 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl px-4 py-2 border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float-slow" 
                style={{ animationDuration: '15s', animationDelay: '10s' }}
              >
                <span className="text-foreground font-semibold text-sm dark:text-white">
                  Python & SQL
                </span>
              </div>
              
              <div 
                className="absolute top-16 -left-10 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float-slow" 
                style={{ animationDuration: '15s', animationDelay: '7s' }}
              >
                <Terminal className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Modern scroll indicator */}
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
      </div>
    </section>
  );
};

export default Hero;
