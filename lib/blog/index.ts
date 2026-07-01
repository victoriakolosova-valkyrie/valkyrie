import { blogPosts as rawBlogPosts } from "../blog-posts";

export type { BlogPost } from "./types";

export const blogPosts = [...rawBlogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
