import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/data/adminStore";
import { useAuth } from "@/context/AuthContext";
import {
  FolderKanban,
  FileText,
  Plus,
  PenLine,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { format } from "date-fns";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

const Dashboard: React.FC = () => {
  const { projects, posts } = useAdminStore();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Get recent items, sorted by date
  const recentProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime(),
    )
    .slice(0, 5);

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="text-[#40C4FF]/70">
          Welcome back, {user?.username || "Admin"}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats cards */}
        <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#40C4FF] text-sm font-medium">
                  Projects
                </p>
                <h3 className="text-3xl font-bold mt-1">{projects.length}</h3>
              </div>
              <div className="p-3 bg-[#40C4FF]/10 rounded-lg">
                <FolderKanban className="h-6 w-6 text-[#40C4FF]" />
              </div>
            </div>
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#40C4FF]/70 hover:text-white hover:bg-[#40C4FF]/20 -ml-2 flex items-center"
                onClick={() => navigate("/admin/projects")}
              >
                Manage projects
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#40C4FF] text-sm font-medium">
                  Blog Posts
                </p>
                <h3 className="text-3xl font-bold mt-1">{posts.length}</h3>
              </div>
              <div className="p-3 bg-[#40C4FF]/10 rounded-lg">
                <FileText className="h-6 w-6 text-[#40C4FF]" />
              </div>
            </div>
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#40C4FF]/70 hover:text-white hover:bg-[#40C4FF]/20 -ml-2 flex items-center"
                onClick={() => navigate("/admin/blog")}
              >
                Manage blog posts
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Recent Projects */}
          <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
            <CardHeader className="border-b border-[#40C4FF]/10 pb-4">
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#40C4FF]" />
                Recent Projects
              </CardTitle>
              <CardDescription className="text-slate-400">
                Recently added or updated projects
              </CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              {recentProjects.length > 0 ? (
                <ul className="space-y-4">
                  {recentProjects.map((project) => (
                    <li key={project.slug} className="flex gap-3 group">
                      <div className="border border-[#40C4FF]/20 p-1.5 rounded w-12 h-12 flex items-center justify-center flex-shrink-0 bg-[#40C4FF]/5">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <Layers className="h-5 w-5 text-[#40C4FF]/70" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">
                          {project.title}
                        </h4>
                        <p className="text-slate-400 text-sm truncate mt-0.5">
                          {project.technologies.slice(0, 3).join(", ")}
                          {project.technologies.length > 3 &&
                            `, +${project.technologies.length - 3} more`}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between items-end text-right">
                        <p className="text-xs text-slate-500">
                          {project.date
                            ? format(new Date(project.date), "MMM d, yyyy")
                            : ""}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-500 hover:text-[#40C4FF] hover:bg-[#40C4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          navigate(`/admin/projects/edit/${project.slug}`)
                        }
                      >
                        <PenLine className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-6 border border-dashed border-[#40C4FF]/20 rounded-lg">
                  <Layers className="h-8 w-8 mx-auto text-[#40C4FF]/30 mb-2" />
                  <p className="text-slate-400 mb-3">No projects yet</p>
                  <Button
                    variant="outline"
                    className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30 hover:bg-[#40C4FF]/20"
                    onClick={() => navigate("/admin/projects/new")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add your first project
                  </Button>
                </div>
              )}
            </CardContent>
            {recentProjects.length > 0 && (
              <CardFooter className="border-t border-[#40C4FF]/10 pt-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#40C4FF]/70 hover:text-white"
                  onClick={() => navigate("/admin/projects")}
                >
                  View all projects
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            )}
          </Card>

          {/* Recent Blog Posts */}
          <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
            <CardHeader className="border-b border-[#40C4FF]/10 pb-4">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#40C4FF]" />
                Recent Posts
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your latest blog entries
              </CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              {recentPosts.length > 0 ? (
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="flex gap-3 group">
                      <div className="border border-[#40C4FF]/20 p-1.5 rounded w-12 h-12 flex items-center justify-center flex-shrink-0 bg-[#40C4FF]/5">
                        <Clock className="h-5 w-5 text-[#40C4FF]/70" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">
                          {post.title}
                        </h4>
                        <p className="text-slate-400 text-sm truncate mt-0.5">
                          {post.excerpt.slice(0, 60)}...
                        </p>
                      </div>

                      <div className="flex flex-col justify-between items-end text-right">
                        <p className="text-xs text-slate-500">
                          {post.date
                            ? format(new Date(post.date), "MMM d, yyyy")
                            : ""}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-500 hover:text-[#40C4FF] hover:bg-[#40C4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          navigate(`/admin/blog/edit/${post.slug}`)
                        }
                      >
                        <PenLine className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-6 border border-dashed border-[#40C4FF]/20 rounded-lg">
                  <FileText className="h-8 w-8 mx-auto text-[#40C4FF]/30 mb-2" />
                  <p className="text-slate-400 mb-3">No blog posts yet</p>
                  <Button
                    variant="outline"
                    className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30 hover:bg-[#40C4FF]/20"
                    onClick={() => navigate("/admin/blog/new")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add your first post
                  </Button>
                </div>
              )}
            </CardContent>
            {recentPosts.length > 0 && (
              <CardFooter className="border-t border-[#40C4FF]/10 pt-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#40C4FF]/70 hover:text-white"
                  onClick={() => navigate("/admin/blog")}
                >
                  View all posts
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Change Password Form */}
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
