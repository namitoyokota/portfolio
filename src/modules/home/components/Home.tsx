import SelfieImageSrc from '@/assets/selfie.jpeg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RECOMMENDATION_LIST } from '../data/recommendation-list';
import { RecommendationCard } from './RecommendationCard';

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[80px_auto] items-center gap-4">
        {/* Profile Image */}
        <img src={SelfieImageSrc} alt="Profile" className="rounded-full border-2 border-gray-200" />

        <div className="flex flex-col">
          {/* Page Title */}
          <h1 className="mb-2 text-2xl font-bold text-black">Hi, I&apos;m Namito 👋🏼</h1>

          {/* Description */}
          <span>
            Senior Software Engineer at{' '}
            <a href="https://www.ncontracts.com/" target="_blank" rel="noreferrer" className="underline decoration-2">
              Ncontracts
            </a>
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p>
        I am a <b>full-stack developer</b> with <b>5 years of experience</b> based in <b>Huntsville, Alabama</b>. Over
        the years, I&apos;ve contributed to the development of cutting-edge SaaS products for mid-size and large
        companies, helping deliver scalable, high-impact web applications that solve real business problems.{' '}
      </p>
      <p>
        At the core of who I am is my faith in <b>Jesus Christ</b>. He is the foundation of my life, guiding my values,
        decisions, and the way I treat others both personally and professionally.
      </p>

      {/* Social Media */}
      <div className="flex flex-row gap-2">
        <a
          href="https://www.github.com/namitoyokota"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-800 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/namito"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-800 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:namitoyokota@icloud.com"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-800 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Mail</span>
        </a>
      </div>

      {/* Recommendations */}
      <ul className="container gap-2">
        {RECOMMENDATION_LIST.map((recommendation) => (
          <RecommendationCard recommendation={recommendation} key={recommendation.name} />
        ))}
      </ul>
    </>
  );
};
