import Image from 'next/legacy/image';
import Label from '../components/Label';
import Layout from '../components/Layout';
import Notation from '../components/Notaion';
import { NotationConfigs } from '../models/constants/notation-config';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                {/* Hook */}
                <div className={styles.header}>
                    <h1>Hey, I'm Namito 👋🏼</h1>
                    <span className={styles.subtitle}>
                        Senior Software Engineer based in Huntsville, Alabama. I love serving users by creating minimalistic and pixel
                        perfect user interface.
                    </span>
                    <Label>Looking for new opportunities</Label>
                </div>

                {/* Projects */}
                <section>
                    <label className="sentence">
                        <span>Latest projects</span>
                        <Image alt="Arrow down" height="15" width="15" src="/icons/arrow.svg" />
                    </label>
                    <div className={styles.grid}>
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
                                <span className="grey">Social platform for sharing your next side project ideas</span>
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

                <span>
                    At <Notation config={NotationConfigs.underline}>Venminder</Notation>, I have been leading the front-end development of a
                    web application generating 60% of company revenue. Some of my favorite contributions at Venminder are:
                </span>

                <ul>
                    <li>Creating a rich text editor in markdown format</li>
                    <li>Setting up eslint and prettier for maintaining a clean codebase</li>
                    <li>Contributing to and maintaining the internal component library</li>
                </ul>

                <span>
                    Before Venminder, I spent 2 years developing a highly complex public safety web product at{' '}
                    <Notation config={NotationConfigs.underline}>Hexagon</Notation>. Working on this team was one of my favorite experiences
                    due to it's advancement in the codebase. We had a micro-frontend architecture where over 40 npm packages were
                    communicating with each other without a circular dependency which then is consumed by the root repository to serve the
                    main site. Some of my favorite contributions at Hexagon are:
                </span>

                <ul>
                    <li>Started and deployed npm packages to share models and services between web and mobile codebase</li>
                    <li>Allowed users to find an address of the location on the map using Azure Map Service API</li>
                    <li>Constructed a hierarchical feature flag system to allow management at admin, organization, and user levels</li>
                    <li>Built an end-to-end load test tool to analyze the product performance under stress</li>
                </ul>

                <span>
                    Prior to Hexagon, I worked as an intern with 2 different companies: threeDays and Trips4Trade. At threeDays, I was able
                    to learn the basics of creating static websites. This internship helped me understand the importance of managing a clean
                    codebase. At Trips4Trade however, I learned a new set of tools with using WordPress. I gained experience pushing changes
                    up to different environments, refactoring existing databases, as well as using third-party plugins.
                </span>

                {/* Experience */}
                <section>
                    <label>Experience</label>
                    <div className={styles.list}>
                        <div className={styles.experience}>
                            <span className={styles.time}>2022 - Present</span>
                            <div className={styles.job}>
                                <a
                                    className={styles.company + ' primary'}
                                    href="https://www.linkedin.com/company/venminder"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Venminder
                                </a>
                                <a
                                    className={styles.position + ' secondary'}
                                    href="https://resume.namitoyokota.com/venminder/job-description.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Senior Software Engineer / Junior Software Engineer
                                </a>
                                <span className={styles.description}>Description about the job</span>
                            </div>
                        </div>
                        <div className={styles.experience}>
                            <span className={styles.time}>2021 - 2022</span>
                            <div className={styles.job}>
                                <a
                                    className={styles.company + ' primary'}
                                    href="https://www.linkedin.com/company/hexagon-sig/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Hexagon
                                </a>
                                <a
                                    className={styles.position + ' secondary'}
                                    href="https://resume.namitoyokota.com/hexagon/job-description.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Software Analyst
                                </a>
                                <span className={styles.description}>Description about the job</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <label>Education</label>
                    <div className={styles.list}>
                        <div className={styles.experience}>
                            <span className={styles.time}>2017 - 2020</span>
                            <div className={styles.job}>
                                <a
                                    className={styles.company + ' primary'}
                                    href="https://www.linkedin.com/school/university-of-alabama"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    The University of Alabama
                                </a>
                                <a
                                    className={styles.position + ' secondary'}
                                    href="https://resume.namitoyokota.com/degree/degree.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Bachelors of Science in Computer Science
                                </a>
                                <span className={styles.description}>Minor in Mathematics</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h3>Certifications?</h3>
                    <ul>
                        <li>
                            <span className="sentence">
                                <a
                                    className="secondary"
                                    href="https://www.coursera.org/account/accomplishments/records/MH7UG7T56C52"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>React Basics</span>
                                </a>
                                and
                                <a
                                    className="secondary"
                                    href="https://www.coursera.org/account/accomplishments/records/N3E722CLNM9R"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Advanced React</span>
                                </a>
                                from Meta
                            </span>
                        </li>
                        <li>
                            <span className="sentence">
                                <a
                                    className="secondary"
                                    href="https://www.coursera.org/account/accomplishments/certificate/QXNDTHPH7BF7"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Foundations of User Experience Design</span>
                                </a>
                                from Google
                            </span>
                        </li>
                        <li>
                            <span className="sentence">
                                <a
                                    className="secondary"
                                    href="https://www.coursera.org/account/accomplishments/records/P362PHZ79LH2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Agile Project Management from Google</span>
                                </a>
                                from Google
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default Index;
