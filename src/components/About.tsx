import React from "react";
import { Code2, Database, BrainCircuit, Layers, Award, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-card/50 dark:bg-dark-bg-alt/50">
      {/* Subtle background features */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="section-title animate-fade-in">About Me</h2>
          <p className="section-subtitle animate-fade-in mx-auto" style={{ animationDelay: "0.1s" }}>
            A specialized AI and machine learning engineer with a passion for 
            transforming complex problems into elegant data-driven solutions.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Experience card with glowing border */}
          <div className="bento-card row-span-1 col-span-1 lg:col-span-2 animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Award className="h-4 w-4 text-primary dark:text-accent" />
                </div>
                <h3 className="font-heading text-xl font-medium">Experience & Expertise</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Specializing in advanced AI solutions with 4+ years of hands-on experience spanning predictive modeling, 
                natural language processing, and machine learning deployment. My approach combines technical excellence 
                with business acumen to deliver real-world impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-muted/30">
                  <Database className="h-4 w-4 text-accent dark:text-accent flex-shrink-0" />
                  <span className="text-sm">Data Engineering</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-muted/30">
                  <BrainCircuit className="h-4 w-4 text-accent dark:text-accent flex-shrink-0" />
                  <span className="text-sm">Machine Learning</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-muted/30">
                  <Code2 className="h-4 w-4 text-accent dark:text-accent flex-shrink-0" />
                  <span className="text-sm">MLOps & DevOps</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 dark:bg-muted/30">
                  <Layers className="h-4 w-4 text-accent dark:text-accent flex-shrink-0" />
                  <span className="text-sm">Cloud Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills showcase */}
          <div className="bento-card col-span-1 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 dark:bg-secondary/20">
                <Code2 className="h-4 w-4 text-secondary dark:text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-medium">Technical Skills</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Machine Learning</span>
                  <span className="text-xs text-muted-foreground">Expert</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Python</span>
                  <span className="text-xs text-muted-foreground">Expert</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Deep Learning</span>
                  <span className="text-xs text-muted-foreground">Advanced</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">AWS</span>
                  <span className="text-xs text-muted-foreground">Advanced</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Visualization</span>
                  <span className="text-xs text-muted-foreground">Advanced</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-1 animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20">
                <GraduationCap className="h-4 w-4 text-accent dark:text-accent" />
              </div>
              <h3 className="font-heading text-xl font-medium">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative pl-6 border-l border-border dark:border-border/50">
                <div className="absolute w-3 h-3 rounded-full bg-accent top-1 -left-[7px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-medium">AWS Machine Learning Specialization</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced certification focusing on cloud-based ML solutions and deployment
                </p>
                <span className="text-xs text-muted-foreground">2023 - Present</span>
              </div>
              
              <div className="relative pl-6 border-l border-border dark:border-border/50">
                <div className="absolute w-3 h-3 rounded-full bg-accent top-1 -left-[7px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-medium">MSc in Data Science</h4>
                <p className="text-sm text-muted-foreground">
                  University of Turku, Finland
                </p>
                <span className="text-xs text-muted-foreground">2021 - 2023</span>
              </div>
              
              <div className="relative pl-6 border-l border-border dark:border-border/50">
                <div className="absolute w-3 h-3 rounded-full bg-accent top-1 -left-[7px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-medium">BSc in Computer Science</h4>
                <p className="text-sm text-muted-foreground">
                  University of Morocco
                </p>
                <span className="text-xs text-muted-foreground">2017 - 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal approach section */}
        <div className="glass-card p-8 mx-auto max-w-4xl backdrop-blur-md animate-fade-in-scale" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-heading text-2xl font-medium mb-6 text-center">My Approach to AI & Data</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary mx-auto flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-medium text-lg mb-2">Innovative</h4>
              <p className="text-muted-foreground text-sm">
                Pushing boundaries with creative solutions that go beyond conventional approaches
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent via-primary to-secondary mx-auto flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-medium text-lg mb-2">Reliable</h4>
              <p className="text-muted-foreground text-sm">
                Building robust, production-ready systems with a focus on scalability and performance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent/80 mx-auto flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-medium text-lg mb-2">Impact-Driven</h4>
              <p className="text-muted-foreground text-sm">
                Creating solutions that deliver measurable value and meaningful real-world impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
