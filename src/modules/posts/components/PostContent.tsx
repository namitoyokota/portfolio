import Skeleton from 'react-loading-skeleton';
import Markdown from 'react-markdown';
import { useParams } from 'react-router';
import { useGetNoteContentQuery, useGetNotesQuery } from '../api/posts.service';

export const PostContent = () => {
  const { slug } = useParams();
  const {
    data: noteContent,
    isPending: noteContentPending,
    error: noteContentError,
  } = useGetNoteContentQuery(slug || '');
  const { data: noteList, isPending: noteListPending, error: noteListError } = useGetNotesQuery();
  const note = noteList?.find((note) => note.slug === slug);

  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-black">{note?.title || <Skeleton height="2rem" width="200px" />}</h1>

      {noteContentError || noteListError ? (
        <p>Error loading post content.</p>
      ) : noteContentPending || noteListPending ? (
        <>
          <Skeleton height="1.5rem" width="200px" />
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} height="1.25rem" />
            ))}
          </div>
          <Skeleton height="1.5rem" width="200px" />
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} height="1.25rem" />
            ))}
          </div>
        </>
      ) : (
        <Markdown>{noteContent}</Markdown>
      )}
    </>
  );
};
