import Layout from '../components/Layout';
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
                        I currently work as a{' '}
                        <a className="secondary" href="https://resume.namitoyokota.com/#experience" target="_blank" rel="noreferrer">
                            Senior Software Engineer
                        </a>{' '}
                        at{' '}
                        <a
                            className="primary"
                            href="https://www.linkedin.com/company/venminder/mycompany/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Venminder
                        </a>
                        , where I contribute to the leading unified platform for managing third-party risk programs.
                    </span>
                </div>

                {/* Skills */}
                <section>
                    <h3>What are my expertise?</h3>
                </section>
                {/* Experience */}
                <section>
                    <h3>Do I have any experience?</h3>
                    <span>
                        At{' '}
                        <a
                            className="primary"
                            href="https://www.linkedin.com/company/venminder/mycompany/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Venminder
                        </a>
                        , I have been leading the front-end development of a web application generating 60% of company revenue. Some of my
                        favorite contributions at Venminder are:
                    </span>
                    <ul>
                        <li>Creating a rich text editor in markdown format</li>
                        <li>Setting up eslint and prettier for maintaining a clean codebase</li>
                        <li>Contributing to and maintaining the internal component library</li>
                    </ul>
                    <span>
                        Before{' '}
                        <a
                            className="primary"
                            href="https://www.linkedin.com/company/venminder/mycompany/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Venminder
                        </a>
                        , I spent 2 years developing a highly complex public safety web product at{' '}
                        <a className="primary" href="https://www.linkedin.com/company/hexagon-sig/" target="_blank" rel="noreferrer">
                            Hexagon
                        </a>
                        . Some of my favorite contributions at Hexagon are:
                    </span>

                    <ul>
                        <li>Deployed npm packages to share services between web and mobile codebase</li>
                        <li>Allowed users to find an address of the location on the map using Azure Map Service API</li>
                        <li>Built an end-to-end load test tool to analyze the product performance under stress</li>
                    </ul>
                    <span>
                        Prior to Hexagon, I worked as an intern with 2 different companies:{' '}
                        <a className="primary" href="http://www.threedaysllc.com/" target="_blank" rel="noreferrer">
                            threeDays
                        </a>{' '}
                        and{' '}
                        <a className="primary" href="https://www.linkedin.com/company/hexagon-sig/" target="_blank" rel="noreferrer">
                            Trips4Trade
                        </a>
                        .
                    </span>
                </section>
                {/* Education */}
                <section>
                    <h3>What about my education?</h3>

                    <span>
                        I have an undergraduate degree in{' '}
                        <a className="secondary" href="https://resume.namitoyokota.com/degree/degree.html" target="_blank" rel="noreferrer">
                            <span>Computer Science</span>
                        </a>{' '}
                        with a Mathematics minor from{' '}
                        <a
                            className="primary"
                            href="https://www.linkedin.com/school/university-of-alabama/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>The University of Alabama</span>
                        </a>{' '}
                        🐘
                    </span>

                    <span>I have also earned certifications throughout my career:</span>

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
                {/* Projects */}
                <section>
                    <h3>Any side projects?</h3>

                    <span>
                        Whenever I have free time outside of reading books and hanging out with friend, I like to create websites that I
                        wish existed:
                    </span>

                    <ul>
                        <li>
                            <a className="secondary" href="https://github.com/namitoyokota/ngx-monochrome" target="_blank" rel="noreferrer">
                                <span>ngx-monochrome</span>
                            </a>
                            : Black and white component library in Angular
                        </li>
                        <li>
                            <a className="secondary" href="https://ideas.namitoyokota.com/" target="_blank" rel="noreferrer">
                                <span>Steeeve</span>
                            </a>
                            : Social platform for sharing your next side project ideas
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default Index;
