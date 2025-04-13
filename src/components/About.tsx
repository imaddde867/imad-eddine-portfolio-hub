import React from "react";
import { Code2, Database, BrainCircuit, Layers, Award, GraduationCap, Terminal, LineChart, GitBranch } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-card/50 dark:bg-dark-bg-alt/50">
      {/* Enhanced background features */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-20" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-20" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
        <div className="absolute -left-40 top-1/3 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute -right-40 bottom-1/3 w-80 h-80 rounded-full bg-neon-violet/5 blur-3xl animate-float opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header with animated elements */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent border border-accent/20 rounded-full animate-fade-in">About ImadLab</span>
          <h2 className="section-title animate-fade-in">The Innovation Lab</h2>
          <p className="section-subtitle animate-fade-in mx-auto" style={{ animationDelay: "0.1s" }}>
            Where cutting-edge AI research meets practical applications for transforming complex data challenges into elegant, intelligent solutions.
          </p>
        </div>

        {/* Enhanced bento grid layout with better visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Experience card with glowing border - now spans 2 columns */}
          <div className="bento-card col-span-1 lg:col-span-2 animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 dark:shadow-neon-blue-glow/20">
                  <Award className="h-5 w-5 text-primary dark:text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold">Research & Innovation</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                ImadLab focuses on developing cutting-edge AI solutions across multiple domains, with 5+ years of research experience spanning advanced predictive modeling, computer vision, natural language processing, and machine learning optimization for real-world deployment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-border/40 dark:border-border/20 hover:-translate-y-1 transition-transform duration-300">
                  <Database className="h-5 w-5 text-accent flex-shrink-0 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
                  <span className="font-medium">Data Engineering</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-border/40 dark:border-border/20 hover:-translate-y-1 transition-transform duration-300">
                  <BrainCircuit className="h-5 w-5 text-accent flex-shrink-0 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
                  <span className="font-medium">Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-border/40 dark:border-border/20 hover:-translate-y-1 transition-transform duration-300">
                  <Terminal className="h-5 w-5 text-accent flex-shrink-0 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
                  <span className="font-medium">MLOps & DevOps</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-border/40 dark:border-border/20 hover:-translate-y-1 transition-transform duration-300">
                  <Layers className="h-5 w-5 text-accent flex-shrink-0 dark:text-accent dark:drop-shadow-[0_0_5px_rgba(64,196,255,0.5)]" />
                  <span className="font-medium">Cloud Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise area card */}
          <div className="bento-card col-span-1 lg:col-span-2 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 dark:bg-secondary/20 dark:shadow-neon-purple-glow/20">
                <LineChart className="h-5 w-5 text-secondary dark:text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold">Core Expertise</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-accent dark:text-accent" />
                    <span className="text-base font-medium">Advanced Machine Learning</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">Expert</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
                <p className="text-sm text-muted-foreground ml-6">Deep neural networks, ensemble methods, transfer learning</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-accent dark:text-accent" />
                    <span className="text-base font-medium">Predictive Analytics</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">Expert</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
                <p className="text-sm text-muted-foreground ml-6">Time series forecasting, anomaly detection, regression models</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-accent dark:text-accent" />
                    <span className="text-base font-medium">Cloud-Native Solutions</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">Advanced</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-accent to-secondary dark:shadow-neon-blue-glow"></div>
                </div>
                <p className="text-sm text-muted-foreground ml-6">AWS ML stack, serverless architectures, containerization</p>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20 dark:shadow-neon-blue-glow/20">
                <GraduationCap className="h-5 w-5 text-accent dark:text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold">Academic Background</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-accent/30 dark:border-accent/50 dark:shadow-neon-blue-glow/10">
                <div className="absolute w-4 h-4 rounded-full bg-accent top-0 -left-[9px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-semibold text-lg">AWS Machine Learning Specialization</h4>
                <p className="text-muted-foreground">
                  Advanced certification focusing on cloud-based ML solutions and deployment
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-medium text-muted-foreground">2023 - Present</span>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">In Progress</span>
                </div>
              </div>
              
              <div className="relative pl-6 border-l-2 border-accent/30 dark:border-accent/50 dark:shadow-neon-blue-glow/10">
                <div className="absolute w-4 h-4 rounded-full bg-accent top-0 -left-[9px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-semibold text-lg">MSc in Data Science</h4>
                <p className="text-muted-foreground">
                  University of Turku, Finland
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-medium text-muted-foreground">2021 - 2023</span>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-500 dark:text-green-400">Completed</span>
                </div>
              </div>
              
              <div className="relative pl-6 border-l-2 border-accent/30 dark:border-accent/50 dark:shadow-neon-blue-glow/10">
                <div className="absolute w-4 h-4 rounded-full bg-accent top-0 -left-[9px] dark:shadow-neon-blue-glow"></div>
                <h4 className="font-semibold text-lg">BSc in Computer Science</h4>
                <p className="text-muted-foreground">
                  University of Morocco
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-medium text-muted-foreground">2017 - 2021</span>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-500 dark:text-green-400">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core values card */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 animate-fade-in-scale" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 dark:shadow-neon-blue-glow/20">
                <Database className="h-5 w-5 text-primary dark:text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold">Our Core Values</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary dark:shadow-neon-blue-glow">
                  <BrainCircuit className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Innovation-Driven</h4>
                  <p className="text-muted-foreground text-sm">
                    Constantly pursuing novel approaches to push the boundaries of what's possible with AI technologies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-primary to-secondary dark:shadow-neon-blue-glow">
                  <Database className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Research Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    Committed to methodological rigor and evidence-based approaches in all our AI development work
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent/80 dark:shadow-neon-purple-glow">
                  <Layers className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Real-World Impact</h4>
                  <p className="text-muted-foreground text-sm">
                    Focusing on practical applications that solve meaningful problems and create tangible value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature section */}
        <div className="glass-card p-8 mx-auto max-w-5xl backdrop-blur-md border border-border/30 dark:border-border/10 animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
          <h3 className="font-heading text-2xl font-bold mb-8 text-center group">
            <span className="inline-block relative">
              ImadLab 
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent dark:shadow-neon-blue-glow animate-pulse"></span>
            </span>
            <span className="text-accent dark:text-accent"> Methodology</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full border border-accent/20 opacity-40 animate-morph"></div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary p-0.5 dark:shadow-neon-blue-glow/50 mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center dark:bg-dark-card">
                    <BrainCircuit className="h-8 w-8 text-accent group-hover:text-accent/80 transition-all duration-300" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Research</h4>
                <p className="text-muted-foreground text-sm">
                  In-depth exploration of state-of-the-art techniques and comprehensive problem analysis
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full border border-accent/20 opacity-40 animate-morph" style={{ animationDelay: "1s" }}></div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-primary to-secondary p-0.5 dark:shadow-neon-blue-glow/50 mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center dark:bg-dark-card">
                    <Code2 className="h-8 w-8 text-accent group-hover:text-accent/80 transition-all duration-300" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Development</h4>
                <p className="text-muted-foreground text-sm">
                  Iterative prototyping with continuous optimization and cutting-edge engineering practices
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full border border-accent/20 opacity-40 animate-morph" style={{ animationDelay: "2s" }}></div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent p-0.5 dark:shadow-neon-purple-glow/50 mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center dark:bg-dark-card">
                    <LineChart className="h-8 w-8 text-secondary group-hover:text-secondary/80 transition-all duration-300" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Deployment</h4>
                <p className="text-muted-foreground text-sm">
                  Production-grade implementation with robust monitoring and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
