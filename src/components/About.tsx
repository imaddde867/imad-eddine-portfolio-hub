import React from "react";
import SkillBadge from "./SkillBadge";
import { FileDown, Quote } from "lucide-react";

const About = () => {
  const aiSkills = [
    "Large Language Models",
    "Trajectory Forecasting",
    "Recommendation Engines",
    "Natural Language Processing",
    "TensorFlow",
    "PyTorch",
  ];

  const dataSkills = [
    "ETL Pipelines",
    "Real-time Processing",
    "Data Lake Design",
    "PostgreSQL",
    "SQL",
    "Python",
  ];

  const cloudSkills = [
    "AWS ML Stack",
    "Serverless Architecture",
    "Infrastructure as Code",
    "Docker",
    "CI/CD",
  ];

  const languages = ["English", "French", "Arabic", "Finnish (Basic)"];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">About Me</h2>
          <p
            className="section-subtitle animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            AI & Machine Learning Engineer passionate about building intelligent
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
          <div
            className="lg:col-span-3 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Transforming Data into Intelligence
            </h3>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                I'm an AI & Machine Learning Engineer and Data Pipeline
                Architect specialized in
                <span className="highlight">
                  {" "}
                  AWS machine learning services
                </span>
                ,<span className="highlight"> predictive analytics</span>,
                <span className="highlight"> data architecture</span>, and
                systems integration. Currently advancing my expertise as a Data
                Engineering & AI Student at Turku University of Applied
                Sciences.
              </p>
              <p>
                My work focuses on building AI systems that transform raw data
                into actionable business intelligence, including developing
                enterprise-grade NLP and prediction systems. I'm the creator of{" "}
                <span className="text-foreground font-medium">NaviCast</span>, a
                maritime intelligence platform processing millions of vessel
                data points.
              </p>
              <p>
                With professional fluency in{" "}
                <span className="text-foreground font-medium">
                  English, French,
                </span>{" "}
                and <span className="text-foreground font-medium">Arabic</span>,
                plus basic Finnish skills, I bring a global perspective to my
                technical work.
              </p>
            </div>
            <a href="#" className="btn-primary inline-flex items-center mt-8">
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          <div
            className="lg:col-span-2 lg:sticky lg:top-24 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="gradient-border">
              <div className="gradient-border-content relative brutalist-padding">
                <Quote
                  className="absolute top-4 left-4 text-accent opacity-10 w-16 h-16"
                  strokeWidth={1.5}
                />
                <blockquote className="text-foreground text-xl italic relative z-10 pl-5 border-l-2 border-accent">
                  "In God we trust. All others must bring data."
                </blockquote>
                <div className="mt-4 flex justify-end text-muted-foreground">
                  <p className="text-sm">- W. Edwards Deming</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "AI & Predictive Analytics",
                skills: aiSkills,
                delay: "0.1s",
              },
              { title: "Data Engineering", skills: dataSkills, delay: "0.2s" },
              { title: "Cloud Solutions", skills: cloudSkills, delay: "0.3s" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-md border border-border subtle-hover animate-fade-in"
                style={{ animationDelay: category.delay }}
              >
                <h4 className="font-semibold text-foreground mb-4 text-lg">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Languages
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <SkillBadge key={lang} name={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
