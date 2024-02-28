import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>hi, i'm namito 👋🏼</h1>
                    <span>I'm a Senior Frontend Engineer II at Venminder.</span>
                </div>

                <p>this is my identity page. write about who i am, what i like to do, why i'm here, etc.</p>
            </div>
        </Layout>
    );
};

export default Index;
