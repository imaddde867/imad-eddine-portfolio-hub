import React, { createContext, useContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

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
  changePassword: (
    currentPassword: string,
    newPassword: string,
  ) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Track a temporary password if one has been generated
  const [tempPasswordData, setTempPasswordData] = useState<{
    password: string;
    hash: string;
  } | null>(null);

  // Authentication constants - in production these would be stored server-side
  const ADMIN_USERNAME = "admin";
  const ADMIN_EMAIL = "imadeddine200507@gmail.com";
  const ADMIN_PASSWORD_HASH =
    "$2a$10$Cl7fV0isXtdggLYcx5IgV.d7FBUhN6FPCQl.52n6l9zdYh2v2lnY."; // hashed version of '120705imad'

  // Login attempts tracking for basic security
  const MAX_LOGIN_ATTEMPTS = 5;
  const LOGIN_TIMEOUT_MINUTES = 15;
  let loginAttempts = 0;
  let loginLockedUntil: Date | null = null;

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (err) {
        localStorage.removeItem("adminUser");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    setError(null);
    setIsLoading(true);

    try {
      // Check if login is locked
      if (loginLockedUntil && new Date() < loginLockedUntil) {
        const minutesRemaining = Math.ceil(
          (loginLockedUntil.getTime() - new Date().getTime()) / (1000 * 60),
        );
        throw new Error(
          `Too many login attempts. Please try again in ${minutesRemaining} minutes.`,
        );
      }

      // Validate credentials
      if (username !== ADMIN_USERNAME) {
        loginAttempts++;
        if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
          loginLockedUntil = new Date(
            Date.now() + LOGIN_TIMEOUT_MINUTES * 60 * 1000,
          );
          throw new Error(
            `Too many login attempts. Please try again in ${LOGIN_TIMEOUT_MINUTES} minutes.`,
          );
        }
        throw new Error("Invalid username or password");
      }

      // Variable to track if any authentication method succeeded
      let authSuccess = false;

      try {
        // First check if the password matches the main admin password
        const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
        
        if (isValid) {
          authSuccess = true;
        }
        // Check if password matches temporary password if one exists
        else if (tempPasswordData && password === tempPasswordData.password) {
          authSuccess = true;
          // Clear the temporary password after successful use
          setTempPasswordData(null);
        }
        // Direct password match for fallback/debug
        else if (password === "120705imad") {
          authSuccess = true;
        }

        if (!authSuccess) {
          loginAttempts++;
          if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            loginLockedUntil = new Date(
              Date.now() + LOGIN_TIMEOUT_MINUTES * 60 * 1000,
            );
            throw new Error(
              `Too many login attempts. Please try again in ${LOGIN_TIMEOUT_MINUTES} minutes.`,
            );
          }
          throw new Error("Invalid username or password");
        }
      } catch (bcryptError) {
        if (!authSuccess) {
          console.error("Authentication error:", bcryptError);
          throw new Error("Authentication error");
        }
      }

      // If we got here, authentication was successful
      // Reset login attempts on successful login
      loginAttempts = 0;
      loginLockedUntil = null;

      // Set authenticated user
      const userInfo: User = {
        username: ADMIN_USERNAME,
        email: ADMIN_EMAIL,
      };

      setUser(userInfo);
      setIsAuthenticated(true);
      localStorage.setItem("adminUser", JSON.stringify(userInfo));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Login error:", err.message);
      } else {
        setError("An unknown error occurred");
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
    localStorage.removeItem("adminUser");
    // Reset any related state
    setError(null);
  };

  const resetPassword = async (email: string): Promise<string> => {
    setError(null);
    setIsLoading(true);

    try {
      // Validate email
      if (email !== ADMIN_EMAIL) {
        throw new Error("Email not found");
      }

      // Generate a temporary password (in a real app, this would be more secure)
      const tempPassword = `temp${Math.floor(100000 + Math.random() * 900000)}`; // 6-digit number with 'temp' prefix

      // Hash the new password
      try {
        const newPasswordHash = await bcrypt.hash(tempPassword, 10);

        // In a real app, we would store this new hash in a database
        // For this demo, we'll store it in state
        setTempPasswordData({ password: tempPassword, hash: newPasswordHash });

        setIsLoading(false);
        return tempPassword;
      } catch (bcryptError) {
        console.error("Error hashing temp password:", bcryptError);
        throw new Error("Error creating temporary password");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setIsLoading(false);
      throw err;
    }
  };

  const changePassword = async (
    currentPassword: string,
    newPassword: string,
  ): Promise<void> => {
    setError(null);
    setIsLoading(true);

    try {
      // Verify current password
      let passwordVerified = false;

      // Compare against admin password hash
      try {
        const isValid = await bcrypt.compare(
          currentPassword,
          ADMIN_PASSWORD_HASH,
        );
        if (isValid) {
          passwordVerified = true;
        }
      } catch (bcryptError) {
        console.error("Error verifying current password:", bcryptError);
      }

      // If temp password exists, check against that too
      if (
        !passwordVerified &&
        tempPasswordData &&
        currentPassword === tempPasswordData.password
      ) {
        passwordVerified = true;
      }

      // Fallback check for debug
      if (!passwordVerified && currentPassword === "120705imad") {
        passwordVerified = true;
      }

      if (!passwordVerified) {
        throw new Error("Current password is incorrect");
      }

      // Hash the new password
      try {
        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        
        // In a real app, this would update a database
        // For this demo, we'll just log it
        console.log(
          "Password changed successfully. New hash would be:",
          newPasswordHash,
        );

        // Clear any temporary password
        setTempPasswordData(null);

        setIsLoading(false);
      } catch (bcryptError) {
        console.error("Error hashing new password:", bcryptError);
        throw new Error("Error changing password");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setIsLoading(false);
      throw err;
    }
  };

  const authContextValue: AuthContextType = {
    user,
    isLoading,
    error,
    login,
    logout,
    resetPassword,
    changePassword,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
