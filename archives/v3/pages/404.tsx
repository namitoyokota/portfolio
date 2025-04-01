import Layout from '../components/Layout';
import styles from '../styles/404.module.css';

export const NotFound = (): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Not Found - Namito Yokota',
            }}
        >
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>got lost?</h1>
                    <p className={styles.description}>you're not supposed to be here...</p>
                </div>
            </div>
        </Layout>
    );
};
export default NotFound;
