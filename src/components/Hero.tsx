import React from "react";
import { ArrowDown, Code, Database, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background dark:bg-dark-bg dark:bg-dark-mesh bg-size-200%"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-1/3 right-[10%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-float opacity-40" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-neon-grid bg-[length:40px_40px] opacity-[0.03]" />
        
        {/* Glow accents */}
        <div className="absolute -left-32 top-1/4 w-64 h-1 bg-neon-glow-blue opacity-20 blur-xl" />
        <div className="absolute -right-32 top-2/3 w-64 h-1 bg-neon-glow-purple opacity-20 blur-xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,0.8fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-scale">
            {/* Small tag line */}
            <div className="inline-flex items-center rounded-full border border-border/30 bg-card/30 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Data Engineering & AI Student
            </div>
            
            {/* Main heading with gradient accents */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 font-display tracking-tight">
              <span className="block">Imad Eddine</span>
              <span className="block mt-1 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">EL MOUSS</span>
            </h1>
            
            {/* Description with highlight animations */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Results-driven Data Engineering & AI student with a focus on 
              <span className="highlight ml-1 mr-1">scalable data pipelines</span>,
              <span className="highlight ml-1 mr-1">machine learning</span>, and
              <span className="highlight ml-1">big data solutions</span> at TUAS.
            </p>
            
            {/* Improved CTA buttons */}
            <div className="flex gap-5 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="relative overflow-hidden group px-8 py-3 bg-gradient-to-r from-primary/90 to-accent/90 rounded-full text-white font-medium shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <span className="relative z-10">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#blog"
                className="relative overflow-hidden group px-8 py-3 bg-transparent border border-border/50 dark:border-border/30 rounded-full font-medium shadow-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                <span>Blog</span>
              </a>
            </div>
          </div>
          
          {/* Right side with profile illustration and floating tech badges */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Main profile blob - FIXED to maintain circular shape during animation */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative group animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700 blur-xl overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-primary to-secondary opacity-60 dark:opacity-80 animate-pulse"></div>
                </div>
                
                {/* Main circle with strict border-radius enforcement */}
                <div className="absolute inset-0 rounded-[50%] overflow-hidden">
                  <div className="relative h-full w-full rounded-[50%] bg-gradient-to-br from-card to-background p-1 dark:from-dark-card dark:to-dark-bg shadow-xl overflow-hidden">
                    <div className="w-full h-full rounded-[50%] bg-card dark:bg-dark-card flex items-center justify-center overflow-hidden border border-border/50">
                      <span className="text-8xl font-bold text-accent/70 font-display dark:text-accent/90 dark:drop-shadow-[0_0_8px_rgba(64,196,255,0.5)]">
                        IE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute top-0 -right-4 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 animate-float border border-border/50 dark:border-accent/20 backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                <Code className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
              </div>
              
              <div className="absolute -bottom-2 -left-6 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 animate-float border border-border/50 dark:border-accent/20 backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
                <Database className="text-secondary h-6 w-6 dark:text-secondary dark:drop-shadow-[0_0_5px_rgba(190,75,255,0.5)]" />
              </div>
              
              <div className="absolute bottom-20 -right-8 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl px-4 py-2 border border-border/50 dark:border-accent/20 backdrop-blur-sm animate-float" style={{ animationDelay: '0.7s' }}>
                <span className="text-foreground font-semibold text-sm dark:text-white">
                  Python & SQL
                </span>
              </div>
              
              <div className="absolute top-16 -left-10 bg-card shadow-lg dark:shadow-neon-blue-glow/20 rounded-xl p-3 animate-float border border-border/50 dark:border-accent/20 backdrop-blur-sm" style={{ animationDelay: '1.2s' }}>
                <Terminal className="text-primary h-6 w-6 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - moved further down */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-muted-foreground text-xs mb-2">Scroll for more</p>
          <a
            href="#about"
            className="group w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
          >
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
