import { blogPosts as rawBlogPosts } from "../blog-posts";
import { post as voiceFirstDailyReflectionPost } from "./posts/2026-07-01-voice-first-ai-companion-for-daily-reflection";

export type { BlogPost } from "./types";

const separatedPosts = [
  voiceFirstDailyReflectionPost,
];

const separatedSlugs = new Set(separatedPosts.map((post) => post.slug));

export const blogPosts = [
  ...separatedPosts,
  ...rawBlogPosts.filter((post) => !separatedSlugs.has(post.slug)),
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return getBlogPost(slug);
}
