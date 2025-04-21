import { Experience } from '../lib/experience';

const NCONTRACTS: Experience = {
  company: 'Ncontracts',
  position: ['Senior Software Engineer'],
  location: 'Brentwood, TN (Remote)',
  startDate: 'September 2024',
  endDate: 'Present',
  descriptions: [
    'Responsibilities: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime dignissimos veritatis error rem necessitatibus quaerat, dolore soluta, beatae quisquam consequatur voluptatem dolores accusamus expedita at a, sit repellat voluptatibus.',
  ],
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
    { value: '80', title: 'pull requests reviewed' },
    { value: '4', title: 'production releases led' },
    { value: '26', title: 'documents published' },
  ],
  contributions: [
    'Serving as the project lead for a new React frontend initiative. ',
    'Eliminated 60 minutes of production release downtime.',
    'Integrated DataDog RUM (Real User Monitoring) into the existing front-end project.',
  ],
};

const VENMINDER: Experience = {
  company: 'Venminder',
  position: ['Senior Software Engineer I', 'Software Engineer II'],
  location: 'Elizabethtown, Kentucky (Remote)',
  startDate: 'December 2022',
  endDate: 'September 2024',
  descriptions: [
    'I led the front-end development of an internal web application generating over 60% of company revenue.',
    'In the third-party risk management space, collecting and reviewing vendor documents is a time-consuming and manual process. We automated this process using AI, which allowed us to re-use vendor documents and save significant time on delivery.',
  ],
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
  ],
  contributions: [
    'Lead an automation project to streamline the generation of assessment layouts.',
    'Led an end-to-end testing initiative using PlayWright in a nightly CI pipeline.',
    'Led the data migration and normalization process in DynamoDB for re-using assessment controls answers.',
    'Developed a dynamic calculation engine to automate the generation of Financial Health Assessments.',
    'Established a standardized architecture for browser and memory caching, server communication, and code quality.',
  ],
};

const HEXAGON: Experience = {
  company: 'Hexagon Safety & Infrastructure',
  position: ['Cloud Application UI Developer'],
  location: 'Madison, Alabama',
  startDate: 'January 2021',
  endDate: 'November 2022',
  descriptions: [
    'I contributed to the front-end development of HxGN Connect, a distributed SaaS surveillance solution, using Angular as part of a cross-functional team of 20 front-end and back-end engineers.',
    'This project was one of my most rewarding experiences, largely due to the sophisticated technology stack. We implemented a micro-frontend architecture comprising over 40 interconnected npm packages, all orchestrated through a single root repository that powered the main application.',
  ],
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
  statistics: [
    { value: '782', title: 'pull requests completed' },
    { value: '7', title: 'epics completed' },
  ],
  contributions: [
    'Created shared TypeScript NPM packages to enable seamless code reuse between web and mobile platforms.',
    'Upgraded the feature flags architecture to support hierarchical settings, enabling configuration at the organization, group, and user levels.',
    'Developed a changelog feature for all administrator pages, providing a detailed history of user interactions.',
    'Built an internal testing tool to evaluate product performance under stress.',
    'Facilitated the training and development of entry-level front-end engineers.',
  ],
};

/**
 * Static array of work experiences
 */
export const EXPERIENCE_LIST: Experience[] = [NCONTRACTS, VENMINDER, HEXAGON];
