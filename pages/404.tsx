import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const NotFound = (): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Not Found - Namito Yokota',
            }}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>Got Lost?</h1>
                <p className={styles.description}>This page doesn't not exist.</p>
            </div>
        </Layout>
    );
};
export default NotFound;
