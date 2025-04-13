
import React from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-navy-800 text-white">
      <div className="container-custom">
        <div className="flex justify-between items-center border-b border-navy-700 pb-6 mb-6">
          <div className="text-xl font-bold flex items-center">
            <span className="text-github mr-1">{"<"}</span>
            <span>Imad Eddine</span>
            <span className="text-github ml-1">{"/>"}</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-github transition-colors duration-200"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <p className="text-navy-300 text-sm">
              AI & Machine Learning Engineer and Data Pipeline Architect with expertise in AWS, predictive analytics, and systems integration.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-navy-300">
              <li><a href="#home" className="hover:text-github transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-github transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="hover:text-github transition-colors duration-200">Projects</a></li>
              <li><a href="#blog" className="hover:text-github transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-github transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-navy-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-github" />
                <a 
                  href="mailto:contact@imadelmouss.com" 
                  className="hover:text-github transition-colors duration-200"
                >
                  contact@imadelmouss.com
                </a>
              </li>
              <li>
                <p>Turku, Finland</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-github transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-github transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@imadelmouss.com"
                className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-github transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-navy-400 text-sm pt-6 border-t border-navy-700">
          <p>© {new Date().getFullYear()} Imad Eddine EL MOUSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
