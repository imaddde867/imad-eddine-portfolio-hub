import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAdminStore } from "@/data/adminStore";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Save,
  X,
  UploadCloud,
  Calendar,
  AlertCircle,
  Eye,
  ArrowLeft,
  Trash2,
  Clock,
  BookOpen,
  Tag,
} from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";

// Predefined categories
const BLOG_CATEGORIES = [
  "AI",
  "Machine Learning",
  "Data Science",
  "Cloud",
  "DevOps",
  "Web Development",
  "Programming",
  "Technology",
  "Career",
  "Other",
];

// Form schema for validation
const blogSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  excerpt: z
    .string()
    .min(10, {
      message: "Excerpt must be at least 10 characters.",
    })
    .max(200, {
      message: "Excerpt must be at most 200 characters.",
    }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  date: z.date(),
  readTime: z.string().min(1, {
    message: "Read time is required.",
  }),
  thumbnail: z.any().optional(),
  status: z.enum(["draft", "published"]).default("published"),
});

type BlogFormValues = z.infer<typeof blogSchema>;

// Estimated read time in minutes based on word count
const calculateReadTime = (content: string): string => {
  const words = content.trim().split(/\s+/).length;
  const readTimeMin = Math.max(1, Math.ceil(words / 200));
  return `${readTimeMin} min read`;
};

