import Skeleton from 'react-loading-skeleton';
import { useGetNotesQuery, useGetPostsQuery } from '../api/posts.service';
import { PostItem } from './PostItem';

export const Posts = () => {
  const { data: postsData, isPending: isPostsPending, error: postsError } = useGetPostsQuery();
  const { data: notesData, isPending: isNotesPending, error: notesError } = useGetNotesQuery();

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
      {postsError ? (
        <p>Error loading posts.</p>
      ) : isPostsPending ? (
        <ul className="flex flex-col gap-2">
          <Skeleton count={5} />
        </ul>
      ) : (
        <ul className="flex flex-col gap-2">
          {postsData.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </ul>
      )}

      {/* Subtitle */}
      <span className="text-gray-500">Research notes</span>

      {/* Posts */}
      {notesError ? (
        <p>Error loading posts.</p>
      ) : isNotesPending ? (
        <ul className="flex flex-col gap-2">
          <Skeleton count={5} />
        </ul>
      ) : (
        <ul className="flex flex-col gap-2">
          {notesData.map((note) => (
            <PostItem post={note} key={note.id} />
          ))}
        </ul>
      )}
    </>
  );
};
