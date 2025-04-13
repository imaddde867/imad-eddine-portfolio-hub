import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/data/adminStore";
import {
  FolderKanban,
  FileText,
  Plus,
  PenLine,
  Clock,
  Activity,
  BarChart,
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
  const navigate = useNavigate();

  // Get recent 5 items, sorted by date
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
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats cards */}
        <Card className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-blue-700/30 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-400 text-sm font-medium">
                  Total Projects
                </p>
                <h3 className="text-3xl font-bold mt-1">{projects.length}</h3>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <FolderKanban className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border-indigo-700/30 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-indigo-400 text-sm font-medium">
                  Blog Posts
                </p>
                <h3 className="text-3xl font-bold mt-1">{posts.length}</h3>
              </div>
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-violet-600/20 to-violet-900/20 border-violet-700/30 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-violet-400 text-sm font-medium">
                  Total Views
                </p>
                <h3 className="text-3xl font-bold mt-1">--</h3>
              </div>
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <BarChart className="h-6 w-6 text-violet-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Recent Projects */}
          <Card className="bg-black/30 border-slate-800/50 text-white">
            <CardHeader className="border-b border-slate-800/50 pb-4">
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
                        className="h-8 w-8 text-slate-500 hover:text-blue-400 hover:bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
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
                <div className="text-center py-6 border border-dashed border-slate-800 rounded-lg">
                  <Activity className="h-8 w-8 mx-auto text-slate-600 mb-2" />
                  <p className="text-slate-400 mb-3">No projects yet</p>
                  <Button
                    variant="outline"
                    className="bg-blue-600/10 text-blue-400 border-blue-700/50 hover:bg-blue-600/20"
                    onClick={() => navigate("/admin/projects/new")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add your first project
                  </Button>
                </div>
              )}
            </CardContent>
            {recentProjects.length > 0 && (
              <CardFooter className="border-t border-slate-800/50 pt-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white"
                  onClick={() => navigate("/admin/projects")}
                >
                  View all projects
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            )}
          </Card>

          {/* Recent Blog Posts */}
          <Card className="bg-[#0D1425]/70 border-slate-800 text-white overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription className="text-slate-400">
                    Your latest blog entries
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-700/50"
                  onClick={() => navigate("/admin/blog/new")}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentPosts.length > 0 ? (
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="flex gap-3 group">
                      <div className="h-9 w-9 rounded-md bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-4 w-4 text-indigo-400" />
                      </div>
                      <div className="flex-1 min-w-0 border-b border-slate-800/50 pb-3">
                        <h3 className="font-medium text-sm group-hover:text-indigo-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-400 truncate mt-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="text-xs flex items-center gap-1 text-slate-500">
                            <Clock className="h-3 w-3" />
                            <span>
                              {format(new Date(post.date), "MMM d, yyyy")}
                            </span>
                          </div>
                          <span className="text-xs py-0.5 px-1.5 bg-indigo-900/20 text-indigo-300 rounded">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-500 hover:text-indigo-400 hover:bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
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
                <div className="text-center py-6 border border-dashed border-slate-800 rounded-lg">
                  <Activity className="h-8 w-8 mx-auto text-slate-600 mb-2" />
                  <p className="text-slate-400 mb-3">No blog posts yet</p>
                  <Button
                    variant="outline"
                    className="bg-indigo-600/10 text-indigo-400 border-indigo-700/50 hover:bg-indigo-600/20"
                    onClick={() => navigate("/admin/blog/new")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create your first post
                  </Button>
                </div>
              )}
            </CardContent>
            {recentPosts.length > 0 && (
              <CardFooter className="border-t border-slate-800/50 pt-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white"
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

          {/* ...any other sidebar widgets... */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
