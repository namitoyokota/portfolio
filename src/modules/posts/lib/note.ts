/**
 * Represents an object returned by personal API.
 */
export interface Note {
  slug: string;
  title: string;
  reactionCount: number;
  url: string;
  subtitle: string;
  publishedAt: string;
}
