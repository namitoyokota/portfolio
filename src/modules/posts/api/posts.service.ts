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
                  id
                  url
                  title
                  subtitle
                  publishedAt
                  reactionCount
                  slug
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
