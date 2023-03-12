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
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://standups.namito.wiki',
        } as Subdomain,
        {
            title: 'Brags',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://brags.namito.wiki',
        } as Subdomain,
        {
            title: 'Resume',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://resume.namito.wiki',
        } as Subdomain,
        {
            title: 'Degree',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://degree.namito.wiki',
        } as Subdomain,
        {
            title: 'Photos',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://photos.namito.wiki',
        } as Subdomain,
        {
            title: 'Art',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://art.namito.wiki',
        } as Subdomain,
        {
            title: 'Quotes',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://quotes.namito.wiki',
        } as Subdomain,
        {
            title: 'Books',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://books.namito.wiki',
        } as Subdomain,
        {
            title: 'Jeep',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://jeep.namito.wiki',
        } as Subdomain,
        {
            title: 'Search',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://search.namito.wiki',
        } as Subdomain,
        {
            title: 'Bowling',
            description: '[Description]',
            iconPath: '/icons/github.svg',
            url: 'https://bowling.namito.wiki',
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
                {subdomains.map((subdomain) => (
                    <a className={styles.subdomaincard} href={subdomain.url} target="_blank" rel="noreferrer">
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
