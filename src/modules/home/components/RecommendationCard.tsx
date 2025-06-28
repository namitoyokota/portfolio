import { FadeInCard } from '@/components/FadeInCard';
import { Recommendation } from '../lib/recommendation';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  return (
    <FadeInCard>
      <li className="mb-2 box-border flex w-full break-inside-avoid flex-col gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-800">
        <div className="grid grid-cols-[40px_auto] items-center gap-3">
          <img
            src={recommendation.imageUrl}
            alt={`${recommendation.name}'s Profile`}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{recommendation.name}</h3>
            <span className="text-sm text-gray-500">{recommendation.position}</span>
          </div>
        </div>
        <p className="text-[1rem] text-gray-600">{recommendation.letter}</p>
      </li>
    </FadeInCard>
  );
};
