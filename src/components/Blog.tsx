
import React from "react";
import BlogCard from "./BlogCard";
import { ChevronRight, Mail } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable ML Pipelines with AWS SageMaker",
      excerpt: "Learn how to design and implement production-grade machine learning pipelines that can scale to handle millions of data points while maintaining high accuracy.",
      category: "Machine Learning",
      date: "Apr 10, 2025",
      readTime: "8 min",
      url: "#",
    },
    {
      title: "Maritime Data Analysis: From AIS Signals to Actionable Insights",
      excerpt: "How we transformed millions of vessel position data points into a predictive system that helps maritime operators make data-driven decisions.",
      category: "Data Engineering",
      date: "Mar 28, 2025",
      readTime: "6 min",
      url: "#",
    },
    {
      title: "Demystifying Transformer Models for Natural Language Processing",
      excerpt: "A practical explainer on how transformer-based language models work under the hood, with code examples to help you understand the key concepts.",
      category: "AI",
      date: "Mar 15, 2025",
      readTime: "10 min",
      url: "#",
    },
    {
      title: "Infrastructure as Code: Managing ML Environments with Terraform",
      excerpt: "Learn how to use Infrastructure as Code principles to create reproducible, version-controlled machine learning environments on AWS.",
      category: "Cloud",
      date: "Feb 22, 2025",
      readTime: "7 min",
      url: "#",
    },
  ];

  const categories = [
    "All",
    "AI",
    "Machine Learning",
    "Data Engineering",
    "Cloud",
    "Tutorial",
  ];

  return (
    <section id="blog" className="section-padding bg-navy-50/50 dark:bg-navy-800/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title animate-fade-in">Technical Blog</h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Insights and tutorials on AI, machine learning, and data engineering
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                category === "All"
                  ? "bg-github text-white"
                  : "bg-navy-100 text-navy-700 hover:bg-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:hover:bg-navy-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <div 
              key={post.title}
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center text-github hover:text-github/80 transition-colors duration-200 font-medium"
          >
            View all articles
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="mt-20 py-10 px-6 md:px-12 bg-white dark:bg-navy-900 rounded-lg shadow-md border border-navy-100 dark:border-navy-700 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold text-navy-800 dark:text-white mb-3">
                Subscribe to my newsletter
              </h3>
              <p className="text-navy-600 dark:text-navy-300 mb-2">
                Get the latest articles and insights on AI, machine learning, and data engineering delivered straight to your inbox.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-l-md border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-github"
                />
                <button className="bg-github text-white px-4 py-3 rounded-r-md hover:bg-github/90 transition-colors duration-200 flex items-center">
                  <Mail size={16} className="mr-2" />
                  Subscribe
                </button>
              </div>
              <p className="text-navy-500 dark:text-navy-400 text-xs mt-2">
                I'll never spam you. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
