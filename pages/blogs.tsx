import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

interface Post {
    _id: string;
    slug: string;
    title: string;
    dateAdded: string;
    brief: string;
    totalReactions: number;
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
            <div className={styles.header}>
                <h1 className={styles.title}>Blogs</h1>
                <p className={styles.description}>Sharing my coding knowledge</p>
            </div>

            {[...new Set(posts.map((post) => parseISO(post.dateAdded!).getFullYear()))].map((year) => (
                <div key={year}>
                    <h5>{year}</h5>
                    {posts
                        .filter((post) => parseISO(post.dateAdded!).getFullYear() === year)
                        .map((blog) => (
                            <Link legacyBehavior key={blog._id} href={`https://blog.namito.wiki/${blog.slug}`}>
                                <a className={styles.blog} target="_blank" rel="noopener noreferrer">
                                    <div className={styles.blogheader}>
                                        <p className={styles.blogtitle}>{blog.title}</p>
                                        <span className={styles.blogdescription}>
                                            {blog.brief} {blog.totalReactions ? String.fromCodePoint(parseInt('1F525', 16)) : ''}
                                        </span>
                                    </div>
                                    <p className={styles.date}>{format(parseISO(blog.dateAdded!), 'MMMM dd, yyyy')}</p>
                                </a>
                            </Link>
                        ))}
                </div>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api.hashnode.com/',
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
            query GetPosts {
                user(username: "namito") {
                    publication {
                        posts(page: 0) {
                            _id
                            slug
                            title
                            dateAdded
                            brief
                            totalReactions
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
            posts: data.user.publication.posts,
        },
    };
}

export default Blogs;
