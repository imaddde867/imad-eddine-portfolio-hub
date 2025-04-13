import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Github, Linkedin, ChevronRight } from "lucide-react";
import NewsletterPopup from "./NewsletterPopup";

// Modern Header with enhanced animations and theme toggle
const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Modern logo with subtle animation */}
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

        {/* Modern desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""} relative group`
            }
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""} relative group`
            }
          >
            Projects
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""} relative group`
            }
          >
            Blog
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
        </nav>

        {/* Modern right side controls */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-3 mr-3">
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

          {/* Modern theme toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium ring-offset-background transition-all duration-300 hover:bg-muted hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <div className="relative h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12">
              {isDarkMode ? (
                <Sun className="h-full w-full text-amber-500" />
              ) : (
                <Moon className="h-full w-full text-indigo-500" />
              )}
            </div>
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Modern mobile menu button */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background p-2 text-sm font-medium md:hidden transition-all duration-300 hover:bg-muted hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Modern mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-16 z-50 w-full origin-top overflow-hidden border-t border-border/20 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom flex flex-col py-6 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40 hover:translate-x-2"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            <ChevronRight size={16} className="ml-auto transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40 hover:translate-x-2"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
            <ChevronRight size={16} className="ml-auto transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40 hover:translate-x-2"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
            <ChevronRight size={16} className="ml-auto transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>

          <div className="flex items-center gap-4 mt-4 px-4">
            <a
              href="https://github.com/imaddde867"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
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
            <div className="flex space-x-4">
              <a
                href="https://github.com/imaddde867"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-md transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
              <a
                href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-md transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center"
                >
                  <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center"
                >
                  <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center"
                >
                  <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Let's connect and discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground text-center">
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
      
      {/* Newsletter Popup */}
      <NewsletterPopup />
    </div>
  );
};

export default SharedLayout;
