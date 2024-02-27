import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.aboutpane}>
                <div className={styles.aboutheader}>
                    <h1>hi, i'm namito 👋🏼</h1>
                    <p>I'm a Senior Frontend Engineer II at Venminder.</p>
                </div>

                <div className={styles.aboutcontent}>tbd...</div>
            </div>
        </Layout>
    );
};

export default Index;
