import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import { projects } from '../models/constants/projects';
import styles from '../styles/projects.module.css';

export const Projects = (): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Projects - Namito Yokota',
            }}
        >
            <div className={styles.pane}>
                <div className={styles.header}>
                    <h1>projects</h1>
                </div>

                <p>
                    i work on projects in order to create tools that i wish existed, as well as for me to learn new and sharpen my current
                    skills.
                </p>

                <hr />

                <section>
                    {/* Name  */}
                    <div className={styles.content}>
                        <h3 className={styles.name}>
                            <a
                                href="https://www.npmjs.com/package/ngx-monochrome"
                                title="https://www.npmjs.com/package/ngx-monochrome"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ngx-monochrome
                            </a>
                            <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                        </h3>

                        {/* Subtitle */}
                        <small>Angular component library for my side projects.</small>
                    </div>

                    {/* Story */}
                    <p>Since I had learned how to maintain an internal component library at my full-time job, I wanted to</p>
                    <ol>
                        <li>test my knowledge by creating my own library</li>
                        <li>create my unique look and feel to use for my side projects</li>
                    </ol>

                    {/* Lessons */}
                    <p>From this project, I learned:</p>
                    <ul>
                        <li>
                            I learned the most about npm from this project. I got to understand different CLI tools and managing the
                            versioning and publishing process. It was interesting setting up the access token for a public repository as
                            well.
                        </li>
                        <li>
                            I also gained a significant amount of knowledge on GitHub Actions. I was able to achieve auto publishing of the
                            npm package as well as publishing the website.
                        </li>
                        <li>
                            One of the unexpected lessons was how to effectively use the testbed and the component library package.
                            Optimizing the scripts within the package.json file significantly improved the coding process.
                        </li>
                    </ul>

                    {/* Technologies */}
                    <div className={styles.cards}>
                        <small>Angular</small>
                        <small>npm</small>
                        <small>GitHub Actions</small>
                    </div>
                </section>

                {/* List of Projects */}
                {projects.map((project, index) => (
                    <>
                        <hr />

                        <section key={index}>
                            {/* Name  */}
                            <h3 className={styles.name}>
                                <a href={project.url} title={project.url} target="_blank" rel="noreferrer">
                                    {project.title}
                                </a>
                                <Image alt="github" height="12" width="12" src="/icons/link.svg" />
                            </h3>

                            {/* Subtitle */}
                            <small className={styles.description} title={project.description}>
                                {project.description}
                            </small>

                            {/* Technologies */}
                            <div className={styles.cards}>
                                {project.cards.map((card, index) => (
                                    <small>{card}</small>
                                ))}
                            </div>
                        </section>
                    </>
                ))}

                {/* TODO: Create a separate page for each project */}
            </div>
        </Layout>
    );
};

export default Projects;
