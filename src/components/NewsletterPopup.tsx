import React, { useEffect, useState } from "react";
import NewsletterSubscription from "./NewsletterSubscription";

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
    
    // Show popup after 3 seconds if user hasn't seen it
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("hasSeenNewsletterPopup", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Popup */}
      <NewsletterSubscription
        isPopup
        onClose={() => setIsVisible(false)}
      />
    </>
  );
};

export default NewsletterPopup; 