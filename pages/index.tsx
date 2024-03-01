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

        // TODO: Add a console log with a polite message!
    }, []);

    return (
        <Layout>
            <div className={styles.pane}>
                {/* first impression */}
                <div className={styles.header}>
                    <h1>
                        hey, i'm namito <span className="animate__animated animate__bounce">👋🏼</span>
                    </h1>
                    <span>
                        i'm a <span id="frontend-developer">frontend developer</span> and i write clean code for pixel perfect user
                        interface!
                    </span>
                </div>

                {/* my story */}
                <section>
                    <h3>story</h3>
                    <p>
                        when i was in <u>9th grade</u>, a business class i wanted to sign up for was full. my counselor told me that i can
                        either take "coding" or "piano" class. ever since i made the obvious choice, i've been in love with the{' '}
                        <u>freedom and creativity</u> of coding!
                    </p>
                </section>

                {/* action step */}
                <span>i'm open to senior frontend developer position at a passionate and team-oriented organization!</span>

                {/* TODO: Coding languages I'm comfortable with */}

                {/* TODO: Current methods of learning: newsletters, youtube videos, etc */}
            </div>
        </Layout>
    );
};

export default Index;
