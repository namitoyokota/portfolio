/**
 * Represents an object returned by Hashnode API.
 */
export interface Post {
  slug: string;
  title: string;
  reactionCount: number;
  url: string;
  subtitle: string;
  publishedAt: string;
}
