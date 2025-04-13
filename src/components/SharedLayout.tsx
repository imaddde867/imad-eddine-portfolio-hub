import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Github, Linkedin, ChevronRight } from "lucide-react";

// Modern Header with enhanced animations and theme toggle
const Header: React.FC = () => {
  // Theme toggle state
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-accent shadow-sm">
            <span className="font-heading text-lg font-bold text-primary-foreground">IE</span>
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Imad<span className="hidden sm:inline">Eddine</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
          >
            Blog
          </NavLink>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-3 mr-3">
            <a
              href="https://github.com/imaddde867"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Theme toggle with enhanced styling */}
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            ) : (
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background p-2 text-sm font-medium md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-16 z-50 w-full origin-top overflow-hidden border-t border-border/20 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom flex flex-col py-6 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            <ChevronRight size={16} className="ml-auto" />
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
            <ChevronRight size={16} className="ml-auto" />
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md ${
                isActive
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-foreground hover:bg-muted/40"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
            <ChevronRight size={16} className="ml-auto" />
          </NavLink>

          <div className="flex items-center gap-4 mt-4 px-4">
            <a
              href="https://github.com/imaddde867"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
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

// Modern footer with 2025 design elements
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 bg-card/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="font-heading text-lg font-bold text-primary-foreground">IE</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">ImadEddine</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              AI & Machine Learning Engineer transforming complex data into intelligent solutions with a focus on predictive analytics and ML pipelines.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/imaddde867"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
              <a
                href="https://www.linkedin.com/in/imad-eddine-el-mouss-986741262/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
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
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Turku, Finland
              </li>
              <li>
                <a
                  href="mailto:imadeddine.data@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  imadeddine.data@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Imad Eddine El Mouss. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SharedLayout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
