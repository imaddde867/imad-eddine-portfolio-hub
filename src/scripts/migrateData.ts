import { PrismaClient } from '@prisma/client';
import { sampleProjects, samplePosts } from '../data/sampleData';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting data migration...');

  // Migrate projects
  console.log('Migrating projects...');
  for (const project of sampleProjects) {
    try {
      await prisma.project.create({
        data: {
          ...project,
          date: new Date(project.date || new Date()),
        },
      });
      console.log(`Migrated project: ${project.title}`);
    } catch (error) {
      console.error(`Failed to migrate project ${project.title}:`, error);
    }
  }

  // Migrate blog posts
  console.log('Migrating blog posts...');
  for (const post of samplePosts) {
    try {
      await prisma.blogPost.create({
        data: {
          ...post,
          date: new Date(post.date),
        },
      });
      console.log(`Migrated blog post: ${post.title}`);
    } catch (error) {
      console.error(`Failed to migrate blog post ${post.title}:`, error);
    }
  }

  console.log('Data migration completed!');
}

main()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 