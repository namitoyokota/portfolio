import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://gql.hashnode.com');

const GET_LATEST_POSTS = gql`
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
`;

interface Post {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
}

interface GetPostResponse {
  publication: {
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };
}

export const Posts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const data: GetPostResponse = await client.request(GET_LATEST_POSTS);

      return data.publication.posts.edges.map((edge) => edge.node);
    },
  });

  return (
    <>
      {/* Page Title */}
      <h1 className="mb-2 text-2xl font-bold">Posts</h1>

      {/* Subtitle */}
      <span className="text-gray-500">How I try to write to share what I learn.</span>

      {/* Posts */}
      {error ? (
        <p>Error loading posts.</p>
      ) : isPending ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {data.map((post) => (
            <li key={post.id} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowRight} />
              <a href={post.url} target="_blank" rel="noreferrer" className="font-semibold">
                {post.title}
              </a>
              <span className="text-gray-400">{new Date(post.publishedAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Subtitle */}
      <span className="text-gray-500">Research notes</span>

      {/* Notes */}
      <ul>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} />
          <a href="https://www.notion.so" target="_blank" rel="noreferrer">
            Notion
          </a>
        </li>
      </ul>
    </>
  );
};
