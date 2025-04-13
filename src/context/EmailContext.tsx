import React, { createContext, useContext, ReactNode } from "react";
import { sendEmail } from "@/lib/emailService";

// Contact email to use throughout the site
export const CONTACT_EMAIL = "imadeddine200507@gmail.com";

interface EmailContextType {
  contactEmail: string;
  sendContactForm: (
    name: string,
    email: string,
    subject: string,
    message: string,
  ) => Promise<boolean>;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};

interface EmailProviderProps {
  children: ReactNode;
}

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  // Send contact form
  const sendContactForm = async (
    name: string,
    email: string,
    subject: string,
    message: string,
  ): Promise<boolean> => {
    try {
      const emailData = {
        to: CONTACT_EMAIL,
        from: email,
        subject: `Portfolio Contact: ${subject}`,
        name,
        message,
      };

      return await sendEmail(emailData);
    } catch (error) {
      console.error("Error sending contact form:", error);
      return false;
    }
  };

  const value = {
    contactEmail: CONTACT_EMAIL,
    sendContactForm,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};
