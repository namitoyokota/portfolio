import { useEffect } from 'react';
import { annotate, annotationGroup } from 'rough-notation';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    /**
     * Adds rough notations to the page
     */
    useEffect(() => {
        const frontendDeveloperText = annotate(document.querySelector('#frontend-developer') as HTMLElement, {
            type: 'underline',
            color: '#2ec4b6',
        });

        annotationGroup([frontendDeveloperText]).show();
    }, []);

    return (
        <Layout>
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>
                        hey, i'm namito <span className="animate__animated animate__bounce">👋🏼</span>
                    </h1>
                    <span>
                        I'm a <span id="frontend-developer">Frontend Developer</span> who loves to write clean and pixel perfect code.
                    </span>
                </div>

                <p>this is my identity page. write about who i am, what i like to do, why i'm here, etc.</p>
            </div>
        </Layout>
    );
};

export default Index;
