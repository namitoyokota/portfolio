import SelfieImageSrc from '@/assets/selfie.jpeg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <p>5 years of experience based in Huntsville.</p>
      <p>Jesus</p>
      <p>Philosophy</p>

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
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-800">
          <div className="grid grid-cols-[40px_auto] items-center gap-3">
            <img
              src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
              alt="Sean's Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Sean Carnes</h3>
              <span className="text-sm text-gray-500">Engineering Manager at Venminder</span>
            </div>
          </div>
          <p className="text-[0.9rem] text-gray-600">TBA</p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-800">
          <div className="grid grid-cols-[40px_auto] items-center gap-3">
            <img
              src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
              alt="Sean's Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Jess McPheron</h3>
              <span className="text-sm text-gray-500">Senior Product Manager at Foxen</span>
            </div>
          </div>
          <p className="text-[0.9rem] text-gray-600">
            Had the pleasure of working with Namito on a net-new product offering and was continuously impressed by his
            ability and enthusiasm to create value. He eagerly ran towards challenges and was always ready to
            collaborate whenever needed. Namito made our team stronger, created great experiences for our users, and has
            a great product sense. I would highly recommend him to anyone looking for a well rounded engineer that can
            make an immediate impact, and would gladly work with him in the future.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-800">
          <div className="grid grid-cols-[40px_auto] items-center gap-3">
            <img
              src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
              alt="Sean's Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Hunter Simpson</h3>
              <span className="text-sm text-gray-500">Senior Frontend Engineer at Ncontracts</span>
            </div>
          </div>
          <p className="text-[0.9rem] text-gray-600">
            I have had the pleasure of working with Namito the past 4+ years spanning 3 different companies. Namito is
            one of the hardest-working individuals I have ever met. He constantly strives to better himself and to never
            stop growing in his craft. He cares deeply about the work he does and how it impacts not only the clients
            but also other developers as well. He is humble, knowledgeable, and passionate, and his drive challenges me
            to grow as well. He is a great developer and a person of high character, and I would absolutely recommend
            him for any position he sets his mind to.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-800">
          <div className="grid grid-cols-[40px_auto] items-center gap-3">
            <img
              src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
              alt="Sean's Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Patrick Towle</h3>
              <span className="text-sm text-gray-500">Senior Fullstack Engineer at Ncontracts</span>
            </div>
          </div>
          <p className="text-[0.9rem] text-gray-600">
            I&apos;ve had the opportunity to work with Namito on a new-to-market service for nearly 2 years. In that
            time, I was astonished at the effort and work he consistently brought to the table. Namito&apos;s ability to
            problem solve quickly, with a positive and analytical mindset, was always a pleasure to have on the team. He
            was very good at understanding these dilemmas and had great communication when discussing options and
            delivering solutions. He was an incredibly reliable teammate, who never shied away from opportunities to
            learn and grow in his craft. He is an incredibly talented and dedicated individual who cares deeply about
            the work he delivers. It is an honor for me to recommend him for any position he pursues in his future.
          </p>
        </div>
      </div>
    </>
  );
};
