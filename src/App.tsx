import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
// import Contact from "./pages/Contact"; // Removed import for deleted file
import NotFound from "./pages/NotFound";

// Admin Components/Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminPortfolioPage from "./pages/admin/AdminPortfolioPage";
import AdminBlogPage from "./pages/admin/AdminBlogPage";
// TODO: Import Add/Edit pages when created
// import AdminPortfolioForm from "./pages/admin/AdminPortfolioForm";
// import AdminBlogForm from "./pages/admin/AdminBlogForm";

const queryClient = new QueryClient();

// Placeholder for a Protected Route component
// In a real app, this would check authentication status
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true; // Replace with actual auth check (e.g., from context or token)
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/contact" element={<Contact />} /> */}{/* Removed route for deleted file*/}

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Nested Admin Routes */}
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="portfolio" element={<AdminPortfolioPage />} />
            {/* TODO: Add routes for new/edit portfolio */}
            {/* <Route path="portfolio/new" element={<AdminPortfolioForm />} /> */}
            {/* <Route path="portfolio/edit/:projectId" element={<AdminPortfolioForm />} /> */}
            <Route path="blog" element={<AdminBlogPage />} />
            {/* TODO: Add routes for new/edit blog */}
            {/* <Route path="blog/new" element={<AdminBlogForm />} /> */}
            {/* <Route path="blog/edit/:postId" element={<AdminBlogForm />} /> */}
            
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} /> 
          </Route>

          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
