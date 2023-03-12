import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Blogs = (): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Blogs - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Blogs</h1>
                <p className={styles.description}>Coming Soon!</p>
            </div>
        </Layout>
    );
};

export default Blogs;
