import React, { createContext, useContext, useState, useEffect } from 'react';
import NewsletterSubscription from '@/components/NewsletterSubscription';

interface NewsletterContextType {
  showPopup: () => void;
  hidePopup: () => void;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const useNewsletter = () => {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
};

export const NewsletterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => setIsVisible(true);
  const hidePopup = () => setIsVisible(false);

  // Show popup after 30 seconds if not shown before
  useEffect(() => {
    const hasShownPopup = localStorage.getItem('newsletterPopupShown');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        showPopup();
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <NewsletterContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {isVisible && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={hidePopup}
          />
          <NewsletterSubscription isPopup onClose={hidePopup} />
        </>
      )}
    </NewsletterContext.Provider>
  );
}; 