// TODO: This projects list need to be shortened

import { Project } from '../interface/project';

/**
 * List of side projects that I've completed
 */
export const projects = [
    {
        title: 'ngx-monochrome',
        description: `Angular component library for my side projects.`,
        story: `
            Since I had learned how to maintain an internal component library at my full-time job, I wanted to test my knowledge by creating my own.
            This could also help me create components with my favorite grayscale color scheme (hence the name monochrome) to be used for my side projects.
        `,
        lesson: `
            First and foremost, I learned the most about npm. I learned about different commands in the CLI tool and also managing the versioning and publishing process. 
            I also gained a significant amount of knowledge on GitHub Actions. I was able to achieve auto publishing of the npm package as well as publishing the website.
            One of the unexpected lessons was how to effectively use the testbed and the component library package.
            Optimizing the scripts within the package.json file significantly improved the coding process.
        `,
        thumbnail: '/screenshots/monochrome.png',
        iconPath: '/icons/library.svg',
        url: 'https://www.npmjs.com/package/ngx-monochrome',
        cards: ['angular', 'npm', 'github actions'],
    } as Project,
    {
        title: 'Steeeve',
        description: 'Share your next side project ideas.',
        iconPath: '/icons/ideas.svg',
        url: 'https://ideas.namitoyokota.com',
        cards: ['angular', 'npm'],
    } as Project,
    {
        title: 'Todo Today',
        description: 'I was a victim of the endless to do tasks. I created this so that you can focus on what you can do today.',
        iconPath: '/icons/tasks.svg',
        url: 'https://todo.namitoyokota.com',
        cards: ['angular', 'npm'],
    } as Project,
];
