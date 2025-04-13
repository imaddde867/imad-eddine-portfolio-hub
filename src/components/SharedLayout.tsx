import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Moon, Sun } from "lucide-react"; // Example icons for theme toggle

const Header: React.FC = () => {
  // Basic theme toggle state (replace with actual logic if needed)
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            {/* Replace with Logo or Initials */}
            <span className="font-bold sm:inline-block font-heading text-lg">
              Your Name / Logo
            </span>
          </NavLink>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              Blog
            </NavLink>
          </nav>
        </div>
        {/* Add Mobile Nav Toggle Here if needed */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-accent/10">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </button>
          {/* Add other icons like GitHub/LinkedIn here */}
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container-custom flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Your Name. Built with <a href="https://react.dev" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-accent">React</a> & <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-accent">Tailwind CSS</a>.
        </p>
        {/* Add social links here */}
      </div>
    </footer>
  );
};

const SharedLayout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default SharedLayout; 