import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, Lock, User, ArrowLeft, Home } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

// Form schema for validation
const loginSchema = z.object({
  username: z.string().min(3, { message: 'Username is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

type LoginForm = z.infer<typeof loginSchema>;

// Background component
const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101935] via-[#0F1628] to-[#060C1A]"></div>
      <div className="absolute inset-0 bg-[url('/subtle-grid.png')] opacity-10"></div>
    </div>
  );
};

const Login: React.FC = () => {
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/admin';

  // For login form
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      await login(data.username, data.password);
      toast({
        title: 'Login successful',
        description: 'Welcome to the admin dashboard.',
        variant: 'default',
      });
      navigate(from, { replace: true });
    } catch (err) {
      // Error is handled by the useAuth hook
    }
  };

  const goToPasswordReset = () => {
    navigate('/admin/reset-password');
  };

  return (
    <div className="flex min-h-screen bg-[#0A0F1F] relative">
      <GradientBackground />
      
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-12 mx-auto">
        <div className="absolute top-4 left-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex gap-2 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800/50"
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4" />
            Back to site
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
              <h1 className="text-2xl font-bold text-white">
                Admin Portal
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Sign in to access the dashboard
              </p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-900/30 border-red-800/50 text-red-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                          <Input
                            placeholder="admin"
                            className="pl-10 bg-slate-800/50 border-slate-700 text-white focus-visible:ring-blue-600"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="pl-10 bg-slate-800/50 border-slate-700 text-white focus-visible:ring-blue-600"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-slate-400 hover:text-white hover:bg-slate-800/50"
                  onClick={goToPasswordReset}
                >
                  Forgot password?
                </Button>
              </form>
            </Form>
          </div>
          
          <p className="text-center text-xs text-slate-500 mt-6">
            For security reasons, this page is protected and will lock after multiple failed attempts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 