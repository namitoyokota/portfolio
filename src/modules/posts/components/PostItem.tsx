import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Post } from '../lib/post';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <li key={post.id} className="flex items-center gap-3">
      <div className="flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-gray-600">
        <FontAwesomeIcon icon={faArrowRight} className="rotate-315" />
      </div>
      <a href={post.url} target="_blank" rel="noreferrer" className="font-semibold">
        {post.title}
      </a>
      <span className="hidden text-sm text-gray-400 sm:block">{new Date(post.publishedAt).toLocaleDateString()}</span>
    </li>
  );
};
