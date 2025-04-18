import { RevealCard } from '@/components/RevealCard';
import { faChevronRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Experience } from '../lib/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <RevealCard>
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

        {/* More Details */}
        <details className="question">
          <summary className="flex w-full flex-row items-center justify-center gap-3 rounded-md bg-gray-100 px-3 py-1.5 text-[1rem] text-gray-700 hover:cursor-pointer">
            <span>Show Contributions</span>
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </summary>

          {/* Statistics */}
          <div
            className="grid gap-2 pt-3"
            style={{ gridTemplateColumns: `repeat(${experience.statistics.length}, 1fr)` }}
          >
            {experience.statistics.map((statistic) => (
              <div key={statistic.title} className="flex flex-col items-center rounded-md bg-gray-300 py-2 text-center">
                <span className="text-[1rem] font-semibold text-gray-800">{statistic.value}</span>
                <span className="text-sm text-gray-500">{statistic.title}</span>
              </div>
            ))}
          </div>

          {/* Contributions */}
          <ul className="flex flex-col gap-1 p-2">
            {experience.contributions.map((contribution) => (
              <li key={contribution} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} size="xs" className="text-gray-400" />
                <span className="text-[1rem]">{contribution}</span>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </RevealCard>
  );
};
