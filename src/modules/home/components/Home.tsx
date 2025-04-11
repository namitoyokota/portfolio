import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => {
  return (
    <>
      {/* Profile Image */}
      <img src="" alt="Profile" className="mb-4 h-32 w-32 rounded-full" />

      {/* Page Title */}
      <h1 className="mb-2 text-2xl font-bold">Hi, I&apos;m Namito 👋🏼</h1>

      {/* Description */}
      <span className="text-gray-500">
        Senior Software Engineer at{' '}
        <a href="https://www.ncontracts.com/" target="_blank" rel="noreferrer">
          Ncontracts
        </a>
      </span>

      {/* Subtitle */}
      <p>5 years of experience, causally looking, my philosophy and Jesus.</p>

      {/* Social Media */}
      <div className="flex flex-row gap-2">
        <a
          href="https://www.github.com/namitoyokota"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-700 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/namito"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-700 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:namitoyokota@icloud.com"
          className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-gray-700 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Mail</span>
        </a>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <h3>Sean Carnes</h3>
          <span className="text-gray-500">Engineering Manager at Venminder</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Jess MePheron</h3>
          <span className="text-gray-500">Product Manager at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Hunter Simpson</h3>
          <span className="text-gray-500">Senior Software Engineer at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Patrick Towle</h3>
          <span className="text-gray-500">Senior Software Engineer at Ncontracts</span>
          <p>Recommendation letter.</p>
        </div>
      </div>
    </>
  );
};
