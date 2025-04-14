import SelfieImageSrc from '@/assets/selfie.jpeg';
import { RECOMMENDATION_LIST } from '../data/recommendation-list';
import { SOCIAL_MEDIA_LIST } from '../data/social-media-list';
import { RecommendationCard } from './RecommendationCard';
import { SocialMediaCard } from './SocialMediaCard';

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[80px_auto] items-center gap-4">
        {/* Profile Image */}
        <img src={SelfieImageSrc} alt="Profile" className="rounded-full border-2 border-gray-200" />

        <div className="flex flex-col">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-black">Hi, I&apos;m Namito 👋🏼</h1>

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
        {SOCIAL_MEDIA_LIST.map((socialMedia) => (
          <SocialMediaCard socialMedia={socialMedia} key={socialMedia.name} />
        ))}
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
