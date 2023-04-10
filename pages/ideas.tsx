import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../api/posts';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { PostType } from '../types/post';

type IdeasProps = {
    posts: PostType[];
};

export const Ideas = ({ posts }: IdeasProps): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Ideas - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Ideas</h1>
                <p className={styles.description}>Notes of my random thoughts</p>
            </div>

            <h5>2023</h5>
            {posts
                .filter((post) => parseISO(post.date!).getFullYear() === 2023)
                .map((blog) => (
                    <Link legacyBehavior as={`/posts/${blog.slug}`} href={`/posts/[slug]`} key={blog.slug}>
                        <div className={styles.blog}>
                            <p className={styles.blogtitle}>{blog.title}</p>
                            <p className={styles.date}>{format(parseISO(blog.date!), 'MMMM dd, yyyy')}</p>
                        </div>
                    </Link>
                ))}

            <h5>2022</h5>
            {posts
                .filter((post) => parseISO(post.date!).getFullYear() === 2022)
                .map((blog) => (
                    <Link legacyBehavior as={`/posts/${blog.slug}`} href={`/posts/[slug]`} key={blog.slug}>
                        <div className={styles.blog}>
                            <p className={styles.blogtitle}>{blog.title}</p>
                            <p className={styles.date}>{format(parseISO(blog.date!), 'MMMM dd, yyyy')}</p>
                        </div>
                    </Link>
                ))}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(['date', 'description', 'slug', 'title', 'type']);

    return {
        props: { posts },
    };
};

export default Ideas;
