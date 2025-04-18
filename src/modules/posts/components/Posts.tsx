import Skeleton from 'react-loading-skeleton';
import { useGetNotesQuery, useGetPostsQuery } from '../api/posts.service';
import { NoteItem } from './NoteItem';
import { PostItem } from './PostItem';

export const Posts = () => {
  const { data: postsData, isPending: isPostsPending, error: postsError } = useGetPostsQuery();
  const { data: notesData, isPending: isNotesPending, error: notesError } = useGetNotesQuery();

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-black">Posts</h1>

      {/* Subtitle */}
      <p>
        I write as a way to <span className="font-semibold">give back</span> to the developer community, sharing what
        I&apos;ve learned in hopes that it might help someone else on their journey.
      </p>

      {/* Posts */}
      {postsError ? (
        <p>Error loading posts.</p>
      ) : isPostsPending ? (
        <ul className="flex flex-col gap-2">
          {[...Array(10)].map((_, index) => (
            <li key={index}>
              <Skeleton height="1.5rem" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-1">
          {postsData.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </ul>
      )}

      {/* Subtitle */}
      <h2 className="text-xl font-semibold text-gray-500">Research notes</h2>
      <p>
        In order to get a deeper understanding of a topic I&apos;m familiar with, or to learn a completely new field, I
        like to take precise <span className="font-semibold">notes for future reference</span>. Here is my current
        collection.
      </p>

      {/* Notes */}
      {notesError ? (
        <p>Error loading notes.</p>
      ) : isNotesPending ? (
        <ul className="flex flex-col gap-2">
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <Skeleton height="1.5rem" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-1">
          {notesData.map((note) => (
            <NoteItem key={note.slug} note={note} />
          ))}
        </ul>
      )}
    </>
  );
};
