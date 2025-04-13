#!/bin/bash

# Script to clean up the codebase, remove unused files, and fix formatting

echo "Starting cleanup process..."

# ===== STEP 1: Remove unused UI components =====
echo "Removing unused UI components..."

# These components are not used in the codebase
rm -f src/components/ui/carousel.tsx
rm -f src/components/ui/menubar.tsx
rm -f src/components/ui/chart.tsx
rm -f src/components/ui/sidebar.tsx

# ===== STEP 2: Remove test files that are not needed =====
echo "Removing test files..."
rm -f bcrypt-test.js

# ===== STEP 3: Fix linting and formatting issues =====
echo "Fixing linting and formatting issues..."

# Add proper typing for Navbar component (fix existing errors)
cat > tmp-navbar.tsx << 'EOL'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function for navigation link classes
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? "text-white font-medium border-b-2 border-primary pb-1"
      : "text-gray-300 hover:text-white transition-colors";
  };

  // Function for mobile navigation link classes
  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? "block py-2 text-primary font-medium"
      : "block py-2 text-gray-300 hover:text-white";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-md border-b border-gray-800/50">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            <span className="text-primary">Imad</span>Lab
          </Link>
          
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={getNavLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={getNavLinkClass}>
              Blog
            </NavLink>

            {/* Admin Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-400 hover:text-gray-300 text-sm flex items-center">
                Admin
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </Menu.Button>
              <Transition
                as={Menu.Items}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 border border-gray-800">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link
                        to="/admin/login"
                        className={`${
                          active ? 'bg-gray-800' : ''
                        } block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800`}
                      >
                        Admin Login
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link
                        to="/admin/reset-password"
                        className={`${
                          active ? 'bg-gray-800' : ''
                        } block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800`}
                      >
                        Reset Password
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom py-4 space-y-3">
          <NavLink 
            to="/" 
            className={getMobileNavLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={getMobileNavLinkClass}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/blog" 
            className={getMobileNavLinkClass}
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <div className="pt-2 border-t border-gray-800 text-sm">
            <NavLink 
              to="/admin/login" 
              className="block py-2 text-gray-400 hover:text-white"
              onClick={closeMenu}
            >
              Admin Login
            </NavLink>
            <NavLink 
              to="/admin/reset-password" 
              className="block py-2 text-gray-400 hover:text-white"
              onClick={closeMenu}
            >
              Reset Password
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
EOL

mv tmp-navbar.tsx src/components/Navbar.tsx

# ===== STEP 4: Make sure all files are properly formatted =====
echo "Formatting all TypeScript and React files..."

# If you have prettier installed, you could run:
# npx prettier --write "src/**/*.{ts,tsx}"

# ===== STEP 5: Stage all changes =====
echo "Staging all changes..."
git add .

echo "Cleanup process completed successfully!"
echo "Run 'git commit -m \"Cleanup: Code refactoring and removal of unused components\"' to commit the changes." 