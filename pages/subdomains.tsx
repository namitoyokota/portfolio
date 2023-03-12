import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

interface Subdomain {
    title: string;
    description: string;
    iconPath: string;
    url: string;
}

export const Subdomains = (): JSX.Element => {
    /** List of subdomains to display in HTML */
    const subdomains = [
        {
            title: 'Standups',
            description: 'A history of my standups',
            iconPath: '/icons/standups.svg',
            url: 'https://standups.namito.wiki',
        } as Subdomain,
        {
            title: 'Brags',
            description: 'A collection of my brag documents',
            iconPath: '/icons/brags.svg',
            url: 'https://brags.namito.wiki',
        } as Subdomain,
        {
            title: 'Resume',
            description: 'Web version of my resume',
            iconPath: '/icons/resume.svg',
            url: 'https://resume.namito.wiki',
        } as Subdomain,
        {
            title: 'Degree',
            description: 'All courses from my CS degree',
            iconPath: '/icons/degree.svg',
            url: 'https://degree.namito.wiki',
        } as Subdomain,
        {
            title: 'Photos',
            description: 'My photography portfolio',
            iconPath: '/icons/photos.svg',
            url: 'https://photos.namito.wiki',
        } as Subdomain,
        {
            title: 'Art',
            description: 'My art portfolio',
            iconPath: '/icons/art.svg',
            url: 'https://art.namito.wiki',
        } as Subdomain,
        {
            title: 'Quotes',
            description: 'A list of inspirational quotes',
            iconPath: '/icons/quotes.svg',
            url: 'https://quotes.namito.wiki',
        } as Subdomain,
        {
            title: 'Books',
            description: 'Book recommendations, summaries, and notes',
            iconPath: '/icons/books.svg',
            url: 'https://books.namito.wiki',
        } as Subdomain,
        {
            title: 'Jeep',
            description: 'Should you take your doors off?',
            iconPath: '/icons/jeep.svg',
            url: 'https://jeep.namito.wiki',
        } as Subdomain,
        {
            title: 'Search',
            description: 'Universal search engine for my second brain',
            iconPath: '/icons/search.svg',
            url: 'https://search.namito.wiki',
        } as Subdomain,
        {
            title: 'Bowling',
            description: 'Bowling score calculator',
            iconPath: '/icons/bowling.svg',
            url: 'https://bowling.namito.wiki',
        } as Subdomain,
        {
            title: 'Pray',
            description: 'A prayer board',
            iconPath: '/icons/pray.svg',
            url: 'https://pray.namito.wiki',
        } as Subdomain,
    ];

    return (
        <Layout
            customMeta={{
                title: 'Subdomains - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Subdomains</h1>
                <p className={styles.description}>Tools for my everyday use</p>
            </div>

            <div className={styles.board}>
                {subdomains.map((subdomain, index) => (
                    <a key={index} className={styles.subdomaincard} href={subdomain.url} target="_blank" rel="noreferrer">
                        <div className={styles.subdomainheader}>
                            <h3>{subdomain.title}</h3>
                            <Image alt="github" height="15px" width="15px" src={subdomain.iconPath} />
                        </div>
                        <span className={styles.description}>{subdomain.description}</span>
                    </a>
                ))}
            </div>
        </Layout>
    );
};

export default Subdomains;
