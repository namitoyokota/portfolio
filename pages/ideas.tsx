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

            <div className={styles.blogspane}>
                {posts.map((blog, index) => (
                    <Link as={`/posts/${blog.slug}`} href={`/posts/[slug]`} key={blog.slug}>
                        <div className={styles.blog}>
                            <h4 className={styles.blogtitle}>{blog.title}</h4>
                            <p className={styles.date}>{format(parseISO(blog.date!), 'MMMM dd, yyyy')}</p>
                        </div>
                    </Link>
                ))}
            </div>
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
