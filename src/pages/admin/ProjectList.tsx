import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '@/data/adminStore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  PenLine,
  Trash2,
  Eye,
  MoreHorizontal,
  Search,
  Tag,
  Link2,
  CalendarRange,
  FileSymlink,
  Filter,
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';

const ProjectList: React.FC = () => {
  const { projects, deleteProject } = useAdminStore();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [lastDeletedProject, setLastDeletedProject] = useState<string | null>(null);
  const [showUndoToast, setShowUndoToast] = useState(false);

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const descMatch = project.description.toLowerCase().includes(searchLower);
    const techMatch = project.technologies.some(tech => 
      tech.toLowerCase().includes(searchLower)
    );
    
    return titleMatch || descMatch || techMatch;
  });

  const handleDelete = (slug: string) => {
    setProjectToDelete(slug);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      const projectName = projects.find(p => p.slug === projectToDelete)?.title || 'Project';
      
      // Store information for undo
      setLastDeletedProject(projectToDelete);
      
      // Delete project
      deleteProject(projectToDelete);
      
      // Close dialog
      setProjectToDelete(null);
      
      // Show toast with undo option
      toast({
        title: "Project deleted",
        description: `"${projectName}" has been removed.`,
        action: (
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            onClick={() => navigate(`/admin/projects/new?restore=${lastDeletedProject}`)}
          >
            Undo
          </Button>
        ),
      });
      
      setShowUndoToast(true);
      
      // Hide undo toast after 5 seconds
      setTimeout(() => {
        setShowUndoToast(false);
        setLastDeletedProject(null);
      }, 5000);
    }
  };

  const cancelDelete = () => {
    setProjectToDelete(null);
  };

  const handleViewProject = (slug: string) => {
    window.open(`/projects/${slug}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Projects</h1>
          <p className="text-slate-400 mt-1">
            Manage your portfolio projects
          </p>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium flex gap-2 self-start"
          onClick={() => navigate('/admin/projects/new')}
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      <Separator className="bg-slate-800/50" />

      {/* Search and filters bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#0D1425]/70 border-slate-800 text-white w-full focus-visible:ring-blue-600"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="hidden sm:flex h-10 w-10 border-slate-800 bg-[#0D1425]/70 text-slate-400 hover:text-white hover:bg-blue-600/10 hover:border-blue-700/50"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Projects table */}
      {filteredProjects.length > 0 ? (
        <Card className="border-slate-800 bg-[#0D1425]/70 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-900/30">
              <TableRow className="hover:bg-slate-800/30 border-b border-slate-800/50">
                <TableHead className="text-slate-400 font-medium">Project</TableHead>
                <TableHead className="text-slate-400 font-medium hidden md:table-cell">Technologies</TableHead>
                <TableHead className="text-slate-400 font-medium hidden lg:table-cell">Added</TableHead>
                <TableHead className="text-slate-400 font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.slug} className="hover:bg-slate-800/20 border-b border-slate-800/50">
                  <TableCell>
                    <div className="font-medium text-white">{project.title}</div>
                    <div className="text-sm text-slate-400 hidden sm:block">{project.description.slice(0, 60)}...</div>
                    <div className="flex items-center gap-2 mt-1 md:hidden">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-700/50">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="bg-slate-800/50 text-slate-400 border-slate-700/50">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-blue-900/20 text-blue-300 border-blue-700/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-slate-400">
                    {project.date ? format(new Date(project.date), 'MMM d, yyyy') : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="hidden sm:flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-blue-400 hover:bg-blue-900/20"
                          onClick={() => handleViewProject(project.slug)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-blue-400 hover:bg-blue-900/20"
                          onClick={() => navigate(`/admin/projects/edit/${project.slug}`)}
                        >
                          <PenLine className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-red-400 hover:bg-red-900/20"
                          onClick={() => handleDelete(project.slug)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Mobile menu */}
                      <div className="sm:hidden">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800/70">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800 text-slate-200">
                            <DropdownMenuItem 
                              onClick={() => handleViewProject(project.slug)}
                              className="hover:bg-slate-800 cursor-pointer gap-2"
                            >
                              <Eye className="h-4 w-4 text-slate-400" /> View
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => navigate(`/admin/projects/edit/${project.slug}`)}
                              className="hover:bg-slate-800 cursor-pointer gap-2"
                            >
                              <PenLine className="h-4 w-4 text-slate-400" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleDelete(project.slug)}
                              className="hover:bg-red-900/30 text-red-400 cursor-pointer gap-2"
                            >
                              <Trash2 className="h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <div className="text-center py-12 border border-dashed border-slate-800 rounded-lg">
          <div className="w-16 h-16 rounded-full bg-slate-800/30 mx-auto flex items-center justify-center mb-4">
            <FileSymlink className="h-7 w-7 text-slate-600" />
          </div>
          {searchQuery ? (
            <>
              <h3 className="text-lg font-medium text-white mb-1">No matching projects</h3>
              <p className="text-slate-400 mb-4">
                No projects found matching "{searchQuery}"
              </p>
              <Button 
                variant="outline" 
                className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700"
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </Button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-medium text-white mb-1">No projects yet</h3>
              <p className="text-slate-400 mb-4">
                Create your first project to display in your portfolio
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/admin/projects/new')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add your first project
              </Button>
            </>
          )}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={projectToDelete !== null} onOpenChange={(open) => !open && cancelDelete()}>
        <AlertDialogContent className="bg-slate-900 border-slate-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              This action cannot be undone. This will permanently delete the project
              and remove it from your portfolio.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectList; 