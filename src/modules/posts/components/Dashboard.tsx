import { faLink } from '@fortawesome/free-solid-svg-icons';
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

export const Dashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const data: GetPostResponse = await client.request(GET_LATEST_POSTS);

      console.log(data.publication.posts.edges.map((edge) => edge.node));

      return data.publication.posts.edges.map((edge) => edge.node);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Error loading posts.</p>;
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="mb-2 text-2xl font-bold">Posts</h1>
      <p>{data.length} posts have been found.</p>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="flex gap-1">
            <FontAwesomeIcon icon={faLink} />
            <a href={post.url} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
