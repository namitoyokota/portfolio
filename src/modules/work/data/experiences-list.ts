import { Experience } from '../lib/experience';

export const EXPERIENCE_LIST: Experience[] = [
  {
    company: 'Ncontracts',
    position: 'Senior Software Engineer',
    location: 'Brentwood, TN (Remote)',
    startDate: 'September 2024',
    endDate: 'Present',
    description:
      'Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores accusamus expedita at a, sit repellat voluptatibus.',
    url: 'https://ncontracts.com/',
    majorTools: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'C#', url: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Azure DevOps', url: 'https://azure.microsoft.com/en-us/products/devops/' },
      { name: 'Redis', url: 'https://redis.io/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
    ],
    minorTools: [
      { name: 'DataDog', url: 'https://www.datadoghq.com/' },
      { name: 'Tailwind', url: 'https://tailwindcss.com/' },
      { name: 'React Query', url: 'https://tanstack.com/query/latest' },
      { name: 'Zustand', url: 'https://zustand.docs.pmnd.rs' },
      { name: 'Chart.js', url: 'https://www.chartjs.org/' },
    ],
    contributions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
  },
];
