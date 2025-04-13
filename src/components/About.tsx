import React from "react";
import { Code2, Database, BrainCircuit, Layers, Award, GraduationCap, Terminal, LineChart, Briefcase, Server, GitBranch, BarChart, ArrowRight } from "lucide-react";

// Reusable components
const SectionHeader: React.FC<{
  badge: string;
  title: string;
  subtitle: string;
}> = ({ badge, title, subtitle }) => (
  <div className="text-center mb-16 max-w-2xl mx-auto">
    <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent border border-accent/20 rounded-full">{badge}</span>
    <h2 className="section-title">{title}</h2>
    <p className="section-subtitle mx-auto">{subtitle}</p>
  </div>
);

const BentoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  iconBg?: string;
  children: React.ReactNode;
}> = ({ icon, title, iconBg = "bg-primary/10", children }) => (
  <div className="bento-card">
    <div className="inline-flex items-center gap-2 mb-6">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold">{title}</h3>
    </div>
    {children}
  </div>
);

const SkillItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "accent" | "secondary";
}> = ({ icon, title, description, color }) => (
  <div className="flex items-start gap-3">
    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-${color} to-${color === "accent" ? "primary" : "secondary"}/70 dark:shadow-neon-${color === "accent" ? "blue" : "purple"}-glow/20`}>
      {icon}
    </div>
    <div>
      <h4 className={`font-medium text-sm text-${color}`}>{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  </div>
);

const TimelineItem: React.FC<{
  title: string;
  subtitle: string;
  date: string;
  status?: string;
  description?: string;
  color: "accent" | "secondary";
  children?: React.ReactNode;
}> = ({ title, subtitle, date, status, description, color, children }) => (
  <div className={`relative pl-5 border-l-2 border-${color}/50`}>
    <div className={`absolute w-3 h-3 rounded-full bg-${color} top-1 -left-[7px]`}></div>
    <h4 className={`font-medium text-${color}`}>{title}</h4>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
    <div className="flex items-center gap-2 mt-1">
      <p className="text-xs text-muted-foreground">{date}</p>
      {status && (
        <span className={`text-xs px-2 py-0.5 rounded-full bg-${color}/10 text-${color}`}>{status}</span>
      )}
    </div>
    {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
    {children}
  </div>
);

const ProcessStep: React.FC<{
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "accent" | "secondary";
}> = ({ number, title, description, icon, color }) => (
  <div className="text-center px-4 mb-12 md:mb-0 md:w-1/3">
    <div className="inline-flex mb-6 transform transition-transform hover:scale-105 duration-300">
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${color} to-${color === "accent" ? "primary" : "secondary"}/70 p-[3px] shadow-lg`}>
        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center relative overflow-hidden">
          {icon}
        </div>
      </div>
    </div>
    
    <div>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-${color}/10 text-${color} text-sm font-semibold`}>{number}</span>
        <h4 className={`font-semibold text-lg text-${color}`}>{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs mx-auto">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-card/50 dark:bg-dark-bg-alt/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader 
          badge="About Me" 
          title="Data Engineering & AI" 
          subtitle="Transforming complex data challenges into elegant, intelligent solutions" 
        />

        {/* Main content in clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="space-y-8">
            {/* Expertise card */}
            <BentoCard 
              icon={<Award className="h-5 w-5 text-primary dark:text-accent" />} 
              title="Areas of Focus"
            >
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
            </BentoCard>

            {/* Technical Expertise */}
            <BentoCard 
              icon={<LineChart className="h-5 w-5 text-white" />} 
              title="Technical Expertise"
              iconBg="bg-gradient-to-br from-accent to-primary/70"
            >
              <div className="space-y-5">
                <SkillItem 
                  icon={<Database className="h-4 w-4 text-white" />}
                  title="Data & ML Engineering"
                  description="Apache Airflow, Spark, PySpark, ETL, TensorFlow, Scikit-learn"
                  color="accent"
                />
                
                <SkillItem 
                  icon={<Server className="h-4 w-4 text-white" />}
                  title="Databases & Storage"
                  description="PostgreSQL (PostGIS, Citus), MySQL, MongoDB, InfluxDB, Amazon S3"
                  color="accent"
                />
                
                <SkillItem 
                  icon={<Code2 className="h-4 w-4 text-white" />}
                  title="Development & APIs"
                  description="Python (Advanced), SQL, Django, Flask, FastAPI, REST APIs, requests"
                  color="accent"
                />
                
                <SkillItem 
                  icon={<BarChart className="h-4 w-4 text-white" />}
                  title="Data Analysis & Visualization"
                  description="Pandas, NumPy, Matplotlib, Seaborn, Plotly, Folium, Grafana"
                  color="secondary"
                />
                
                <SkillItem 
                  icon={<Layers className="h-4 w-4 text-white" />}
                  title="Messaging & DevOps"
                  description="RabbitMQ, MQTT, Apache Pulsar, Docker, virtualenv, Conda, Git"
                  color="secondary"
                />
              </div>
            </BentoCard>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Education card - purple for academic/learning */}
            <BentoCard 
              icon={<GraduationCap className="h-5 w-5 text-white" />} 
              title="Education"
              iconBg="bg-gradient-to-br from-secondary to-secondary/70"
            >
              <div className="space-y-5">
                <TimelineItem 
                  title="Bachelor of Engineering in ICT"
                  subtitle="Turku University of Applied Sciences"
                  date="2023 - Present"
                  status="In Progress"
                  description="Specialization: Data Engineering and AI"
                  color="secondary"
                />
                
                <TimelineItem 
                  title="AWS Certifications"
                  subtitle=""
                  date=""
                  description="Cloud Foundations, ML Foundations, NLP"
                  color="secondary"
                />
              </div>
            </BentoCard>
            
            {/* Work Experience Card - blue for professional/implementation */}
            <BentoCard 
              icon={<Briefcase className="h-5 w-5 text-white" />} 
              title="Experience"
              iconBg="bg-gradient-to-br from-accent to-primary/70"
            >
              <div className="space-y-4">
                <TimelineItem 
                  title="Data Engineering Intern"
                  subtitle="AIS Laboratory - TUAS"
                  date="January 2025 - Present"
                  color="accent"
                >
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
                </TimelineItem>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
