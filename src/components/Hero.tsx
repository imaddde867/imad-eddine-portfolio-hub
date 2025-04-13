import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center py-24 md:py-32 overflow-hidden relative bg-gradient-to-br from-background to-card"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl opacity-50 animate-pulse" />
      <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-2000" />
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-accent font-semibold mb-4 text-lg">
              AI & Machine Learning Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 text-foreground font-heading">
              Imad Eddine <br /> EL MOUSS
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Transforming raw data into actionable intelligence through 
              <span className="highlight"> predictive analytics</span>, 
              <span className="highlight"> machine learning</span>, and 
              <span className="highlight"> intelligent data pipelines</span>.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline flex items-center"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </div>
            <div className="text-muted-foreground text-sm">
              <span className="block mb-1">Currently:</span>
              <span className="text-foreground font-medium">Advanced Data Engineering & AI Student @ AWS ML Specialization</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-72 h-72 sm:w-96 sm:h-96 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-secondary opacity-50 group-hover:opacity-70 transition-opacity duration-300 blur-lg"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card to-background p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <span className="text-8xl font-bold text-accent font-heading">IE</span>
                </div>
              </div>
              <div className="absolute top-10 -right-8 bg-card shadow-lg rounded-lg p-3 animate-wave border border-border/50">
                <span className="text-2xl">👋</span>
              </div>
              <div className="absolute bottom-10 -left-8 bg-card shadow-lg rounded-lg px-4 py-2 border border-border/50">
                <span className="text-foreground font-semibold text-sm">AWS ML</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-muted-foreground text-xs mb-2">Scroll</p>
          <a 
            href="#about" 
            className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-300 animate-bounce"
            style={{ animationDuration: '1.5s' }}
          >
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
