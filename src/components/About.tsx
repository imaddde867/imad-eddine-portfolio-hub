import React from "react";
import { Code2, Database, BrainCircuit, Layers, Award, GraduationCap, Terminal, LineChart, Briefcase, Server, GitBranch, BarChart, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-card/50 dark:bg-dark-bg-alt/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent border border-accent/20 rounded-full">About Me</span>
          <h2 className="section-title">Data Engineering & AI</h2>
          <p className="section-subtitle mx-auto">
            Transforming complex data challenges into elegant, intelligent solutions
          </p>
        </div>

        {/* Main content in clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="space-y-8">
            {/* Expertise card */}
            <div className="bento-card">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary dark:text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold">Areas of Focus</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Engineering focused - blue */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-accent/20 hover:border-accent/50 transition-colors duration-300">
                  <Database className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">Data Engineering</span>
                </div>
                {/* Analytics focused - purple */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-secondary/20 hover:border-secondary/50 transition-colors duration-300">
                  <BrainCircuit className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">Machine Learning</span>
                </div>
                {/* Engineering focused - blue */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-accent/20 hover:border-accent/50 transition-colors duration-300">
                  <Terminal className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">MLOps</span>
                </div>
                {/* Infrastructure focused - purple */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 dark:bg-muted/10 border border-secondary/20 hover:border-secondary/50 transition-colors duration-300">
                  <Layers className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">Cloud Architecture</span>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bento-card">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary/70">
                  <LineChart className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold">Technical Expertise</h3>
              </div>
              
              <div className="space-y-5">
                {/* Engineering/Infrastructure - blue */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary dark:shadow-neon-blue-glow/20">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-accent">Data & ML Engineering</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Apache Airflow, Spark, PySpark, ETL, TensorFlow, Scikit-learn
                    </p>
                  </div>
                </div>
                
                {/* Database/Storage - blue */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary dark:shadow-neon-blue-glow/20">
                    <Server className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-accent">Databases & Storage</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      PostgreSQL (PostGIS, Citus), MySQL, MongoDB, InfluxDB, Amazon S3
                    </p>
                  </div>
                </div>
                
                {/* Development/Programming - blue */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary dark:shadow-neon-blue-glow/20">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-accent">Development & APIs</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Python (Advanced), SQL, Django, Flask, FastAPI, REST APIs, requests
                    </p>
                  </div>
                </div>
                
                {/* Analysis/Visualization - purple */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-secondary/70 dark:shadow-neon-purple-glow/20">
                    <BarChart className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-secondary">Data Analysis & Visualization</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pandas, NumPy, Matplotlib, Seaborn, Plotly, Folium, Grafana
                    </p>
                  </div>
                </div>
                
                {/* Infrastructure/DevOps - purple */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-secondary/70 dark:shadow-neon-purple-glow/20">
                    <Layers className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-secondary">Messaging & DevOps</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      RabbitMQ, MQTT, Apache Pulsar, Docker, virtualenv, Conda, Git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Education card - purple for academic/learning */}
            <div className="bento-card">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/70">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-5">
                <div className="relative pl-5 border-l-2 border-secondary/50">
                  <div className="absolute w-3 h-3 rounded-full bg-secondary top-1 -left-[7px]"></div>
                  <h4 className="font-medium text-secondary">Bachelor of Engineering in ICT</h4>
                  <p className="text-sm text-muted-foreground">Turku University of Applied Sciences</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground">2023 - Present</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">In Progress</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Specialization: Data Engineering and AI</p>
                </div>
                
                <div className="relative pl-5 border-l-2 border-secondary/50">
                  <div className="absolute w-3 h-3 rounded-full bg-secondary top-1 -left-[7px]"></div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-secondary">AWS Certifications</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Cloud Foundations, ML Foundations, NLP</p>
                </div>
              </div>
            </div>
            
            {/* Work Experience Card - blue for professional/implementation */}
            <div className="bento-card">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary/70">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold">Experience</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative pl-5 border-l-2 border-accent/50">
                  <div className="absolute w-3 h-3 rounded-full bg-accent top-1 -left-[7px]"></div>
                  <h4 className="font-medium text-accent">Data Engineering Intern</h4>
                  <p className="text-sm text-muted-foreground">AIS Laboratory - TUAS</p>
                  <p className="text-xs text-muted-foreground mt-1">January 2025 - Present</p>
                  
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-sm font-medium text-accent">ISMO Water Data Pipeline Project</p>
                      <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                        <li>Architected an end-to-end data pipeline for real-time metrics</li>
                        <li>Reduced processing latency by 40% with optimized Telegraf</li>
                        <li>Developed Grafana dashboards with 99.9% system uptime</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-accent">TSIRP Research Data Platform</p>
                      <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                        <li>Developed microservices supporting 1000+ daily transactions</li>
                        <li>Optimized PostgreSQL with PostGIS and Citus extensions</li>
                        <li>Reduced response time by 60% with Apache Pulsar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completely redesigned process flow section */}
        <div className="glass-card p-10 mx-auto max-w-4xl backdrop-blur-md border border-border/30 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/3 to-secondary/3 opacity-30"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative">
            <h3 className="font-heading text-2xl font-bold mb-10 text-center">
              <span className="relative inline-block px-4">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">My Approach</span>
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></span>
              </span>
            </h3>
            
            {/* Simplified process steps with fixed-height containers but NO horizontal line */}
            <div className="md:flex md:justify-between md:items-start">
              {/* Step 1 */}
              <div className="text-center px-4 mb-12 md:mb-0 md:w-1/3">
                <div className="inline-flex mb-6 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 p-[3px] shadow-lg">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
                      <BrainCircuit className="h-10 w-10 text-secondary" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">1</span>
                    <h4 className="font-semibold text-lg text-secondary">Research</h4>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Exploring state-of-the-art techniques for each problem
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center px-4 mb-12 md:mb-0 md:w-1/3 relative">
                {/* Static connector lines (desktop only) removed */}
                
                <div className="inline-flex mb-6 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary p-[3px] shadow-lg">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
                      <Code2 className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent text-sm font-semibold">2</span>
                    <h4 className="font-semibold text-lg text-accent">Development</h4>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Iterative prototyping with continuous optimization
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center px-4 md:w-1/3">
                <div className="inline-flex mb-6 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 p-[3px] shadow-lg">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
                      <LineChart className="h-10 w-10 text-secondary" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">3</span>
                    <h4 className="font-semibold text-lg text-secondary">Deployment</h4>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Production-grade implementation with monitoring
                  </p>
                </div>
              </div>
            </div>
            
            {/* Main connector line (desktop only) - completely removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
