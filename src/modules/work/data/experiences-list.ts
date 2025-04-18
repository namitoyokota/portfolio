import { Experience } from '../lib/experience';

const NCONTRACTS: Experience = {
  company: 'Ncontracts',
  position: ['Senior Software Engineer'],
  location: 'Brentwood, TN (Remote)',
  startDate: 'September 2024',
  endDate: 'Present',
  description:
    'Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores accusamus expedita at a, sit repellat voluptatibus.',
  url: 'https://ncontracts.com/',
  majorTools: [
    { name: 'React', url: 'https://react.dev/' },
    { name: 'TypeScript', url: '' },
    { name: 'C#', url: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
    { name: 'AWS', url: 'https://aws.amazon.com/' },
  ],
  minorTools: [
    { name: 'Redis', url: 'https://redis.io/' },
    { name: 'Docker', url: 'https://www.docker.com/' },
    { name: 'DataDog', url: 'https://www.datadoghq.com/' },
    { name: 'Vite', url: '' },
    { name: 'Tailwind', url: 'https://tailwindcss.com/' },
    { name: 'React Query', url: 'https://tanstack.com/query/latest' },
    { name: 'Zustand', url: 'https://zustand.docs.pmnd.rs' },
    { name: 'Chart.js', url: 'https://www.chartjs.org/' },
    { name: 'OIDC', url: 'https://auth0.com/docs/authenticate/protocols/openid-connect-protocol' },
  ],
  statistics: [
    { value: '500', title: 'pull requests completed' },
    { value: '21', title: 'documents written' },
  ],
  contributions: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ],
};

const VENMINDER: Experience = {
  company: 'Venminder',
  position: ['Senior Software Engineer I', 'Software Engineer II'],
  location: 'Elizabethtown, Kentucky (Remote)',
  startDate: 'December 2022',
  endDate: 'September 2024',
  description:
    'Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores accusamus expedita at a, sit repellat voluptatibus.',
  url: 'https://venminder.com/',
  majorTools: [
    { name: 'Aurelia', url: 'https://aurelia.io/' },
    { name: 'TypeScript', url: '' },
    { name: 'Python', url: '' },
    { name: 'PlayWright', url: '' },
    { name: 'Azure', url: '' },
  ],
  minorTools: [
    { name: 'Figma', url: '' },
    { name: 'ProseMirror', url: '' },
    { name: 'Bootstrap', url: '' },
    { name: 'Font Awesome', url: '' },
    { name: 'mathjs', url: '' },
    { name: 'boto3', url: '' },
    { name: 'OIDC', url: 'https://auth0.com/docs/authenticate/protocols/openid-connect-protocol' },
  ],
  statistics: [
    { value: '546', title: 'pull requests completed' },
    { value: '1,341', title: 'pull requests reviewed' },
    { value: '167', title: 'user stories completed' },
    { value: '105', title: 'bugs fixed' },
    { value: '26', title: 'documents written' },
  ],
  contributions: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ],
};

const HEXAGON: Experience = {
  company: 'Hexagon Safety & Infrastructure',
  position: ['Cloud Application UI Developer'],
  location: 'Madison, Alabama',
  startDate: 'January 2021',
  endDate: 'November 2022',
  description:
    'Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores accusamus expedita at a, sit repellat voluptatibus.',
  url: 'https://hexagon.com/company/divisions/safety-infrastructure-geospatial',
  majorTools: [
    { name: 'Angular', url: 'https://angular.dev/' },
    { name: 'TypeScript', url: '' },
    { name: 'Selenium', url: '' },
    { name: 'Azure', url: '' },
  ],
  minorTools: [
    { name: 'Adobe XD', url: '' },
    { name: 'Angular Material', url: '' },
    { name: 'RxJS', url: '' },
    { name: 'Leaflet', url: '' },
    { name: 'Moment.js', url: '' },
    { name: 'Sinon', url: '' },
  ],
  statistics: [],
  contributions: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ],
};

/**
 * Static array of work experiences
 */
export const EXPERIENCE_LIST: Experience[] = [NCONTRACTS, VENMINDER, HEXAGON];
