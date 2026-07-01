import { blogPosts } from "../blog-posts";

export { blogPosts };
export type { BlogPost } from "./types";

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
