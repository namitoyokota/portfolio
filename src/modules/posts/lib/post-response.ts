import { Post } from './post';

/**
 * Represents data response from Hashnode GraphQL.
 */
export interface PostResponse {
  publication: {
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };
}
