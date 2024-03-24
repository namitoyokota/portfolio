import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.pane}>
                {/* Hook */}
                <div className={styles.header}>
                    <h1>Hey, I'm Namito 👋🏼</h1>
                </div>

                {/* Projects */}
                <section>
                    <label>Projects</label>
                    <div className={styles.grid}>
                        <a className={styles.card} href="https://ideas.namitoyokota.com" target="_blank" rel="noreferrer">
                            <div className={styles.icon}>
                                <Image
                                    alt="Steve Project Icon"
                                    height="50"
                                    width="50"
                                    src="https://api.namitoyokota.com/assets/icons/steeeve.png"
                                />
                            </div>
                            <div className={styles.project}>
                                <span>Steeeve</span>
                                <span className={styles.description}>Social platform for sharing your next side project ideas</span>
                            </div>
                        </a>
                        <a className={styles.card} href="https://todo.namitoyokota.com" target="_blank" rel="noreferrer">
                            <div className={styles.icon}>
                                <Image
                                    alt="Todo Project Icon"
                                    height="50"
                                    width="50"
                                    src="https://api.namitoyokota.com/assets/icons/task.png"
                                />
                            </div>
                            <div className={styles.project}>
                                <span>Todo Today</span>
                                <span className={styles.description}>Todo application that resets every night</span>
                            </div>
                        </a>
                        <a className={styles.card} href="https://github.com/namitoyokota/ngx-monochrome" target="_blank" rel="noreferrer">
                            <div className={styles.icon}>
                                <Image
                                    alt="Todo Project Icon"
                                    height="50"
                                    width="50"
                                    src="https://api.namitoyokota.com/assets/icons/task.png"
                                />
                            </div>
                            <div className={styles.project}>
                                <span>ngx-monochrome</span>
                                <span className={styles.description}>Black and white component library in Angular</span>
                            </div>
                        </a>
                    </div>
                </section>

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
