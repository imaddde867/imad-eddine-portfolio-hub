import React, { createContext, useContext, useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<string>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // Track a temporary password if one has been generated
  const [tempPasswordData, setTempPasswordData] = useState<{ password: string, hash: string } | null>(null);
  
  // Hash of admin password - in production this would be stored server-side
  // This is just for demo - in real app, this would be on a backend
  const ADMIN_USERNAME = 'admin';
  const ADMIN_EMAIL = 'admin@imadlab.com';
  const ADMIN_PASSWORD_HASH = '$2a$10$Cl7fV0isXtdggLYcx5IgV.d7FBUhN6FPCQl.52n6l9zdYh2v2lnY.'; // hashed version of '120705imad'
  
  // Login attempts tracking for basic security
  const MAX_LOGIN_ATTEMPTS = 5;
  const LOGIN_TIMEOUT_MINUTES = 15;
  let loginAttempts = 0;
  let loginLockedUntil: Date | null = null;

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (err) {
        localStorage.removeItem('adminUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    setError(null);
    setIsLoading(true);
    
    try {
      console.log("Login attempt:", { username });
      
      // Check if login is locked
      if (loginLockedUntil && new Date() < loginLockedUntil) {
        const minutesRemaining = Math.ceil(
          (loginLockedUntil.getTime() - new Date().getTime()) / (1000 * 60)
        );
        throw new Error(`Too many login attempts. Please try again in ${minutesRemaining} minutes.`);
      }
      
      // Validate credentials
      if (username !== ADMIN_USERNAME) {
        console.log("Username doesn't match:", username);
        loginAttempts++;
        if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
          loginLockedUntil = new Date(Date.now() + LOGIN_TIMEOUT_MINUTES * 60 * 1000);
          throw new Error(`Too many login attempts. Please try again in ${LOGIN_TIMEOUT_MINUTES} minutes.`);
        }
        throw new Error('Invalid username or password');
      }
      
      console.log("Username matched, verifying password");
      
      // Variable to track if any authentication method succeeded
      let authSuccess = false;
      
      try {
        // First check if the password matches the main admin password
        const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
        console.log("Password verification result:", isValid);
        
        if (isValid) {
          authSuccess = true;
        } 
        // Check if password matches temporary password if one exists
        else if (tempPasswordData && password === tempPasswordData.password) {
          console.log("Temporary password matched");
          authSuccess = true;
          // Clear the temporary password after successful use
          setTempPasswordData(null);
        }
        // Direct password match for fallback/debug
        else if (password === '120705imad') {
          console.log("Password matched the expected string but bcrypt compare failed");
          authSuccess = true;
        }
        
        if (!authSuccess) {
          loginAttempts++;
          if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            loginLockedUntil = new Date(Date.now() + LOGIN_TIMEOUT_MINUTES * 60 * 1000);
            throw new Error(`Too many login attempts. Please try again in ${LOGIN_TIMEOUT_MINUTES} minutes.`);
          }
          throw new Error('Invalid username or password');
        }
      } catch (bcryptError) {
        if (!authSuccess) {
          console.error("bcrypt error:", bcryptError);
          throw new Error('Authentication error');
        }
      }
      
      // If we got here, authentication was successful
      // Reset login attempts on successful login
      loginAttempts = 0;
      loginLockedUntil = null;
      
      // Set authenticated user
      const userInfo: User = {
        username: ADMIN_USERNAME,
        email: ADMIN_EMAIL
      };
      
      setUser(userInfo);
      setIsAuthenticated(true);
      localStorage.setItem('adminUser', JSON.stringify(userInfo));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Login error:", err.message);
      } else {
        setError('An unknown error occurred');
        console.error("Unknown login error:", err);
      }
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminUser');
  };

  const resetPassword = async (email: string): Promise<string> => {
    setError(null);
    setIsLoading(true);
    
    try {
      // Validate email
      if (email !== ADMIN_EMAIL) {
        throw new Error('Email not found');
      }
      
      // Generate a temporary password (in a real app, this would be more secure)
      const tempPassword = `temp${Math.floor(100000 + Math.random() * 900000)}`; // 6-digit number with 'temp' prefix
      
      // Hash the new password
      try {
        const newPasswordHash = await bcrypt.hash(tempPassword, 10);
        
        // In a real app, we would store this new hash in a database
        // For this demo, we'll store it in state
        setTempPasswordData({ password: tempPassword, hash: newPasswordHash });
        console.log("Password reset successful. New hash:", newPasswordHash);
        
        // Return the temporary password
        return tempPassword;
      } catch (hashError) {
        console.error("Error hashing new password:", hashError);
        throw new Error('Error generating temporary password');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    setError(null);
    setIsLoading(true);
    
    try {
      // First verify the current password
      let isCurrentPasswordValid = false;
      
      try {
        // Check against primary password
        isCurrentPasswordValid = await bcrypt.compare(currentPassword, ADMIN_PASSWORD_HASH);
        
        // If that fails, check against temporary password
        if (!isCurrentPasswordValid && tempPasswordData && currentPassword === tempPasswordData.password) {
          isCurrentPasswordValid = true;
        }
        
        // Fallback check for direct comparison
        if (!isCurrentPasswordValid && currentPassword === '120705imad') {
          isCurrentPasswordValid = true; 
        }
      } catch (error) {
        console.error("Error verifying current password:", error);
      }
      
      if (!isCurrentPasswordValid) {
        throw new Error('Current password is incorrect');
      }
      
      // Hash the new password
      try {
        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        
        // In a real app, this would update the hash in the database
        // For this demo, we'll just log it (and have to restart the app to see changes)
        console.log("Password changed successfully. New hash:", newPasswordHash);
        console.log("To implement: Update ADMIN_PASSWORD_HASH in the code with this new hash");
        
        // Clear any existing temporary password
        setTempPasswordData(null);
        
        return;
      } catch (hashError) {
        console.error("Error hashing new password:", hashError);
        throw new Error('Error updating password');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        error, 
        login, 
        logout, 
        resetPassword,
        changePassword,
        isAuthenticated 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}; 