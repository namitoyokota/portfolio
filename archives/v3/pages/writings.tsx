import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { WritingsProps } from '../models/types/writings-props';
import styles from '../styles/writings.module.css';

export const Writings = ({ posts }: WritingsProps): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Writings - Namito Yokota',
                description:
                    'I use writing as a medium to open-source my learnings and notes to my future self. The hope is that along the way, I can help others facing the same problems!',
            }}
        >
            <h1>Writings</h1>
            {[...new Set(posts.map((post) => parseISO(post.publishedAt!).getFullYear()))].map((year) => (
                <section key={year}>
                    <label className="sentence">
                        <span>From {year}</span>
                        <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                    </label>
                    <hr />
                    <div className={styles.list}>
                        {posts
                            .filter((post) => parseISO(post.publishedAt!).getFullYear() === year)
                            .map((writing) => (
                                <Link legacyBehavior key={writing.id} as={`/post/${writing.slug}`} href={`/post/[slug]`}>
                                    <div className={styles.writing}>
                                        <div className={styles.title} title={writing.title}>
                                            <span>{writing.title}</span>
                                            {writing.reactionCount > 0 && (
                                                <Image alt="trending" height="15" width="15" src="/icons/trending-up.svg" />
                                            )}
                                        </div>
                                        <span className={styles.date} title={format(parseISO(writing.publishedAt!), 'MMMM dd, yyyy')}>
                                            {format(parseISO(writing.publishedAt!), 'MMMM dd, yyyy')}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>
            ))}
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
                                slug
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

export default Writings;
