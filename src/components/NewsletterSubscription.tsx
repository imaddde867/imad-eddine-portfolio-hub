import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send, X } from "lucide-react";

interface NewsletterSubscriptionProps {
  isPopup?: boolean;
  onClose?: () => void;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  isPopup = false,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        className: "bg-[#FF5722]/10 border-[#FF5722]/20 text-white",
      });
      setEmail("");
      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-black/30 border border-[#FF5722]/20 rounded-lg p-6 space-y-4 ${
      isPopup ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md' : ''
    }`}>
      {isPopup && (
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF5722]/10 rounded-lg">
              <Mail className="h-5 w-5 text-[#FF5722]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-sm text-[#FFB300]/70">
                Subscribe to receive updates on new blog posts and projects
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#FFB300]/70 hover:text-[#FF5722] hover:bg-[#FF5722]/10"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {!isPopup && (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#FF5722]/10 rounded-lg">
            <Mail className="h-5 w-5 text-[#FF5722]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm text-[#FFB300]/70">
              Subscribe to receive updates on new blog posts and projects
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black/60 border-[#FF5722]/40 focus:border-[#FF5722] text-white"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#FF5722] to-[#FFB300] hover:from-[#FF5722]/90 hover:to-[#FFB300]/90 text-black font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>

      <p className="text-xs text-[#FFB300]/50">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSubscription; 