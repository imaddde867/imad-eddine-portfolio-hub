import React from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">Get in Touch</h2>
          <p
            className="section-subtitle animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Let's collaborate on your next AI or data engineering project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for an AI consultant, need help with your
              data architecture, or just want to connect, feel free to reach out
              using the form or through my social channels.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-4">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mr-4">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Turku, Finland</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-foreground mb-4">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/imaddde867"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/imad-eddine-el-moussaoui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form
              className="bg-card p-6 sm:p-8 rounded-md border border-border space-y-6 shadow-sm"
              onSubmit={handleSubmit}
            >
              {submitStatus && (
                <div
                  className={`p-4 rounded-md mb-4 ${submitStatus.success ? "bg-green-500/10 border border-green-500/30 text-green-400" : "bg-red-500/10 border border-red-500/30 text-red-400"}`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Reason for contacting"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
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
