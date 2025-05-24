import { RevealCard } from '@/components/RevealCard';
import { faArrowRight, faChevronDown, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'vaul';
import { Experience } from '../lib/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <RevealCard>
      <div className="flex flex-col gap-3 rounded-lg border-2 border-dashed border-gray-100 p-5 text-gray-800 dark:border-gray-300">
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
        <p className="text-[1rem] text-gray-600">{experience.descriptions[0]}</p>
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 pb-2 text-[1rem] text-gray-500 [&::-webkit-details-marker]:hidden">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="xs"
              className="transition-transform duration-300 group-open:rotate-[90deg]"
            />
            <span>Read more</span>
          </summary>
          <div className="flex flex-col gap-3">
            {experience.descriptions.slice(1).map((description) => (
              <p key={description} className="text-[1rem] text-gray-600">
                {description}
              </p>
            ))}
          </div>
        </details>

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

        <Drawer.Root>
          <Drawer.Trigger>
            <button className="flex w-full cursor-pointer flex-row items-center justify-center gap-3 rounded-md bg-gray-100 px-3 py-1.5 text-[1rem] text-gray-700 hover:text-gray-500">
              <span>Show Contributions</span>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="fixed right-0 bottom-0 left-0 h-fit bg-gray-100 outline-none">
              <div className="bg-white p-8">
                <div className="flex items-center justify-center">
                  <div className="flex w-full max-w-[750px] flex-col items-start gap-4 text-gray-700">
                    {/* Title */}
                    <h2 className="text-xl font-semibold">Contributions @ {experience.company}</h2>

                    {/* Contributions */}
                    <ul className="flex flex-col gap-1.5">
                      {experience.contributions.map((contribution) => (
                        <>
                          <li key={contribution} className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faStarOfLife} size="2xs" className="text-blue-300" />
                            <span className="text-[1rem]">{contribution}</span>
                          </li>
                          <hr className="mx-auto h-0.5 w-full rounded-sm border-0 bg-gray-100 dark:bg-gray-100"></hr>
                        </>
                      ))}
                    </ul>

                    {/* Statistics */}
                    <div
                      className="grid w-full gap-2 pt-3"
                      style={{ gridTemplateColumns: `repeat(${experience.statistics.length}, 1fr)` }}
                    >
                      {experience.statistics.map((statistic) => (
                        <div
                          key={statistic.title}
                          className="flex flex-col items-center rounded-md bg-gray-100 p-2 text-center"
                        >
                          <span className="text-[1rem] font-semibold text-gray-800">{statistic.value}</span>
                          <span className="text-sm text-gray-500">{statistic.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </RevealCard>
  );
};
