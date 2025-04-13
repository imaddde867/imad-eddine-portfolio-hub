import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout";

// Admin pages
import AdminLogin from "./pages/admin/Login";
import PasswordReset from "./pages/admin/PasswordReset";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProjectList from "./pages/admin/ProjectList";
import ProjectForm from "./pages/admin/ProjectForm";
import BlogList from "./pages/admin/BlogList";
import BlogForm from "./pages/admin/BlogForm";

// Context providers
import { AuthProvider } from "./context/AuthContext";
import { EmailProvider } from "./context/EmailContext";
import { NewsletterProvider } from "./context/NewsletterContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <EmailProvider>
          <NewsletterProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Index />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="projects/:slug" element={<ProjectDetail />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="blog/:slug" element={<PostDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Admin Authentication Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/reset-password" element={<PasswordReset />} />
                
                {/* Protected Admin Routes */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="projects" element={<ProjectList />} />
                  <Route path="projects/new" element={<ProjectForm />} />
                  <Route path="projects/edit/:slug" element={<ProjectForm />} />
                  <Route path="blog" element={<BlogList />} />
                  <Route path="blog/new" element={<BlogForm />} />
                  <Route path="blog/edit/:slug" element={<BlogForm />} />
                  {/* Catch unhandled admin routes and redirect to dashboard */}
                  <Route path="*" element={<Navigate to="/admin" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NewsletterProvider>
        </EmailProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