const BlogForm: React.FC = () => {
  const { posts, addPost, updatePost, setActivePost } = useAdminStore();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const isEditMode = slug !== undefined && slug !== "new";
  const post = isEditMode ? posts.find((p) => p.slug === slug) : null;

  // For image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Content editor tab state
  const [activeTab, setActiveTab] = useState("write");

  // Form setup with default values
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: post?.title || "",
      excerpt: post?.excerpt || "",
      content: post?.content || "",
      category: post?.category || "",
      date: post?.date ? new Date(post.date) : new Date(),
      readTime: post?.readTime || "5 min read",
      status: "published",
    },
  });

  // Auto-update read time when content changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "content") {
        const content = value.content as string;
        if (content && content.length > 0) {
          form.setValue("readTime", calculateReadTime(content), {
            shouldValidate: true,
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  // Check for restore parameter to undo a deleted post
  useEffect(() => {
    const restoreSlug = searchParams.get("restore");
    if (restoreSlug) {
      // This would typically fetch the deleted post from a backup or trash
      // For now, we just show a notification
      toast({
        title: "Restore not implemented",
        description:
          "In a real app, this would restore the deleted post from a backup.",
        variant: "destructive",
      });
    }
  }, [searchParams, toast]);

  // Set active post when in edit mode
  useEffect(() => {
    if (isEditMode && slug) {
      setActivePost(slug);
    } else {
      setActivePost(null);
    }

    // If post has thumbnail, set preview
    if (post?.thumbnail) {
      setImagePreview(post.thumbnail);
    }

    return () => {
      setActivePost(null);
    };
  }, [isEditMode, slug, post, setActivePost]);

  const onSubmit = (data: BlogFormValues) => {
    // Handle image upload (in a real app, this would upload to a server or CDN)
    let thumbnailUrl = post?.thumbnail || null;
    if (imageFile) {
      // Simulate image upload - in a real app, this would be an actual upload
      // For demo purposes, we'll use a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          thumbnailUrl = e.target.result as string;

          // Now continue with saving the post
          savePost(data, thumbnailUrl);
        }
      };
      reader.readAsDataURL(imageFile);
    } else {
      // No new image, save with existing or no image
      savePost(data, thumbnailUrl);
    }
  };

  const savePost = (data: BlogFormValues, thumbnailUrl: string | null) => {
    // Prepare post data
    const postData = {
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      date: format(data.date, "yyyy-MM-dd"),
      readTime: data.readTime,
      thumbnail: thumbnailUrl,
    };

    if (isEditMode && slug) {
      // Update existing post
      updatePost(slug, postData);
      toast({
        title: "Post updated",
        description: `"${data.title}" has been successfully updated.`,
      });
    } else {
      // Add new post
      addPost(postData);
      toast({
        title: "Post created",
        description: `"${data.title}" has been successfully published.`,
      });
    }

    // Navigate back to posts list
    navigate("/admin/blog");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (3MB max)
      if (file.size > 3 * 1024 * 1024) {
        toast({
          title: "Image too large",
          description: "Please upload an image smaller than 3MB.",
          variant: "destructive",
        });
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
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
      form.setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    form.setValue("thumbnail", undefined, { shouldValidate: true });
  };

  const handlePreviewClick = () => {
    // In a real app, this would open a preview in a new window or modal
    toast({
      title: "Preview",
      description:
        "In a real app, this would show a complete rendered preview of your post.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {isEditMode ? "Edit Blog Post" : "Create New Post"}
          </h1>
          <p className="text-[#40C4FF]/70 mt-1">
            {isEditMode
              ? "Update your existing blog post"
              : "Write a new blog post for your readers"}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/blog")}
          className="bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Posts
        </Button>
      </div>

      <Separator className="bg-[#40C4FF]/10" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column - Main content */}
            <div className="md:col-span-2 space-y-6">
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Post Details</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Basic information about your blog post
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
                            placeholder="Enter a compelling title"
                            {...field}
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white"
                          />
                        </FormControl>
                        <FormDescription className="text-[#40C4FF]/60">
                          A clear, engaging title for your blog post
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write a brief summary of your post"
                            {...field}
                            className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white resize-none h-24"
                          />
                        </FormControl>
                        <FormDescription className="text-[#40C4FF]/60">
                          A short summary (100-200 characters) that will appear
                          in blog cards and previews
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Write and preview your blog post content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs
                    defaultValue="write"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full bg-black/40 border border-[#40C4FF]/20">
                      <TabsTrigger
                        value="write"
                        className="data-[state=active]:bg-[#40C4FF]/20 data-[state=active]:text-white"
                      >
                        Write
                      </TabsTrigger>
                      <TabsTrigger
                        value="preview"
                        className="data-[state=active]:bg-[#40C4FF]/20 data-[state=active]:text-white"
                        onClick={handlePreviewClick}
                      >
                        Preview
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="write" className="mt-4">
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="Write your blog post content here. You can use Markdown for formatting."
                                {...field}
                                className="bg-black/60 border-[#40C4FF]/40 focus:border-[#40C4FF] text-white resize-none min-h-[300px]"
                              />
                            </FormControl>
                            <FormDescription className="text-[#40C4FF]/60">
                              The main content of your post. Use headings,
                              lists, and formatting to organize your ideas.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="mt-2 text-xs text-[#40C4FF]/60">
                        <p>Estimated read time: {form.watch("readTime")}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="preview" className="mt-4">
                      <div className="bg-black/60 border border-[#40C4FF]/40 rounded-md p-4 min-h-[300px] prose prose-invert prose-blue max-w-none">
                        <h2 className="text-2xl font-bold mb-4">
                          {form.watch("title") || "Post Title"}
                        </h2>
                        <p className="mb-6 text-[#40C4FF]/70">
                          {form.watch("excerpt") ||
                            "Post excerpt will appear here..."}
                        </p>
                        <div className="whitespace-pre-wrap">
                          {form.watch("content") ||
                            "Your content will be rendered here..."}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Meta info, image, and submit */}
            <div className="space-y-6">
              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Configure your post metadata
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-black/60 border-[#40C4FF]/40 text-white">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-[#40C4FF]/20 text-white">
                            {BLOG_CATEGORIES.map((category) => (
                              <SelectItem
                                key={category}
                                value={category}
                                className="focus:bg-[#40C4FF]/20 focus:text-white"
                              >
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-[#40C4FF]/60">
                          The main topic category for this post
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Publication Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "pl-3 text-left font-normal bg-black/60 border-[#40C4FF]/40 hover:bg-black/80 text-white w-full",
                                  !field.value && "text-muted-foreground",
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
                          When the post will be or was published
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border border-[#40C4FF]/20 p-3 bg-black/40">
                        <div className="space-y-0.5">
                          <FormLabel>Publishing Status</FormLabel>
                          <FormDescription className="text-[#40C4FF]/60">
                            {field.value === "published"
                              ? "Post will be visible to all visitors"
                              : "Post will be saved as a draft"}
                          </FormDescription>
                        </div>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <span
                              className={
                                field.value === "draft"
                                  ? "text-[#40C4FF]/60"
                                  : "text-[#40C4FF]"
                              }
                            >
                              {field.value === "published"
                                ? "Published"
                                : "Draft"}
                            </span>
                            <Switch
                              checked={field.value === "published"}
                              onCheckedChange={(checked) => {
                                field.onChange(checked ? "published" : "draft");
                              }}
                              className="data-[state=checked]:bg-[#40C4FF]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                  <CardDescription className="text-[#40C4FF]/70">
                    Upload a header image for your post
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center">
                    {imagePreview ? (
                      <div className="relative w-full">
                        <img
                          src={imagePreview}
                          alt="Post featured image"
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
                      <div
                        className="w-full h-48 border-2 border-dashed border-[#40C4FF]/30 rounded-md flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:border-[#40C4FF]/60 transition-colors duration-200"
                        onClick={() =>
                          document.getElementById("post-image")?.click()
                        }
                      >
                        <UploadCloud className="h-10 w-10 text-[#40C4FF]/50 mb-2" />
                        <p className="text-[#40C4FF]/80 font-medium">
                          Upload Image
                        </p>
                        <p className="text-[#40C4FF]/60 text-xs mt-1">
                          PNG, JPG (max 3MB)
                        </p>
                      </div>
                    )}

                    <input
                      id="post-image"
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
                        onClick={() =>
                          document.getElementById("post-image")?.click()
                        }
                      >
                        Select Image
                      </Button>
                    )}
                  </div>

                  <FormDescription className="text-[#40C4FF]/60 text-center mt-4">
                    Recommended size: 800×400px
                  </FormDescription>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-[#40C4FF]/20 text-white">
                <CardContent className="pt-6">
                  <Alert className="bg-[#40C4FF]/5 border-[#40C4FF]/20 mb-6">
                    <AlertCircle className="h-4 w-4 text-[#40C4FF]" />
                    <AlertDescription className="text-[#40C4FF]/80 text-sm">
                      {isEditMode
                        ? "Your changes will be saved and immediately visible on your blog."
                        : form.watch("status") === "published"
                          ? "Your post will be published immediately."
                          : "Your post will be saved as a draft and can be published later."}
                    </AlertDescription>
                  </Alert>

                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="bg-[#40C4FF] hover:bg-[#40C4FF]/80 text-black font-medium w-full gap-2"
                      disabled={form.formState.isSubmitting}
                    >
                      <Save className="h-4 w-4" />
                      {isEditMode
                        ? "Update Post"
                        : form.watch("status") === "published"
                          ? "Publish Post"
                          : "Save Draft"}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white w-full gap-2"
                      onClick={() => navigate("/admin/blog")}
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

export default BlogForm;
