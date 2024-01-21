import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

interface Project {
    title: string;
    subtitle: string;
    iconPath: string;
    url: string;
}

export const Projects = (): JSX.Element => {
    /** List of projects to display in HTML */
    const projects = [
        {
            title: 'ngx-monochrome',
            subtitle: 'Angular component library for my own side projects.',
            iconPath: '/icons/library.svg',
            url: 'https://resume.namitoyokota.com',
        } as Project,
        {
            title: 'Steeeve',
            subtitle: 'Share your next side project ideas.',
            iconPath: '/icons/ideas.svg',
            url: 'https://ideas.namitoyokota.com',
        } as Project,
        {
            title: 'Todo Today',
            subtitle: 'To do app that resets every midnight.',
            iconPath: '/icons/tasks.svg',
            url: 'https://todo.namitoyokota.com',
        } as Project,
        {
            title: 'Keep In Touch',
            subtitle: 'Keep track of when you last caught up with your friends.',
            iconPath: '/icons/friends.svg',
            url: 'https://friends.namitoyokota.com',
        } as Project,
        {
            title: 'Nico',
            subtitle: 'Universal search engine for my second brain.',
            iconPath: '/icons/search.svg',
            url: 'https://search.namitoyokota.com',
        } as Project,
        {
            title: 'Jeep',
            subtitle: 'Decides whether you should take your doors off.',
            iconPath: '/icons/jeep.svg',
            url: 'https://weather.namitoyokota.com',
        } as Project,
    ];

    return (
        <Layout
            customMeta={{
                title: 'Projects - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.description}>My babies</p>
            </div>

            <div className={styles.board}>
                {projects.map((project, index) => (
                    <a key={index} className={styles.projectcard} href={project.url} target="_blank" rel="noreferrer">
                        <div className={styles.projectheader}>
                            <h3>{project.title}</h3>
                            <Image alt="github" height="15" width="15" src={project.iconPath} />
                        </div>
                        <span className={styles.description}>{project.subtitle}</span>
                    </a>
                ))}
            </div>
        </Layout>
    );
};

export default Projects;
