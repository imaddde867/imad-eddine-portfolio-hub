import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEmail } from "@/context/EmailContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Lock, CheckCircle, ArrowLeft, Home } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

// Form schema for validation
const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

// Background component (reused from Login)
const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101935] via-[#0F1628] to-[#060C1A]"></div>
      <div className="absolute inset-0 bg-[url('/subtle-grid.png')] opacity-10"></div>
    </div>
  );
};

const PasswordReset: React.FC = () => {
  const { error, isLoading, resetPassword } = useAuth();
  const { contactEmail } = useEmail();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tempPassword, setTempPassword] = useState<string | null>(null);

  // For reset password form
  const resetForm = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onResetPasswordSubmit = async (data: ResetPasswordForm) => {
    try {
      const newTempPassword = await resetPassword(data.email);
      setTempPassword(newTempPassword);
      toast({
        title: "Password reset successful",
        description: "A temporary password has been generated for you.",
        variant: "default",
      });
    } catch (err) {
      // Error is handled by the useAuth hook
      setTempPassword(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A0F1F] relative">
      <GradientBackground />

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-12 mx-auto">
        <div className="absolute top-4 left-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800/50"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4" />
            Back to site
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800/50"
            onClick={() => navigate("/admin/login")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Button>
        </div>

        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">IL</span>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-800 shadow-xl p-8 w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white">Password Reset</h1>
              <p className="text-slate-400 text-sm mt-1">
                Enter your email to reset your admin password
              </p>
            </div>

            {error && (
              <Alert
                variant="destructive"
                className="mb-6 bg-red-900/30 border-red-800/50 text-red-200"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Form {...resetForm}>
              <form
                onSubmit={resetForm.handleSubmit(onResetPasswordSubmit)}
                className="space-y-4"
              >
                {tempPassword ? (
                  <div className="space-y-4">
                    <Alert className="bg-green-900/30 border-green-800/50 text-green-200">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Your temporary password has been generated
                      </AlertDescription>
                    </Alert>

                    <div className="p-3 bg-slate-800/70 border border-slate-700 rounded-md">
                      <p className="text-xs text-slate-400 mb-1">
                        Your temporary password:
                      </p>
                      <p className="text-md font-mono text-white bg-slate-700/50 p-2 rounded border border-slate-600 text-center">
                        {tempPassword}
                      </p>
                      <p className="text-xs text-slate-400 mt-2">
                        Please use this to log in and then change your password.
                      </p>
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                      onClick={() => navigate("/admin/login")}
                    >
                      Go to login
                    </Button>
                  </div>
                ) : (
                  <>
                    <FormField
                      control={resetForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your admin email address"
                              className="bg-slate-800/50 border-slate-700 text-white focus-visible:ring-blue-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isLoading || !resetForm.formState.isValid}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                    >
                      {isLoading ? "Generating..." : "Reset password"}
                    </Button>
                  </>
                )}
              </form>
            </Form>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            Need help? Contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-400 hover:text-blue-300"
            >
              {contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
