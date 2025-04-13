import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { gql, GraphQLClient } from 'graphql-request';
import Skeleton from 'react-loading-skeleton';

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
      <h1 className="mb-2 text-2xl font-bold text-black">Posts</h1>

      {/* Subtitle */}
      <p>
        I write as a way to <b>give back</b> to the developer community, sharing what I&apos;ve learned in hopes that it
        might help someone else on their journey. It also serves as <b>a note to my future self</b> - a reminder of the
        lessons I&apos;ve picked up along the way and a resource I can revisit as I continue to grow.
      </p>

      {/* Posts */}
      {error ? (
        <p>Error loading posts.</p>
      ) : isPending ? (
        <ul className="flex flex-col gap-2">
          <Skeleton count={5} />
        </ul>
      ) : (
        <ul className="flex flex-col gap-2">
          {data.map((post) => (
            <li key={post.id} className="flex items-center gap-3">
              <div className="flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-gray-600">
                <FontAwesomeIcon icon={faArrowRight} className="rotate-315" />
              </div>
              <a href={post.url} target="_blank" rel="noreferrer" className="font-semibold">
                {post.title}
              </a>
              <span className="hidden text-sm text-gray-400 sm:block">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Subtitle */}
      <span className="text-gray-500">Research notes</span>

      {/* Notes */}
      <ul>
        <li className="flex items-center gap-2">
          <div className="flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-gray-600">
            <FontAwesomeIcon icon={faArrowRight} className="rotate-315" />
          </div>
          <a href="https://www.notion.so" target="_blank" rel="noreferrer" className="font-semibold">
            Technical Writing
          </a>
        </li>
      </ul>
    </>
  );
};
