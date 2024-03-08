import { RevealWrapper } from 'next-reveal';
import Layout from '../components/Layout';
import Notation from '../components/Notaion';
import { NotationConfigs } from '../models/constants/notation-config';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                {/* first impression */}
                <RevealWrapper>
                    <div className={styles.header}>
                        <h1>
                            hey, i'm namito <span className="animate__animated animate__bounce">👋🏼</span>
                        </h1>
                        <span>
                            i write <Notation config={NotationConfigs.underline}>clean code</Notation> with a smile.
                        </span>
                    </div>
                </RevealWrapper>

                {/* about me */}
                <RevealWrapper>
                    <section>
                        <h3>about me</h3>
                        <p>
                            i am a <u>frontend developer</u>.
                        </p>
                    </section>
                </RevealWrapper>

                {/* my story */}
                <RevealWrapper>
                    <section>
                        <h3>my story</h3>
                        <p>
                            when i was in <u>9th grade</u>, a business class i wanted to sign up for was full. my counselor told me that i
                            can either take "coding" or "piano" class. ever since i made the obvious choice, i've been in love with the{' '}
                            <u>freedom and creativity</u> of coding!
                        </p>
                    </section>
                </RevealWrapper>

                {/* action step */}
                <RevealWrapper>
                    <section>
                        <h3>what's next?</h3>
                        <p>
                            i'm open to contributing as a senior frontend developer at a{' '}
                            <Notation config={NotationConfigs.underline}>passionate</Notation> and{' '}
                            <Notation config={NotationConfigs.underline}>team-oriented</Notation> organization!
                        </p>
                    </section>
                </RevealWrapper>

                {/* TODO: Coding languages I'm comfortable with */}

                {/* TODO: Current methods of learning: newsletters, youtube videos, etc */}
            </div>
        </Layout>
    );
};

export default Index;
