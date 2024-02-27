import Layout from '../components/Layout';
import styles from '../styles/works.module.css';

export const Works = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>works</h1>
                </div>

                <span>
                    write about my experience currently at venminder. what i'm working on, years of experience technology used, etc. use a
                    card ui. you could even include contribution statistics and brad document links.
                </span>

                <span>do the same for hexagon.</span>

                <span>maybe write about courses and education here too.</span>

                <span>other images, dividers, and other graphics to make this page more entertaining and pleasing to the eye.</span>
            </div>
        </Layout>
    );
};

export default Works;
