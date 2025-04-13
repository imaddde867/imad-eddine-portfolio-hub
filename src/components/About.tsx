
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
    <section id="about" className="section-padding bg-navy-50/50 dark:bg-navy-800/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">About Me</h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AI & Machine Learning Engineer with a passion for building intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl md:text-2xl font-bold text-navy-800 dark:text-white mb-4">
              Transforming Data into Intelligence
            </h3>
            <p className="text-navy-600 dark:text-navy-200 mb-4">
              I'm an AI & Machine Learning Engineer and Data Pipeline Architect specialized in AWS machine learning services, 
              predictive analytics, data architecture, and systems integration. Currently advancing my 
              expertise as a Data Engineering & AI Student at Turku University of Applied Sciences.
            </p>
            <p className="text-navy-600 dark:text-navy-200 mb-4">
              My work focuses on building AI systems that transform raw data into actionable business intelligence, 
              including developing enterprise-grade NLP and prediction systems. I'm the creator of NaviCast, 
              a maritime intelligence platform processing millions of vessel data points.
            </p>
            <p className="text-navy-600 dark:text-navy-200 mb-6">
              With professional fluency in English, French, and Arabic, plus basic Finnish skills, 
              I bring a global perspective to my technical work.
            </p>
            <a 
              href="#" 
              className="btn-primary inline-flex items-center"
            >
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="p-6 bg-white dark:bg-navy-900 shadow-lg rounded-lg border border-navy-100 dark:border-navy-700 relative">
              <Quote className="absolute -top-3 -left-3 text-github opacity-20 w-12 h-12" />
              <blockquote className="text-navy-700 dark:text-navy-100 text-lg italic relative z-10 pl-6 border-l-2 border-github">
                "In God we trust. All others must bring data."
              </blockquote>
              <div className="mt-4 flex justify-end text-navy-600 dark:text-navy-300">
                <p className="text-sm">- W. Edwards Deming</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-2">
          <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-6">Technical Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-900 p-6 rounded-lg shadow-sm border border-navy-100 dark:border-navy-700 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-medium text-navy-800 dark:text-white mb-4">AI & Predictive Analytics</h4>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} category="AI" />
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-navy-900 p-6 rounded-lg shadow-sm border border-navy-100 dark:border-navy-700 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-medium text-navy-800 dark:text-white mb-4">Data Engineering</h4>
              <div className="flex flex-wrap gap-2">
                {dataSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} category="Data" />
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-navy-900 p-6 rounded-lg shadow-sm border border-navy-100 dark:border-navy-700 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-medium text-navy-800 dark:text-white mb-4">Cloud Solutions</h4>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.map((skill) => (
                  <SkillBadge key={skill} name={skill} category="Cloud" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-200 dark:border-navy-700 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h4 className="text-navy-800 dark:text-white font-medium mb-3">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <SkillBadge key={lang} name={lang} category="Language" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
