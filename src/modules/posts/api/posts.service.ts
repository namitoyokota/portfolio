import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Post } from '../lib/post';
import { PostResponse } from '../lib/post-response';

const client = new GraphQLClient('https://gql.hashnode.com');

/**
 * Retrieves blog publications on Hashnode.
 * @returns Posts from Hashnode.
 */
export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const data: PostResponse = await client.request(gql`
        query Publication {
          publication(host: "blogs.namitoyokota.com") {
            posts(first: 30) {
              edges {
                node {
                  slug
                  title
                  reactionCount
                  url
                  subtitle
                  publishedAt
                }
              }
            }
          }
        }
      `);

      return data.publication.posts.edges.map((edge) => edge.node);
    },
  });
};

/**
 * Retrieves research notes in my GitHub repository.
 * @returns Notes from my API.
 */
export const useGetNotesQuery = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch('https://api.namitoyokota.com/notes.json');

      return response.json();
    },
  });
};

/**
 * Retrieves research note content in my GitHub repository.
 * @param slug Slug of the note to retrieve.
 * @returns Markdown content string.
 */
export const useGetNoteContentQuery = (slug: string) => {
  return useQuery({
    queryKey: ['noteContent', slug],
    queryFn: async (): Promise<string> => {
      const response = await fetch(`https://api.namitoyokota.com/notes/${slug}.md`);

      if (!response.ok) {
        throw new Error('Failed to fetch note content');
      }

      return response.text();
    },
  });
};
