import Image from 'next/legacy/image';
import { RoughAnnotationConfig } from 'rough-notation/lib/model';
import Label from '../components/Label';
import Layout from '../components/Layout';
import Notation from '../components/Notaion';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    /** Configuration for rough notation */
    const underline = {
        type: 'underline',
        color: '#f97316',
    } as RoughAnnotationConfig;

    return (
        <Layout
            customMeta={{
                title: 'Home - Namito Yokota',
                description:
                    'Senior Software Engineer based in Huntsville, Alabama. I love serving users by creating accessible, minimalistic, and pixel perfect user interface!',
            }}
        >
            {/* Hook */}
            <section className={styles.header}>
                <h1>Hey, I'm Namito 👋🏼</h1>
                <span className={styles.subtitle}>
                    Senior Software Engineer based in Huntsville, Alabama. I love serving users by creating accessible, minimalistic, and
                    pixel perfect user interface!
                </span>
                <div className={styles.skills}>
                    <Label alternate={true}>Angular</Label>
                    <Label alternate={true}>Next.js</Label>
                    <Label alternate={true}>HTML</Label>
                    <Label alternate={true}>CSS</Label>
                </div>
                <Label>Looking for new opportunities!</Label>
            </section>

            {/* Projects */}
            <section>
                <label className="sentence">
                    <span>Latest projects</span>
                    <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                </label>
                <div className={styles.projects}>
                    <a className={styles.card} href="https://github.com/namitoyokota/ngx-monochrome" target="_blank" rel="noreferrer">
                        <Image
                            className={styles.thumbnail}
                            alt="Monochrome website preview"
                            height="545"
                            width="968"
                            src="https://api.namitoyokota.com/assets/og-images/monochrome.png"
                        />
                        <div className={styles.project}>
                            <span>ngx-monochrome</span>
                            <span className={styles.description}>Black and white component library in Angular</span>
                        </div>
                    </a>
                    <a className={styles.card} href="https://ideas.namitoyokota.com" target="_blank" rel="noreferrer">
                        <Image
                            className={styles.thumbnail}
                            alt="Ideas website preview"
                            height="545"
                            width="968"
                            src="https://api.namitoyokota.com/assets/og-images/steeeve.png"
                        />
                        <div className={styles.project}>
                            <span>Steeeve</span>
                            <span className={styles.description}>Social platform for sharing your next side project ideas</span>
                        </div>
                    </a>
                    <a className={styles.card} href="https://todo.namitoyokota.com" target="_blank" rel="noreferrer">
                        <Image
                            className={styles.thumbnail}
                            alt="To do website preview"
                            height="545"
                            width="968"
                            src="https://api.namitoyokota.com/assets/og-images/todo.png"
                        />
                        <div className={styles.project}>
                            <span>Todo Today</span>
                            <span className={styles.description}>Todo application that resets every night</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Experience */}
            <section>
                <label className="sentence">
                    <span>Recent experiences</span>
                    <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                </label>
                <div className={styles.list}>
                    <span>
                        At <Notation config={underline}>Venminder</Notation>, I have been leading the front-end development of a web
                        application generating 60% of company revenue. I love my experience so far here as I've been trusted with the
                        freedom to explore new libraries and create prototypes.
                    </span>

                    <span>
                        Before Venminder, I spent 2 years developing a highly complex public safety web product at{' '}
                        <Notation config={underline}>Hexagon</Notation>. Working on this team was one of my favorite experiences due to it's
                        advancement in the codebase. We had a micro-frontend architecture where over 40 npm packages were communicating with
                        each other without a circular dependency which then is consumed by the root repository to serve the main site.
                    </span>

                    <span>
                        Prior to Hexagon, I worked as an intern with 2 different companies: threeDays and Trips4Trade. At{' '}
                        <Notation config={underline}>threeDays</Notation>, I was able to learn the basics of creating static websites. This
                        internship helped me understand the importance of managing a clean codebase. At{' '}
                        <Notation config={underline}>Trips4Trade</Notation> however, I learned a new set of tools with using WordPress. I
                        gained experience pushing changes up to different environments, refactoring existing databases, as well as using
                        third-party plugins.
                    </span>
                </div>
            </section>

            {/* Education */}
            <section>
                <label className="sentence">
                    <span>Education</span>
                    <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                </label>
                <div className={styles.list}>
                    <div className={styles.education}>
                        <a className={styles.card} href="https://photos.namitoyokota.com" target="_blank" rel="noreferrer">
                            <Image
                                className={styles.thumbnail}
                                alt="Graduation picture"
                                height="5555"
                                width="3703"
                                src="/images/graduation.jpeg"
                            />
                        </a>
                        <div className={styles.list}>
                            <label>Certifications</label>
                            <span>
                                Since I enjoy learning, I spend my spare time taking online courses to sharpen my skills as a developer:
                            </span>
                            <div className="items">
                                <div className="bullet">
                                    <Image alt="Facebook logo" height="15" width="15" src="/icons/facebook.svg" />
                                    <span>
                                        <a
                                            className="primary"
                                            href="https://www.coursera.org/account/accomplishments/records/MH7UG7T56C52"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            React Basics
                                        </a>{' '}
                                        and{' '}
                                        <a
                                            className="primary"
                                            href="https://www.coursera.org/account/accomplishments/records/N3E722CLNM9R"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Advanced React
                                        </a>{' '}
                                        from Meta
                                    </span>
                                </div>
                                <div className="bullet">
                                    <Image alt="Google logo" height="15" width="15" src="/icons/google.svg" />
                                    <span>
                                        <a
                                            className="primary"
                                            href="https://www.coursera.org/account/accomplishments/certificate/QXNDTHPH7BF7"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span>Foundations of User Experience Design</span>
                                        </a>{' '}
                                        from Google
                                    </span>
                                </div>
                                <div className="bullet">
                                    <Image alt="Google logo" height="15" width="15" src="/icons/google.svg" />
                                    <span>
                                        <a
                                            className="primary"
                                            href="https://www.coursera.org/account/accomplishments/records/P362PHZ79LH2"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span>Agile Project Management from Google</span>
                                        </a>{' '}
                                        from Google
                                    </span>
                                </div>
                            </div>
                            <label>Undergraduate degree</label>
                            <span>
                                I have a degree from the University of Alabama in <Notation config={underline}>Computer Science</Notation>{' '}
                                with a <Notation config={underline}>Mathematics</Notation> minor. Some of my favorite courses were:
                            </span>
                            <div className="items">
                                <div className="bullet">
                                    <Image alt="Checkmark" height="15" width="15" src="/icons/checkmark.svg" />
                                    <a
                                        className="primary"
                                        href="https://resume.namitoyokota.com/degree/degree.html#data-structures-and-algorithms"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>Data Structures and Algorithms</span>
                                    </a>
                                </div>
                                <div className="bullet">
                                    <Image alt="Checkmark" height="15" width="15" src="/icons/checkmark.svg" />
                                    <a
                                        className="primary"
                                        href="https://resume.namitoyokota.com/degree/degree.html#high-performance-computing"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        High Performance Computing
                                    </a>
                                </div>
                                <div className="bullet">
                                    <Image alt="Checkmark" height="15" width="15" src="/icons/checkmark.svg" />
                                    <a
                                        className="primary"
                                        href="https://resume.namitoyokota.com/degree/degree.html#web-foundations"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Web Foundations
                                    </a>
                                </div>
                            </div>

                            <span>
                                I cherish my 4 years of college experience as I've grown tremendously as a person. I even got to gain
                                professional experience through extracurricular activities:
                            </span>
                            <div className="items">
                                <div className="bullet">
                                    <Image alt="Star" height="15" width="15" src="/icons/star.svg" />
                                    <a className="primary" href="https://uaecocar.com/" target="_blank" rel="noreferrer">
                                        EcoCAR Challenge
                                    </a>
                                </div>
                                <div className="bullet">
                                    <Image alt="Star" height="15" width="15" src="/icons/star.svg" />
                                    <a className="primary" href="https://www.acm.org/" target="_blank" rel="noreferrer">
                                        Association for Computing Machinery
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
