import Image from 'next/legacy/image';
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
                    <h1>
                        Hey, I'm Namito <span className="animate__animated animate__bounce">👋🏼</span>
                    </h1>

                    <span>
                        I currently work as a <Notation config={NotationConfigs.underline}>Senior Frontend Developer</Notation> at
                        Venminder, where I contribute to the leading unified platform for managing third-party risk programs.
                    </span>
                </div>

                {/* Experience */}
                <section>
                    <h3>Do I have any experience?</h3>

                    <span>
                        At <Notation config={NotationConfigs.underline}>Venminder</Notation>, I have been leading the front-end development
                        of a web application generating 60% of company revenue. Some of my favorite contributions at Venminder are:
                    </span>

                    <ul>
                        <li>Creating a rich text editor in markdown format</li>
                        <li>Setting up eslint and prettier for maintaining a clean codebase</li>
                        <li>Contributing to and maintaining the internal component library</li>
                    </ul>

                    <span>
                        Before Venminder, I spent 2 years developing a highly complex public safety web product at{' '}
                        <Notation config={NotationConfigs.underline}>Hexagon</Notation>. Working on this team was one of my favorite
                        experiences due to it's advancement in the codebase. We had a micro-frontend architecture where over 40 npm packages
                        were communicating with each other without a circular dependency which then is consumed by the root repository to
                        serve the main site. Some of my favorite contributions at Hexagon are:
                    </span>

                    <ul>
                        <li>Started and deployed npm packages to share models and services between web and mobile codebase</li>
                        <li>Allowed users to find an address of the location on the map using Azure Map Service API</li>
                        <li>Constructed a hierarchical feature flag system to allow management at admin, organization, and user levels</li>
                        <li>Built an end-to-end load test tool to analyze the product performance under stress</li>
                    </ul>

                    <span>
                        Prior to Hexagon, I worked as an intern with 2 different companies: threeDays and Trips4Trade. At threeDays, I was
                        able to learn the basics of creating static websites. This internship helped me understand the importance of
                        managing a clean codebase. At Trips4Trade however, I learned a new set of tools with using WordPress. I gained
                        experience pushing changes up to different environments, refactoring existing databases, as well as using
                        third-party plugins.
                    </span>
                </section>

                {/* Education */}
                <section>
                    <h3>What about my education?</h3>

                    <span>
                        I have an undergraduate degree in <u>Computer Science</u> with a Mathematics minor from the{' '}
                        <u>University of Alabama</u> 🐘
                    </span>

                    <span>I have also earned certifications throughout my career:</span>

                    <ul>
                        <li>
                            <span className={styles.sentence}>
                                <a
                                    href="https://www.coursera.org/account/accomplishments/records/MH7UG7T56C52"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>React Basics</span>
                                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                                </a>
                                and
                                <a
                                    href="https://www.coursera.org/account/accomplishments/records/N3E722CLNM9R"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Advanced React</span>
                                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                                </a>
                                from <u>Meta</u>
                            </span>
                        </li>
                        <li>
                            <span className={styles.sentence}>
                                <a
                                    href="https://www.coursera.org/account/accomplishments/certificate/QXNDTHPH7BF7"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Foundations of User Experience Design</span>
                                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                                </a>
                                from <u>Google</u>
                            </span>
                        </li>
                        <li>
                            <span className={styles.sentence}>
                                <a
                                    href="https://www.coursera.org/account/accomplishments/records/P362PHZ79LH2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Agile Project Management from Google</span>
                                    <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                                </a>
                                from <u>Google</u>
                            </span>
                        </li>
                    </ul>
                </section>

                {/* Projects */}
                <section>
                    <h3>Any side projects?</h3>

                    <span>
                        Whenever I have free time outside of reading books and hanging out with friend, I like to create websites that I
                        wish existed:
                    </span>

                    <ul>
                        <li>Black and white component library in Angular</li>
                        <li>Social platform for sharing your next side project ideas</li>
                    </ul>
                </section>

                {/* Story */}
                <section>
                    <h3>What got me into web development anyways?</h3>

                    <span>
                        In the freshman year of my high school days, I was told by the counselor that the business course I wanted to take
                        was full. Because of that, I was left with the option for 2 remaining classes: Computer Science or Piano. After
                        making the obvious choice, I fell in love with the freedom and creativity of technology and coding languages. On top
                        of that, I was good at it! So I continued to take all of the Computer Science courses that they offered and
                        eventually got an undergraduate degree in Computer Science.
                    </span>
                </section>
            </div>
        </Layout>
    );
};

export default Index;
