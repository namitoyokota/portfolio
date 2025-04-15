import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from '../lib/social-media';

/**
 * Static data of social media links.
 */
export const SOCIAL_MEDIA_LIST: SocialMedia[] = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/namitoyokota',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/namito',
    icon: faLinkedin,
  },
  {
    name: 'Mail',
    url: 'mailto:namitoyokota.com',
    icon: faEnvelope,
  },
];
