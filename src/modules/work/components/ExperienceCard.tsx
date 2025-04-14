import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Experience } from '../lib/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-gray-200 p-3 text-gray-800">
      {/* Location and Date */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{experience.location}</span>
        <span>
          {experience.startDate} — {experience.endDate}
        </span>
      </div>

      {/* Title and Company */}
      <h3 className="font-semibold">
        {experience.position.join(', ')} <span className="text-gray-400">at</span>{' '}
        <a href={experience.url} target="_blank" rel="noreferrer" className="underline decoration-2">
          {experience.company}
        </a>
      </h3>

      {/* Responsibilities */}
      <p className="text-[1rem] text-gray-600">{experience.description}</p>

      {/* Major Tools */}
      <div className="flex flex-row flex-wrap gap-2">
        {experience.majorTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-1 border-black bg-black px-3 py-0.5 text-sm text-white"
          >
            {tool.name}
          </a>
        ))}
      </div>

      {/* Minor Tools */}
      <div className="flex flex-row flex-wrap gap-2">
        {experience.minorTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-1 border-black px-3 py-0.5 text-sm"
          >
            {tool.name}
          </a>
        ))}
      </div>

      {/* Contributions */}
      <details className="question">
        <summary className="flex w-full flex-row items-center justify-center gap-3 rounded-md bg-gray-100 px-3 py-1.5 text-[1rem] text-gray-700 hover:cursor-pointer">
          <span>Show Contributions</span>
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </summary>

        <p className="py-2 text-[1rem]">{experience.contributions}</p>
      </details>
    </div>
  );
};
