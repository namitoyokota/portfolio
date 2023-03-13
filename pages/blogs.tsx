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
                <p className={styles.description}>My coding knowledge :)</p>
            </div>

            {posts.map((post: Post) => (
                <Link key={post._id} href={`https://blog.namito.wiki/${post.slug}`}>
                    <a className={styles.blog} target="_blank" rel="noopener noreferrer">
                        <h4 className={styles.blogtitle}>{post.title}</h4>
                        <p className={styles.date}>{format(parseISO(post.dateAdded!), 'MMMM dd, yyyy')}</p>
                    </a>
                </Link>
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
