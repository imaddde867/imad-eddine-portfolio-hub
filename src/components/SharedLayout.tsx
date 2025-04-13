import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Github, Linkedin, ChevronRight } from "lucide-react";
import NewsletterPopup from "./NewsletterPopup";

// Social media links component to avoid duplication
const SocialLinks: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <a
      href="https://github.com/imaddde867"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all duration-300 hover:scale-110"
      aria-label="GitHub"
    >
      <Github size={18} />
    </a>
    <a
      href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all duration-300 hover:scale-110"
      aria-label="LinkedIn"
    >
      <Linkedin size={18} />
    </a>
  </div>
);

// Modern NavLink component with simplified styling
const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ 
  to, 
  children, 
  onClick 
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
        isActive
          ? "text-accent after:scale-x-100"
          : "text-foreground/70 hover:text-foreground after:group-hover:scale-x-100"
      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

// Modern Header with enhanced animations and theme toggle
const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-border/10 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 transition-all duration-300 hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-accent shadow-sm group-hover:shadow-md transition-shadow duration-300">
            <span className="font-heading text-lg font-bold text-primary-foreground">IL</span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Imad<span className="hidden sm:inline">Lab</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/blog">Blog</NavItem>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <SocialLinks className="hidden md:flex" />
          
          {/* Modern theme toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted/30 text-muted-foreground transition-all duration-300 hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label="Toggle theme"
          >
            <div className="relative h-4 w-4 transition-transform duration-500">
              {isDarkMode ? (
                <Sun className="h-full w-full text-amber-400" />
              ) : (
                <Moon className="h-full w-full text-indigo-400" />
              )}
            </div>
          </button>

          {/* Modern mobile menu button */}
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted/30 text-muted-foreground md:hidden transition-all duration-300 hover:bg-muted/50 hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-16 z-50 w-full origin-top overflow-hidden border-t border-border/10 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom flex flex-col py-6 gap-4">
          <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
          <NavItem to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavItem>
          <NavItem to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavItem>
          <div className="mt-4 px-4">
            <SocialLinks />
          </div>
        </nav>
      </div>
    </header>
  );
};

// Modern footer with enhanced design
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 bg-card/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="group flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:shadow-lg">
                <span className="font-heading text-lg font-bold text-primary-foreground">IL</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">ImadLab</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              AI & Machine Learning Engineer transforming complex data into intelligent solutions with a focus on predictive analytics and ML pipelines.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:imad.eddine.elmouss@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  imad.eddine.elmouss@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/imaddde867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} ImadLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SharedLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default SharedLayout;
