import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>
                        hey, i'm namito <span className="animate__animated animate__bounce">👋🏼</span>
                    </h1>
                    <span>I'm a Frontend Developer at Venminder.</span>
                </div>

                <p>this is my identity page. write about who i am, what i like to do, why i'm here, etc.</p>
            </div>
        </Layout>
    );
};

export default Index;
