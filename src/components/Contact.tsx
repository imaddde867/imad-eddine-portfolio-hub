import React from "react";
import { Mail, Github, Linkedin, MapPin, Send, ExternalLink, MessageSquare } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const Contact = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    contactEmail,
  } = useContactForm();

  return (
    <section id="contact" className="section-padding relative bg-background dark:bg-dark-bg">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute -top-20 right-0 w-72 h-1 bg-neon-glow-blue opacity-20 blur-xl rotate-45" />
        <div className="absolute -bottom-20 left-0 w-72 h-1 bg-neon-glow-purple opacity-20 blur-xl rotate-45" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">Get in Touch</h2>
          <p
            className="section-subtitle animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Let's collaborate on your next AI or data engineering project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact information card */}
          <div className="animate-fade-in-scale lg:col-span-2" style={{ animationDelay: "0.2s" }}>
            <div className="bento-card h-full dark:backdrop-blur-md flex flex-col">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for an AI consultant, need help with your
                data architecture, or just want to connect, feel free to reach out
                using the form or through any of my channels.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start group">
                  <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-4 dark:shadow-neon-blue-glow/20">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1 group-hover:gap-2"
                    >
                      {contactEmail}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-4 dark:shadow-neon-blue-glow/20">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">Turku, Finland</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-4 dark:shadow-neon-blue-glow/20">
                    <MessageSquare className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-medium text-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://github.com/imaddde867"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group relative w-10 h-10 rounded-full bg-card hover:bg-accent/10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 dark:group-hover:shadow-neon-blue-glow transition-opacity"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="group relative w-10 h-10 rounded-full bg-card hover:bg-accent/10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 dark:group-hover:shadow-neon-blue-glow transition-opacity"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="animate-fade-in-scale lg:col-span-3" style={{ animationDelay: "0.3s" }}>
            <form
              className="bento-card dark:backdrop-blur-md bg-card/50 dark:bg-dark-card/50 space-y-6"
              onSubmit={handleSubmit}
            >
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg mb-4 backdrop-blur-sm animate-fade-in-scale ${
                    submitStatus.success 
                      ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1 group-focus-within:text-accent transition-colors"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 dark:group-focus-within:shadow-neon-blue-glow/30 pointer-events-none transition-opacity"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1 group-focus-within:text-accent transition-colors"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 dark:group-focus-within:shadow-neon-blue-glow/30 pointer-events-none transition-opacity"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted-foreground mb-1 group-focus-within:text-accent transition-colors"
                >
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Reason for contacting"
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 dark:group-focus-within:shadow-neon-blue-glow/30 pointer-events-none transition-opacity"></div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1 group-focus-within:text-accent transition-colors"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 dark:group-focus-within:shadow-neon-blue-glow/30 pointer-events-none transition-opacity"></div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary group flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
