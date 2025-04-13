import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // --- Placeholder for actual authentication logic --- 
    console.log("Attempting login with:", { username, password });
    // Replace this timeout with a real API call to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Check credentials (replace with backend validation)
    if (username === "admin" && password === "password123") { // VERY INSECURE - REPLACE!
      console.log("Login successful (placeholder)");
      // Store auth token/session info (e.g., in localStorage or context)
      navigate('/admin/dashboard'); // Redirect to dashboard
    } else {
      setError('Incorrect username or password.');
      // Handle login attempt limits here in a real app
      console.log("Login failed (placeholder)");
    }
    // --- End Placeholder --- 

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-imadlab-gradient p-4">
      {/* Particle Effect Placeholder - Implement actual particle library if needed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10 animate-pulse-subtle"></div> */}
      </div>

      <div className="relative w-full max-w-md p-8 bg-imadlab.deep-navy/50 backdrop-blur-lg rounded-lg border border-imadlab.neon-blue/20 shadow-xl shadow-imadlab.neon-blue/10">
        <h1 className="text-3xl font-bold font-heading text-center text-white mb-2">
          ImadLab Admin Login
        </h1>
        <p className="text-center text-gray-400 mb-8">Access your content management panel</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-3 rounded-md bg-imadlab.black/30 border border-imadlab.neon-blue/30 focus:border-imadlab.neon-blue focus:ring-1 focus:ring-imadlab.neon-blue focus:outline-none text-white placeholder-gray-500 transition-colors duration-200"
              aria-describedby={error ? "login-error" : undefined}
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-md bg-imadlab.black/30 border border-imadlab.neon-blue/30 focus:border-imadlab.neon-blue focus:ring-1 focus:ring-imadlab.neon-blue focus:outline-none text-white placeholder-gray-500 transition-colors duration-200"
              aria-describedby={error ? "login-error" : undefined}
            />
          </div>
          
          {error && (
            <p id="login-error" className="text-sm text-red-400 text-center" role="alert">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between">
            {/* "Remember Me" could be added here if needed */}
            <a 
              href="#" // Placeholder for Forgot Password functionality
              onClick={(e) => { e.preventDefault(); alert('Forgot Password - Implement backend email sending!'); }}
              className="text-sm text-imadlab.neon-blue hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center px-4 py-3 rounded-md bg-imadlab.neon-blue text-imadlab.deep-navy font-bold uppercase tracking-wider hover:bg-opacity-90 hover:shadow-neon-blue-glow focus:outline-none focus:ring-2 focus:ring-imadlab.neon-blue focus:ring-offset-2 focus:ring-offset-imadlab.deep-navy/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-imadlab.deep-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage; 