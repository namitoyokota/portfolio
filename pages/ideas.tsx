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

            {[...new Set(posts.filter((post) => !post.draft).map((post) => parseISO(post.date!).getFullYear()))].map((year) => (
                <div key={year}>
                    <h5>{year}</h5>
                    {posts
                        .filter((post) => !post.draft && parseISO(post.date!).getFullYear() === year)
                        .map((idea) => (
                            <Link legacyBehavior as={`/posts/${idea.slug}`} href={`/posts/[slug]`} key={idea.slug}>
                                <div className={styles.blog}>
                                    <div className={styles.blogheader}>
                                        <p className={styles.blogtitle}>
                                            {idea.title} {idea.hot ? String.fromCodePoint(parseInt('1F525', 16)) : ''}
                                        </p>
                                        <span className={styles.blogdescription}>{idea.subtitle}</span>
                                    </div>
                                    <p className={styles.date}>{format(parseISO(idea.date!), 'MMMM dd, yyyy')}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            ))}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(['date', 'subtitle', 'slug', 'title', 'type', 'hot', 'draft']);

    return {
        props: { posts },
    };
};

export default Ideas;
