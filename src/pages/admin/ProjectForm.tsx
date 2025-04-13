import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAdminStore } from '@/data/adminStore';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Save,
  X,
  Plus,
  Trash2,
  UploadCloud,
  Calendar,
  AlertCircle,
  Eye,
  ArrowLeft,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Form schema for validation
const projectSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }).max(500, {
    message: 'Description must be at most 500 characters.',
  }),
  longDescription: z.string().min(10, {
    message: 'Detailed description must be at least 10 characters.',
  }).optional(),
  repoUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  demoUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  date: z.date().optional(),
  technologies: z.array(z.string()).min(1, {
    message: 'Please add at least one technology.',
  }),
  image: z.any().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const ProjectForm: React.FC = () => {
  const { projects, addProject, updateProject } = useAdminStore();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const isEditMode = slug !== undefined && slug !== 'new';
  const project = isEditMode 
    ? projects.find(p => p.slug === slug) 
    : null;
  
  // For technology tags input
  const [newTag, setNewTag] = useState('');
  
  // For image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  // Form setup with default values
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      longDescription: project?.longDescription || '',
      repoUrl: project?.repoUrl || '',
      demoUrl: project?.demoUrl || '',
      technologies: project?.technologies || [],
      date: project?.date ? new Date(project?.date) : new Date(),
      image: undefined,
    },
  });
  
  // Check for restore parameter to undo a deleted project
  useEffect(() => {
    const restoreSlug = searchParams.get('restore');
    if (restoreSlug) {
      // This would typically fetch the deleted project from a backup or trash
      // For now, we just show a notification
      toast({
        title: "Restore not implemented",
        description: "In a real app, this would restore the deleted project from a backup.",
        variant: "destructive",
      });
    }
  }, [searchParams, toast]);
  
  // Update form when project changes
  useEffect(() => {
    if (project) {
      // Reset form with project values when in edit mode
      form.reset({
        title: project.title,
        description: project.description,
        longDescription: project.longDescription || '',
        repoUrl: project.repoUrl || '',
        demoUrl: project.demoUrl || '',
        technologies: project.technologies,
        date: project.date ? new Date(project.date) : new Date(),
        image: undefined,
      });
      
      // Set image preview if project has an image
      if (project.image) {
        setImagePreview(project.image);
      }
    }
  }, [project, form]);
  
  const onSubmit = (data: ProjectFormValues) => {
    // Handle image upload (in a real app, this would upload to a server or CDN)
    let imageUrl = project?.image || null;
    if (imageFile) {
      // Simulate image upload - in a real app, this would be an actual upload
      // For demo purposes, we'll use a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          imageUrl = e.target.result as string;
          
          // Now continue with saving the project
          saveProject(data, imageUrl);
        }
      };
      reader.readAsDataURL(imageFile);
    } else {
      // No new image, save with existing or no image
      saveProject(data, imageUrl);
    }
  };
  
  const saveProject = (data: ProjectFormValues, imageUrl: string | null) => {
    // Prepare project data
    const projectData = {
      title: data.title,
      description: data.description,
      longDescription: data.longDescription || '',
      repoUrl: data.repoUrl || '',
      demoUrl: data.demoUrl || '',
      technologies: data.technologies,
      date: data.date ? format(data.date, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
      image: imageUrl,
    };
    
    if (isEditMode && slug) {
      // Update existing project
      updateProject(slug, projectData);
      toast({
        title: "Project updated",
        description: `"${data.title}" has been successfully updated.`,
      });
    } else {
      // Add new project
      addProject(projectData);
      toast({
        title: "Project created",
        description: `"${data.title}" has been successfully added to your portfolio.`,
      });
    }
    
    // Navigate back to projects list
    navigate('/admin/projects');
  };
  
  const handleAddTag = () => {
    if (newTag.trim() && !form.getValues().technologies.includes(newTag.trim())) {
      const updatedTags = [...form.getValues().technologies, newTag.trim()];
      form.setValue('technologies', updatedTags, { shouldValidate: true });
      setNewTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = form.getValues().technologies.filter(tag => tag !== tagToRemove);
    form.setValue('technologies', updatedTags, { shouldValidate: true });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "Image too large",
          description: "Please upload an image smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a valid image file (JPEG, PNG).",
          variant: "destructive",
        });
        return;
      }
      
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Update form value
      form.setValue('image', file, { shouldValidate: true });
    }
  };
  
  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    form.setValue('image', undefined, { shouldValidate: true });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">{isEditMode ? 'Edit Project' : 'Add New Project'}</h1>
          <p className="text-[#40C4FF]/70 mt-1">
            {isEditMode 
              ? 'Update the details of your existing project' 
              : 'Add a new project to your portfolio'}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate('/admin/projects')}
          className="bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </div>

      <Separator className="bg-[#40C4FF]/10" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column - Basic info */}
            <div className="md:col-span-2 space-y-6">
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Basic information about your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter project title" 
                            {...field} 
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white"
                          />
                        </FormControl>
                        <FormDescription className="text-[#40C4FF]/60">
                          A concise, descriptive title for your project
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief overview of your project" 
                            {...field} 
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white resize-none h-24"
                          />
                        </FormControl>
                        <FormDescription className="text-[#40C4FF]/60">
                          A concise summary (200-500 characters) that will appear in the project card
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="longDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Full explanation of your project, including goals, challenges, and outcomes" 
                            {...field} 
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white resize-none h-40"
                          />
                        </FormControl>
                        <FormDescription className="text-[#40C4FF]/60">
                          Detailed information that will be displayed on the project detail page
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Technologies & Links</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Tools, technologies, and external links
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="technologies"
                    render={() => (
                      <FormItem>
                        <FormLabel>Technologies & Skills</FormLabel>
                        <div className="flex flex-wrap gap-2 p-3 bg-black/40 rounded-md border border-[#40C4FF]/30 min-h-14">
                          {form.getValues().technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-[#40C4FF]/20 hover:bg-[#40C4FF]/30 text-white gap-1.5 px-3 py-1.5"
                            >
                              {tech}
                              <button 
                                type="button" 
                                onClick={() => handleRemoveTag(tech)} 
                                className="text-white hover:bg-[#40C4FF]/40 rounded-full ml-1"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                          {form.getValues().technologies.length === 0 && (
                            <span className="text-[#40C4FF]/40 text-sm">No technologies added</span>
                          )}
                        </div>
                        
                        <div className="flex mt-3 gap-2">
                          <Input 
                            placeholder="Add technology (e.g., React, Python)" 
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddTag();
                              }
                            }}
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white"
                          />
                          <Button 
                            type="button" 
                            onClick={handleAddTag}
                            className="bg-[#40C4FF] hover:bg-[#40C4FF]/80 text-black"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormDescription className="text-[#40C4FF]/60">
                          Add key technologies, frameworks, or skills used in this project
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="repoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Repository URL (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://github.com/yourusername/repo" 
                              {...field} 
                              className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white"
                            />
                          </FormControl>
                          <FormDescription className="text-[#40C4FF]/60">
                            Link to your GitHub or other repository
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="demoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Demo URL (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://your-demo-link.com" 
                              {...field} 
                              className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white"
                            />
                          </FormControl>
                          <FormDescription className="text-[#40C4FF]/60">
                            Link to a live demo or deployed project
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Completion Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "pl-3 text-left font-normal bg-black/60 border-[#40C4FF]/40 hover:bg-black/80 text-white w-full sm:w-[240px]",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <Calendar className="mr-2 h-4 w-4 text-[#40C4FF]" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-black/90 border-[#40C4FF]/20">
                            <CalendarComponent
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              className="text-white"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription className="text-[#40C4FF]/60">
                          When the project was completed
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
            
            {/* Right column - Image, preview and submit */}
            <div className="space-y-6">
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Project Image</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Thumbnail for your project card
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center">
                    {imagePreview ? (
                      <div className="relative w-full">
                        <img 
                          src={imagePreview} 
                          alt="Project thumbnail" 
                          className="w-full h-48 object-cover rounded-md border border-[#40C4FF]/30"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 bg-black/70 hover:bg-red-800/90 border border-[#40C4FF]/20"
                          onClick={removeImage}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="w-full h-48 border-2 border-dashed border-[#40C4FF]/30 rounded-md flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:border-[#40C4FF]/60 transition-colors duration-200" onClick={() => document.getElementById('project-image')?.click()}>
                        <UploadCloud className="h-10 w-10 text-[#40C4FF]/50 mb-2" />
                        <p className="text-[#40C4FF]/80 font-medium">Upload Image</p>
                        <p className="text-[#40C4FF]/60 text-xs mt-1">PNG, JPG (max 2MB)</p>
                      </div>
                    )}
                    
                    <input
                      id="project-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    
                    {!imagePreview && (
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4 bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white"
                        onClick={() => document.getElementById('project-image')?.click()}
                      >
                        Select Image
                      </Button>
                    )}
                  </div>
                  
                  <FormDescription className="text-[#40C4FF]/60 text-center mt-4">
                    Recommended size: 400×300px
                  </FormDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    How your project will appear
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-[150px] flex items-center justify-center">
                  {form.getValues().title ? (
                    <div className="border border-[#40C4FF]/20 bg-black/40 rounded-lg p-4 w-full">
                      <div className="font-medium text-lg text-white">{form.getValues().title}</div>
                      <div className="text-sm text-[#40C4FF]/70 mt-1">
                        {form.getValues().description ? form.getValues().description.slice(0, 100) + '...' : 'No description added yet'}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {form.getValues().technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {form.getValues().technologies.length > 3 && (
                          <Badge variant="outline" className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30">
                            +{form.getValues().technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-[#40C4FF]/60">
                      <p>Fill in the project details to see a preview</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardContent className="pt-6">
                  <Alert className="bg-[#40C4FF]/5 border-[#40C4FF]/20 mb-6">
                    <AlertCircle className="h-4 w-4 text-[#40C4FF]" />
                    <AlertDescription className="text-[#40C4FF]/80 text-sm">
                      {isEditMode 
                        ? 'Changes will be immediately visible on your portfolio.' 
                        : 'Your new project will be added to your portfolio immediately.'}
                    </AlertDescription>
                  </Alert>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      type="submit" 
                      className="bg-[#40C4FF] hover:bg-[#40C4FF]/80 text-black font-medium w-full gap-2"
                      disabled={form.formState.isSubmitting}
                    >
                      <Save className="h-4 w-4" />
                      {isEditMode ? 'Update Project' : 'Save Project'}
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white w-full gap-2"
                      onClick={() => navigate('/admin/projects')}
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm; 