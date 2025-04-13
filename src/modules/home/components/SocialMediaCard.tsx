import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMedia } from '../lib/social-media';

interface SocialMediaCardProps {
  socialMedia: SocialMedia;
}

export const SocialMediaCard = ({ socialMedia }: SocialMediaCardProps) => {
  return (
    <a
      href={socialMedia.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-800 hover:text-gray-500"
    >
      <FontAwesomeIcon icon={socialMedia.icon} />
      <span>{socialMedia.name}</span>
    </a>
  );
};
