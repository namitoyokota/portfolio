import { EXPERIENCE_LIST } from '../data/experiences-list';
import { ExperienceCard } from './ExperienceCard';

export const Work = () => {
  return (
    <>
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-black">Employment History</h1>

      {/* Subtitle */}
      <p>
        I have been blessed to work for <b>great companies and teams</b>. Here is a brief history of my employment
        history and the contributions I made.
      </p>

      {/* Experience List */}
      <div className="flex flex-col gap-4">
        {EXPERIENCE_LIST.map((experience) => (
          <ExperienceCard experience={experience} key={experience.company}></ExperienceCard>
        ))}
      </div>
    </>
  );
};
