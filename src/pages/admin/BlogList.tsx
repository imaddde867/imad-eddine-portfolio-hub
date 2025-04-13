import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/data/adminStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  PenLine,
  Trash2,
  Eye,
  MoreHorizontal,
  Search,
  BookOpen,
  Clock,
  Tag,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const BlogList: React.FC = () => {
  const { posts, deletePost } = useAdminStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [lastDeletedPost, setLastDeletedPost] = useState<string | null>(null);
  const [showUndoToast, setShowUndoToast] = useState(false);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(searchLower);
    const excerptMatch = post.excerpt.toLowerCase().includes(searchLower);
    const categoryMatch = post.category.toLowerCase().includes(searchLower);

    return titleMatch || excerptMatch || categoryMatch;
  });

  const handleDelete = (slug: string) => {
    setPostToDelete(slug);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      const postTitle =
        posts.find((p) => p.slug === postToDelete)?.title || "Post";

      // Store information for undo
      setLastDeletedPost(postToDelete);

      // Delete post
      deletePost(postToDelete);

      // Close dialog
      setPostToDelete(null);

      // Show toast with undo option
      toast({
        title: "Post deleted",
        description: `"${postTitle}" has been removed.`,
        action: (
          <Button
            variant="outline"
            size="sm"
            className="bg-[#40C4FF]/10 border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/20"
            onClick={() =>
              navigate(`/admin/blog/new?restore=${lastDeletedPost}`)
            }
          >
            Undo
          </Button>
        ),
      });

      setShowUndoToast(true);

      // Hide undo toast after 5 seconds
      setTimeout(() => {
        setShowUndoToast(false);
        setLastDeletedPost(null);
      }, 5000);
    }
  };

  const cancelDelete = () => {
    setPostToDelete(null);
  };

  const handleViewPost = (slug: string) => {
    window.open(`/blog/${slug}`, "_blank");
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (e) {
      return "Invalid date";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <p className="text-[#40C4FF]/70 mt-1">Manage your blog content</p>
        </div>
        <Button
          className="bg-[#40C4FF] hover:bg-[#40C4FF]/80 text-black font-medium flex gap-2 self-start"
          onClick={() => navigate("/admin/blog/new")}
        >
          <Plus className="h-4 w-4" />
          Add Post
        </Button>
      </div>

      <Separator className="bg-[#40C4FF]/10" />

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#40C4FF]/60" />
        <Input
          type="search"
          placeholder="Search posts by title, excerpt, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-black/30 border-[#40C4FF]/30 text-white w-full md:max-w-md"
        />
      </div>

      {/* Posts table */}
      {filteredPosts.length > 0 ? (
        <div className="rounded-md border border-[#40C4FF]/20 overflow-hidden">
          <Table>
            <TableHeader className="bg-black/40">
              <TableRow className="hover:bg-black/20 border-b border-[#40C4FF]/20">
                <TableHead className="text-[#40C4FF] font-medium">
                  Post
                </TableHead>
                <TableHead className="text-[#40C4FF] font-medium hidden md:table-cell">
                  Category
                </TableHead>
                <TableHead className="text-[#40C4FF] font-medium hidden lg:table-cell">
                  Published
                </TableHead>
                <TableHead className="text-[#40C4FF] font-medium text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow
                  key={post.slug}
                  className="hover:bg-[#40C4FF]/5 border-b border-[#40C4FF]/10"
                >
                  <TableCell className="min-w-[250px]">
                    <div className="font-medium text-white">{post.title}</div>
                    <div className="text-sm text-[#40C4FF]/70 hidden sm:block">
                      {post.excerpt.slice(0, 60)}...
                    </div>
                    <div className="flex items-center gap-2 mt-1 md:hidden">
                      <Badge
                        variant="outline"
                        className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30 flex items-center gap-1"
                      >
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30 flex items-center gap-1"
                      >
                        <Clock className="h-3 w-3" />
                        {formatDate(post.date)}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge
                      variant="outline"
                      className="bg-[#40C4FF]/10 text-[#40C4FF]/80 border-[#40C4FF]/30"
                    >
                      {post.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-[#40C4FF]/70">
                    {formatDate(post.date)}
                    <div className="text-xs text-[#40C4FF]/50 mt-1">
                      {post.readTime}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="hidden sm:flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#40C4FF]/70 hover:text-[#40C4FF] hover:bg-[#40C4FF]/10"
                          onClick={() => handleViewPost(post.slug)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#40C4FF]/70 hover:text-[#40C4FF] hover:bg-[#40C4FF]/10"
                          onClick={() =>
                            navigate(`/admin/blog/edit/${post.slug}`)
                          }
                        >
                          <PenLine className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-400/70 hover:text-red-400 hover:bg-red-500/10"
                          onClick={() => handleDelete(post.slug)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="sm:hidden">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-[#40C4FF]/70"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-black/80 backdrop-blur-lg border-[#40C4FF]/20 text-white"
                          >
                            <DropdownMenuItem
                              className="flex items-center gap-2 focus:bg-[#40C4FF]/10 cursor-pointer"
                              onClick={() => handleViewPost(post.slug)}
                            >
                              <Eye className="h-4 w-4 text-[#40C4FF]" />
                              <span>View</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2 focus:bg-[#40C4FF]/10 cursor-pointer"
                              onClick={() =>
                                navigate(`/admin/blog/edit/${post.slug}`)
                              }
                            >
                              <PenLine className="h-4 w-4 text-[#40C4FF]" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2 focus:bg-red-500/10 cursor-pointer text-red-400"
                              onClick={() => handleDelete(post.slug)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span>Delete</span>
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
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-[#40C4FF]/20 rounded-lg bg-black/20">
          <div className="mx-auto flex flex-col items-center max-w-md">
            {searchQuery ? (
              <>
                <Search className="h-12 w-12 text-[#40C4FF]/30 mb-4" />
                <h3 className="text-xl font-medium text-white">
                  No matching posts
                </h3>
                <p className="text-[#40C4FF]/60 mt-2">
                  No posts match your search criteria "{searchQuery}". Try
                  searching with different terms or clear the search.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-[#40C4FF]/10 border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/20"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </>
            ) : (
              <>
                <BookOpen className="h-12 w-12 text-[#40C4FF]/30 mb-4" />
                <h3 className="text-xl font-medium text-white">
                  No blog posts yet
                </h3>
                <p className="text-[#40C4FF]/60 mt-2">
                  You haven't published any blog posts yet. Create your first
                  post to get started.
                </p>
                <Button
                  className="mt-4 bg-[#40C4FF] hover:bg-[#40C4FF]/80 text-black font-medium"
                  onClick={() => navigate("/admin/blog/new")}
                >
                  Write Your First Post
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Delete confirmation dialog */}
      <AlertDialog open={postToDelete !== null} onOpenChange={cancelDelete}>
        <AlertDialogContent className="bg-black/90 border border-[#40C4FF]/20 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-[#40C4FF]/70">
              This will permanently delete this blog post. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border-[#40C4FF]/30 text-white hover:bg-[#40C4FF]/10 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500/80 hover:bg-red-500 text-white"
              onClick={confirmDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BlogList;
