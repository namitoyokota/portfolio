import { Experience } from '../lib/experience';

const NCONTRACTS: Experience = {
  company: 'Ncontracts',
  position: ['Senior Software Engineer'],
  location: 'Brentwood, TN (Remote)',
  startDate: 'September 2024',
  endDate: 'Present',
  descriptions: [
    'After the acquisition of Venminder by Ncontracts, I transitioned into leading the front-end development for an existing application, focusing on its seamless integration into the Ncontracts ecosystem.',
    'My role involves overseeing the migration of the application from Aurelia to React, ensuring the transition is smooth and the new platform is scalable and maintainable. I am also leading the setup of authentication and authorization systems using OIDC.',
    'Read more about the Control Assessments application below in the Venminder section.',
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
    'Serving as the project lead for a new React frontend initiative.',
    'Created a company-wide client-side diagnostics site to help users troubleshoot network problems.',
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
    'I served as the lead front-end developer for an internal web application using Aurelia, optimizing the UI to ensure seamless interaction.',
    "Control Assessments project generated over 60% of company revenue, designed to automate the process of delivering assessments to clients. By incorporating artificial intelligence and re-using vendor documents, this project scaled the company's operations and drove revenue.",
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
    'Led an automation project to streamline the generation of assessment layouts.',
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
    'As an entry-level front-end developer, I was responsible for working within a micro-frontend architecture using Angular to implement new features and enhance existing UI components.',
    'HxGN Connect project, a distributed SaaS surveillance solution, was part of a large-scale initiative within a global organization. This project was critical to enhancing safety and operational efficiency for customers by providing real-time monitoring and management of surveillance systems across various industries.',
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
