import { create } from "zustand";
import { persist } from "zustand/middleware";
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
  activePost: string | null;
  addProject: (project: Omit<ProjectData, "slug">) => void;
  updateProject: (
    slug: string,
    project: Partial<Omit<ProjectData, "slug">>,
  ) => void;
  deleteProject: (slug: string) => void;
  addPost: (post: Omit<PostData, "slug">) => void;
  updatePost: (slug: string, post: Partial<Omit<PostData, "slug">>) => void;
  deletePost: (slug: string) => void;
  setActivePost: (slug: string | null) => void;
}

// Use create from zustand to create a store with persistence
export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      // Initial state - Using the updated projects instead of sample projects
      projects: updatedProjects,
      posts: samplePosts,
      activePost: null,

      // Add a new project
      addProject: (project) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              ...project,
              slug: stringToSlug(project.title),
              _lastUpdated: new Date().getTime(),
            },
          ],
        })),

      // Update an existing project
      updateProject: (slug, project) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.slug === slug
              ? {
                  ...p,
                  ...project,
                  _lastUpdated: new Date().getTime(),
                }
              : p
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
              _lastUpdated: new Date().getTime(),
            },
          ],
        })),

      // Update an existing post
      updatePost: (slug, post) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.slug === slug
              ? {
                  ...p,
                  ...post,
                  _lastUpdated: new Date().getTime(),
                }
              : p
          ),
        })),

      // Delete a post
      deletePost: (slug) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.slug !== slug),
        })),

      // Set active post
      setActivePost: (slug) =>
        set(() => ({
          activePost: slug,
        })),
    }),
    {
      name: "admin-storage",
    }
  )
);
