import { Post } from './post';

export interface PostResponse {
  publication: {
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };
}
