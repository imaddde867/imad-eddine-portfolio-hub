import { useState } from "react";
import { useEmail } from "@/context/EmailContext";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

export function useContactForm() {
  const { contactEmail, sendContactForm } = useEmail();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using the email context
      const success = await sendContactForm(
        formData.name,
        formData.email,
        formData.subject,
        formData.message,
      );

      if (!success) {
        throw new Error("Failed to send email");
      }

      resetForm();

      setSubmitStatus({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    contactEmail,
  };
}
