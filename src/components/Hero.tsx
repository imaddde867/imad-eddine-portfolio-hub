
import React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative"
    >
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-github/10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl" />
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-github font-medium mb-4">AI & Machine Learning Engineer</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              Imad Eddine <br /> EL MOUSS
            </h1>
            <p className="text-lg text-navy-600 dark:text-navy-200 mb-6 max-w-lg">
              Transforming raw data into actionable intelligence through 
              <span className="highlight"> predictive analytics</span>, 
              <span className="highlight"> machine learning</span>, and 
              <span className="highlight"> intelligent data pipelines</span>.
            </p>
            <div className="flex space-x-4 mb-8">
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
            <div className="text-navy-600 dark:text-navy-200 flex items-center">
              <div className="mr-4 text-sm font-medium">
                <span className="block mb-1">Current Role</span>
                <span className="text-navy-800 dark:text-white">Advanced Data Engineering & AI Student</span>
              </div>
              <div className="h-10 w-px bg-navy-200 dark:bg-navy-700 mx-2"></div>
              <div className="ml-2 text-sm font-medium">
                <span className="block mb-1">Specialization</span>
                <span className="text-navy-800 dark:text-white">AWS Machine Learning</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              {/* This would be where a profile photo goes */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-github to-teal-400 p-1">
                <div className="w-full h-full rounded-full bg-navy-50 dark:bg-navy-800 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl text-github">IE</div>
                </div>
              </div>
              <div className="absolute top-5 -right-4 bg-white dark:bg-navy-800 shadow-lg rounded-lg px-3 py-2 animate-wave">
                <span className="text-xl">👋</span>
              </div>
              <div className="absolute bottom-0 -left-4 bg-white dark:bg-navy-800 shadow-lg rounded-lg px-3 py-2">
                <span className="text-navy-800 dark:text-white font-medium text-sm">AWS ML Specialist</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-navy-600 dark:text-navy-300 text-sm mb-2">Explore my work</p>
          <a 
            href="#about" 
            className="w-8 h-8 rounded-full border border-navy-200 dark:border-navy-700 flex items-center justify-center text-navy-600 dark:text-navy-300 hover:border-github hover:text-github transition-colors duration-200"
          >
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
