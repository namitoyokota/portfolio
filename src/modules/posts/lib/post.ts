/**
 * Represents an object returned by Hashnode and Notes APIs.
 */
export interface Post {
  slug: string;
  title: string;
  reactionCount: number;
  url: string;
  subtitle: string;
  publishedAt: string;
}
