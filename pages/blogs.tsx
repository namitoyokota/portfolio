import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/blogs.module.css';

interface Post {
    id: string;
    url: string;
    title: string;
    publishedAt: string;
    subtitle: string;
    reactionCount: number;
}

type BlogsProps = {
    posts: Post[];
};

export const Blogs = ({ posts }: BlogsProps): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Blogs - Namito Yokota',
            }}
        >
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>blogs</h1>
                </div>

                {[...new Set(posts.map((post) => parseISO(post.publishedAt!).getFullYear()))].map((year) => (
                    <div key={year} className={styles.section}>
                        <p className={styles.year}>{year}</p>
                        <div className={styles.list}>
                            {posts
                                .filter((post) => parseISO(post.publishedAt!).getFullYear() === year)
                                .map((blog) => (
                                    <Link legacyBehavior key={blog.id} href={blog.url}>
                                        <a className={styles.blog} target="_blank" rel="noopener noreferrer">
                                            <div className={styles.info}>
                                                <p className={styles.title}>{blog.title}</p>
                                                <span className={styles.description}>{blog.subtitle}</span>
                                            </div>
                                            <p className={styles.date}>{format(parseISO(blog.publishedAt!), 'MMMM dd, yyyy')}</p>
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>
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

export default Blogs;
