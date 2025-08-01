import HunterProfileImageSrc from '@/assets/hunter.jpg';
import JessProfileImageSrc from '@/assets/jess.jpg';
import JoelProfileImageSrc from '@/assets/joel.jpg';
import PatrickProfileImageSrc from '@/assets/patrick.webp';
import { Recommendation } from '../lib/recommendation';

const RECOMMENDATION_FROM_JOEL: Recommendation = {
  name: 'Joel Forsyth',
  position: 'Team Lead at DriveCentric',
  imageUrl: JoelProfileImageSrc,
  letter:
    'Namito is an amazing teammate with an insatiable desire to grow and improve his craft. Extremely technical and works great on any team. If I had my own company, Namito would be among the first hires. ',
};

const RECOMMENDATION_FROM_PATRICK: Recommendation = {
  name: 'Patrick Towle',
  position: 'Senior Software Engineer at Ncontracts',
  imageUrl: PatrickProfileImageSrc,
  letter:
    "I've had the opportunity to work with Namito on a new-to-market service for nearly 2 years. In that time, I was astonished at the effort and work he consistently brought to the table. Namito's ability to problem solve quickly, with a positive and analytical mindset, was always a pleasure to have on the team. He was very good at understanding these dilemmas and had great communication when discussing options and delivering solutions. He was an incredibly reliable teammate, who never shied away from opportunities to learn and grow in his craft. He is an incredibly talented and dedicated individual who cares deeply about the work he delivers. It is an honor for me to recommend him for any position he pursues in his future.",
};

const RECOMMENDATION_FROM_HUNTER: Recommendation = {
  name: 'Hunter Simpson',
  position: 'Senior Software Engineer at Omatic',
  imageUrl: HunterProfileImageSrc,
  letter:
    'I have had the pleasure of working with Namito the past 4+ years spanning 3 different companies. Namito is one of the hardest-working individuals I have ever met. He constantly strives to better himself and to never stop growing in his craft. He cares deeply about the work he does and how it impacts not only the clients but also other developers as well. He is humble, knowledgeable, and passionate, and his drive challenges me to grow as well. He is a great developer and a person of high character, and I would absolutely recommend him for any position he sets his mind to.',
};

const RECOMMENDATION_FROM_JESS: Recommendation = {
  name: 'Jess McPheron',
  position: 'Senior Product Manager at Foxen',
  imageUrl: JessProfileImageSrc,
  letter:
    'Had the pleasure of working with Namito on a net-new product offering and was continuously impressed by his ability and enthusiasm to create value. He eagerly ran towards challenges and was always ready to collaborate whenever needed. Namito made our team stronger, created great experiences for our users, and has a great product sense. I would highly recommend him to anyone looking for a well rounded engineer that can make an immediate impact, and would gladly work with him in the future.',
};

/**
 * Static array of recommendations received on LinkedIn
 */
export const RECOMMENDATION_LIST: Recommendation[] = [
  RECOMMENDATION_FROM_JOEL,
  RECOMMENDATION_FROM_PATRICK,
  RECOMMENDATION_FROM_HUNTER,
  RECOMMENDATION_FROM_JESS,
];
