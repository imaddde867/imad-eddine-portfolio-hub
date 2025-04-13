import { create } from "zustand";
import {
  sampleProjects,
  samplePosts,
  ProjectData,
  PostData,
} from "./sampleData";
import { updatedProjects } from "./updatedProjects";

// Function to convert string to slug
export const stringToSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

interface AdminStore {
  projects: ProjectData[];
  posts: PostData[];
  addProject: (project: Omit<ProjectData, "slug">) => void;
  updateProject: (
    slug: string,
    project: Partial<Omit<ProjectData, "slug">>,
  ) => void;
  deleteProject: (slug: string) => void;
  addPost: (post: Omit<PostData, "slug">) => void;
  updatePost: (slug: string, post: Partial<Omit<PostData, "slug">>) => void;
  deletePost: (slug: string) => void;
}

// Use create from zustand to create a store
export const useAdminStore = create<AdminStore>((set) => ({
  // Initial state - Using the updated projects instead of sample projects
  projects: updatedProjects,
  posts: samplePosts,

  // Add a new project
  addProject: (project) =>
    set((state) => ({
      projects: [
        ...state.projects,
        {
          ...project,
          slug: stringToSlug(project.title),
        },
      ],
    })),

  // Update an existing project
  updateProject: (slug, project) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.slug === slug ? { ...p, ...project } : p,
      ),
    })),

  // Delete a project
  deleteProject: (slug) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.slug !== slug),
    })),

  // Add a new post
  addPost: (post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          slug: stringToSlug(post.title),
        },
      ],
    })),

  // Update an existing post
  updatePost: (slug, post) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.slug === slug ? { ...p, ...post } : p)),
    })),

  // Delete a post
  deletePost: (slug) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.slug !== slug),
    })),
}));
