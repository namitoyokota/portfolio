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
                </div>

                {/* Experience */}
                <section>
                    <h3>Experience?</h3>

                    <ul>
                        <li>
                            <div className="sentence">
                                <a
                                    className="secondary"
                                    href="https://resume.namitoyokota.com/venminder/job-description.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Senior Software Engineer
                                </a>
                                <span>@</span>
                                <a className="primary" href="https://www.linkedin.com/company/venminder" target="_blank" rel="noreferrer">
                                    Venminder
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="sentence">
                                <a
                                    className="secondary"
                                    href="https://resume.namitoyokota.com/hexagon/job-description.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Software Analyst
                                </a>
                                <span>@</span>
                                <a
                                    className="primary"
                                    href="https://www.linkedin.com/company/hexagon-sig/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Hexagon
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="sentence">
                                <span>Software Intern</span>
                                <span>@</span>
                                <a className="primary" href="https://www.linkedin.com/company/trips4trade" target="_blank" rel="noreferrer">
                                    Trips4Trade
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="sentence">
                                <span>Software Intern</span>
                                <span>@</span>
                                <a className="primary" href="http://www.threedaysllc.com/" target="_blank" rel="noreferrer">
                                    threeDays
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Education */}
                <section>
                    <h3>Education?</h3>
                    <ul>
                        <li>
                            <span className="sentence">
                                <a
                                    className="secondary"
                                    href="https://resume.namitoyokota.com/degree/degree.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>Computer Science</span>
                                </a>
                                <span>from</span>
                                <a
                                    className="primary"
                                    href="https://www.linkedin.com/school/university-of-alabama/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>The University of Alabama</span>
                                </a>
                            </span>
                        </li>
                    </ul>
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

                {/* Projects */}
                <section>
                    <h3>Side Projects?</h3>
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
                        <li>
                            <a className="secondary" href="https://todo.namitoyokota.com/" target="_blank" rel="noreferrer">
                                <span>Todo Today</span>
                            </a>
                            : Todo application that resets every night
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default Index;
