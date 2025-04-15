import { RevealNotation } from '@/components/RevealNotation';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { Post } from '../lib/post';

interface PostItemProps {
  post: Post;
  viewInternally?: boolean;
}

export const PostItem = ({ post, viewInternally = false }: PostItemProps) => {
  const renderPostLink = () =>
    viewInternally ? (
      <Link to={post.slug}>{post.title}</Link>
    ) : (
      <a href={post.url} target="_blank" rel="noreferrer" className="font-semibold">
        {post.title}
      </a>
    );

  return (
    <li className="flex items-center gap-3 py-1">
      <div className="flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-gray-600">
        <FontAwesomeIcon icon={faArrowRight} className="rotate-315" />
      </div>
      {post.reactionCount > 0 ? <RevealNotation>{renderPostLink()}</RevealNotation> : renderPostLink()}
      <span className="hidden text-sm text-gray-400 sm:block">{new Date(post.publishedAt).toLocaleDateString()}</span>
    </li>
  );
};
