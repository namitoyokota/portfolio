import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import { Post } from '../lib/post';
import { PostResponse } from '../lib/post-response';

const client = new GraphQLClient('https://gql.hashnode.com');

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

export const useGetNotesQuery = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch('https://api.namitoyokota.com/notes.json');

      return response.json();
    },
  });
};
