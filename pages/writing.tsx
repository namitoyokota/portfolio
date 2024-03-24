import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/writing.module.css';

interface Post {
    id: string;
    url: string;
    title: string;
    publishedAt: string;
    subtitle: string;
    reactionCount: number;
}

type WritingProps = {
    posts: Post[];
};

export const Writing = ({ posts }: WritingProps): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Writing - Namito Yokota',
            }}
        >
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>Writing</h1>
                </div>

                {[...new Set(posts.map((post) => parseISO(post.publishedAt!).getFullYear()))].map((year) => (
                    <section key={year}>
                        <h3>{year}</h3>
                        <div className={styles.list}>
                            {posts
                                .filter((post) => parseISO(post.publishedAt!).getFullYear() === year)
                                .map((writing) => (
                                    <Link legacyBehavior key={writing.id} href={writing.url}>
                                        <a className={styles.writing} target="_blank" rel="noopener noreferrer">
                                            <div className={styles.info}>
                                                <span className={styles.title}>{writing.title}</span>
                                                <span className={styles.description} title={writing.subtitle}>
                                                    {writing.subtitle}
                                                </span>
                                            </div>
                                            <p className={styles.date}>{format(parseISO(writing.publishedAt!), 'MMMM dd, yyyy')}</p>
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://gql.hashnode.com/',
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
            query Publication {
                publication(host: "blogs.namitoyokota.com") {
                    posts(first: 10) {
                        edges {
                            node {
                                id
                                url
                                title
                                subtitle
                                publishedAt
                                reactionCount
                            }
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
            posts: (data.publication.posts.edges as any[]).map((edge) => edge.node),
        },
    };
}

export default Writing;
