import { create } from "zustand";
import { ProjectData, PostData } from "./sampleData";
import { stringToSlug } from "@/lib/utils";

interface AdminStore {
  projects: ProjectData[];
  posts: PostData[];
  activePost: string | null;
  isLoading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  fetchPosts: () => Promise<void>;
  addProject: (project: Omit<ProjectData, "slug">) => Promise<void>;
  updateProject: (slug: string, project: Partial<Omit<ProjectData, "slug">>) => Promise<void>;
  deleteProject: (slug: string) => Promise<void>;
  addPost: (post: Omit<PostData, "slug">) => Promise<void>;
  updatePost: (slug: string, post: Partial<Omit<PostData, "slug">>) => Promise<void>;
  deletePost: (slug: string) => Promise<void>;
  setActivePost: (slug: string | null) => void;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const useAdminStore = create<AdminStore>()((set, get) => ({
  projects: [],
  posts: [],
  activePost: null,
  isLoading: false,
  error: null,

  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      const projects = await response.json();
      set({ projects, isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch projects', isLoading: false });
    }
  },

  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog-posts`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const posts = await response.json();
      set({ posts, isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch posts', isLoading: false });
    }
  },

  addProject: async (project) => {
    set({ isLoading: true, error: null });
    try {
      const slug = stringToSlug(project.title);
      const response = await fetch(`${API_BASE_URL}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...project, slug }),
      });
      if (!response.ok) throw new Error('Failed to create project');
      await get().fetchProjects();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create project', isLoading: false });
    }
  },

  updateProject: async (slug, project) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!response.ok) throw new Error('Failed to update project');
      await get().fetchProjects();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to update project', isLoading: false });
    }
  },

  deleteProject: async (slug) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${slug}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete project');
      await get().fetchProjects();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to delete project', isLoading: false });
    }
  },

  addPost: async (post) => {
    set({ isLoading: true, error: null });
    try {
      const slug = stringToSlug(post.title);
      const response = await fetch(`${API_BASE_URL}/api/blog-posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...post, slug }),
      });
      if (!response.ok) throw new Error('Failed to create post');
      await get().fetchPosts();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create post', isLoading: false });
    }
  },

  updatePost: async (slug, post) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog-posts/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error('Failed to update post');
      await get().fetchPosts();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to update post', isLoading: false });
    }
  },

  deletePost: async (slug) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog-posts/${slug}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      await get().fetchPosts();
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to delete post', isLoading: false });
    }
  },

  setActivePost: (slug) => set({ activePost: slug }),
}));
