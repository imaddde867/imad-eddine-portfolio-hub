
import React from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title animate-fade-in">Get in Touch</h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Let's collaborate on your next AI or data engineering project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-4">
              Contact Information
            </h3>
            <p className="text-navy-600 dark:text-navy-300 mb-6">
              Whether you're looking for an AI consultant, need help with your data architecture, 
              or just want to connect, feel free to reach out using the form or through any of my social channels.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="text-github mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-navy-800 dark:text-white">Email</h4>
                  <a 
                    href="mailto:contact@imadelmouss.com" 
                    className="text-navy-600 dark:text-navy-300 hover:text-github transition-colors duration-200"
                  >
                    contact@imadelmouss.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-github mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-navy-800 dark:text-white">Location</h4>
                  <p className="text-navy-600 dark:text-navy-300">Turku, Finland</p>
                </div>
              </div>
            </div>

            <h4 className="font-medium text-navy-800 dark:text-white mb-3">Connect with me</h4>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-700 dark:text-navy-300 hover:bg-github hover:text-white transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-700 dark:text-navy-300 hover:bg-github hover:text-white transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form className="bg-white dark:bg-navy-900 p-6 rounded-lg shadow-md border border-navy-100 dark:border-navy-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-github"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-github"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1">
                  Subject
                </label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-github"
                >
                  <option value="">Select a subject</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-github"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-github text-white py-3 rounded-md hover:bg-github/90 transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
