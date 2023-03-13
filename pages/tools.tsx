import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

interface Tool {
    title: string;
    subtitle: string;
    iconPath: string;
    url: string;
}

export const Tools = (): JSX.Element => {
    /** List of tools to display in HTML */
    const tools = [
        {
            title: 'Search 🔥',
            subtitle: 'Universal search engine for my second brain',
            iconPath: '/icons/search.svg',
            url: 'https://search.namito.wiki',
        } as Tool,
        {
            title: 'Books ✨',
            subtitle: 'Book recommendations, summaries, and notes',
            iconPath: '/icons/books.svg',
            url: 'https://books.namito.wiki',
        } as Tool,
        {
            title: 'Standups',
            subtitle: 'A history of my standups',
            iconPath: '/icons/standups.svg',
            url: 'https://standups.namito.wiki',
        } as Tool,
        {
            title: 'Brags',
            subtitle: 'A collection of my brag documents',
            iconPath: '/icons/brags.svg',
            url: 'https://brags.namito.wiki',
        } as Tool,
        {
            title: 'Resume',
            subtitle: 'Web version of my resume',
            iconPath: '/icons/resume.svg',
            url: 'https://resume.namito.wiki',
        } as Tool,
        {
            title: 'Degree',
            subtitle: 'All courses from my CS degree',
            iconPath: '/icons/degree.svg',
            url: 'https://degree.namito.wiki',
        } as Tool,
        {
            title: 'Photos ⭐',
            subtitle: 'My photography portfolio',
            iconPath: '/icons/photos.svg',
            url: 'https://photos.namito.wiki',
        } as Tool,
        {
            title: 'Art',
            subtitle: 'My art portfolio',
            iconPath: '/icons/art.svg',
            url: 'https://art.namito.wiki',
        } as Tool,
        {
            title: 'Quotes',
            subtitle: 'A list of inspirational quotes',
            iconPath: '/icons/quotes.svg',
            url: 'https://quotes.namito.wiki',
        } as Tool,
        {
            title: 'Jeep',
            subtitle: 'Should you take your doors off?',
            iconPath: '/icons/jeep.svg',
            url: 'https://jeep.namito.wiki',
        } as Tool,
        {
            title: 'Bowling',
            subtitle: 'Bowling score calculator',
            iconPath: '/icons/bowling.svg',
            url: 'https://bowling.namito.wiki',
        } as Tool,
        {
            title: 'Pray',
            subtitle: 'A prayer board',
            iconPath: '/icons/pray.svg',
            url: 'https://pray.namito.wiki',
        } as Tool,
    ];

    return (
        <Layout
            customMeta={{
                title: 'Tools - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Tools</h1>
                <p className={styles.description}>Tools for my everyday use</p>
            </div>

            <div className={styles.board}>
                {tools.map((tool, index) => (
                    <a key={index} className={styles.toolcard} href={tool.url} target="_blank" rel="noreferrer">
                        <div className={styles.toolheader}>
                            <h3>{tool.title}</h3>
                            <Image alt="github" height="15px" width="15px" src={tool.iconPath} />
                        </div>
                        <span className={styles.description}>{tool.subtitle}</span>
                    </a>
                ))}
            </div>
        </Layout>
    );
};

export default Tools;
