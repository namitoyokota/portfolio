import Layout from '../components/Layout';
import styles from '../styles/works.module.css';

export const Works = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>works</h1>
                </div>

                <p>
                    write about my experience currently at venminder. what i'm working on, years of experience technology used, etc. use a
                    card ui. you could even include contribution statistics and brad document links.
                </p>

                <p>do the same for hexagon.</p>

                <p>maybe write about courses and education here too.</p>

                <p>other images, dividers, links, and other graphics to make this page more entertaining and pleasing to the eye.</p>
            </div>
        </Layout>
    );
};

export default Works;
