import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import styles from '../styles/projects.module.css';

// TODO: Move this out to a file and add jsdoc
interface Project {
    title: string;
    description: string;
    iconPath: string;
    url: string;
    cards: string[];
}

export const Projects = (): JSX.Element => {
    /** List of projects to display in HTML */
    // TODO: This projects list need to be shortened
    // TODO: Add photos to each section that are appropriate
    const projects = [
        {
            title: 'ngx-monochrome',
            description: 'Angular component library for my own side projects.',
            iconPath: '/icons/library.svg',
            url: 'https://www.npmjs.com/package/ngx-monochrome',
            cards: ['angular', 'npm'],
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
        {
            title: 'Keep In Touch',
            description: 'Keep track of when you last caught up with your friends.',
            iconPath: '/icons/friends.svg',
            url: 'https://friends.namitoyokota.com',
            cards: ['angular', 'npm'],
        } as Project,
        {
            title: 'Nico',
            description: 'Universal search engine for my second brain.',
            iconPath: '/icons/search.svg',
            url: 'https://search.namitoyokota.com',
            cards: ['angular', 'npm'],
        } as Project,
        {
            title: 'Jeep',
            description: 'Decides whether you should take your doors off.',
            iconPath: '/icons/jeep.svg',
            url: 'https://weather.namitoyokota.com',
            cards: ['angular', 'npm'],
        } as Project,
    ];

    return (
        <Layout
            customMeta={{
                title: 'Projects - Namito Yokota',
            }}
        >
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>projects</h1>
                </div>

                <span>why do i work on projects? what are my philosophies?</span>

                {projects.map((project, index) => (
                    <div className={styles.project} key={index}>
                        <div className={styles.name}>
                            <a href={project.url} title={project.url} target="_blank" rel="noreferrer">
                                {project.title}
                            </a>
                            <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                        </div>
                        <p className={styles.description} title={project.description}>
                            {project.description}
                        </p>
                        <div className={styles.cards}>
                            {project.cards.map((card, index) => (
                                <small>{card}</small>
                            ))}
                        </div>
                    </div>
                ))}

                {/* TODO: Create a separate page for each project */}
            </div>
        </Layout>
    );
};

export default Projects;
