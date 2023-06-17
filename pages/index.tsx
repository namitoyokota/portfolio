import Image from 'next/legacy/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { Repository } from '../types/repository';

export const Index = (): JSX.Element => {
    /** Number of repositories under my GitHub Account */
    const [repoCount, setRepoCount] = useState(0);

    /** Number of stars across all of my repositories */
    const [starCount, setStarCount] = useState(0);

    /** Current GitHub username for my account */
    const GITHUB_USERNAME = 'namitoyokota';

    /** Public API endpoint to get repositories list */
    const GITHUB_API_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

    /** Fetches repositories from GitHub API */
    useEffect(() => {
        fetch(GITHUB_API_ENDPOINT)
            .then((res) => res.json())
            .then((data: Repository[]) => {
                let starCount = 0;
                data.forEach((repo: Repository) => {
                    starCount += repo.stargazers_count;
                });

                setStarCount(starCount);
                setRepoCount(data.length);
            });
    }, [GITHUB_API_ENDPOINT]);

    return (
        <Layout>
            <div className={styles.aboutpane}>
                <div>
                    <h1 className={styles.title}>Namito Yokota</h1>
                    <p>Almost Senior Frontend Developer</p>
                    <p className={styles.description}>I write clean code with a smile :)</p>
                </div>
                <Image
                    className={styles.profileimg}
                    alt="Namito Yokota Profile"
                    height="150"
                    width="150"
                    quality={100}
                    src="/images/profile-1.png"
                    objectFit="contain"
                />
            </div>

            <h1>Projects</h1>
            <div className={styles.projectlist}>
                <Link
                    className={styles.projectitem}
                    href="https://www.npmjs.com/package/@namitoyokota/ng-components"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className={styles.projectname}>ng-components</div>
                    <span className={styles.projectdescription}>Angular component library in black and white</span>
                </Link>

                <Link className={styles.projectitem} href="https://steeeve.vercel.app/" rel="noopener noreferrer" target="_blank">
                    <div className={styles.projectname}>Steeeve</div>
                    <span className={styles.projectdescription}>For your uncle that says, "I had the idea for Uber first."</span>
                </Link>

                <Link className={styles.projectitem} href="https://www.keepintouch.cc" rel="noopener noreferrer" target="_blank">
                    <div className={styles.projectname}>Keep In Touch</div>
                    <span className={styles.projectdescription}>
                        Website for keeping track of when you last caught up with your friends
                    </span>
                </Link>
            </div>

            <h1>Work</h1>
            <div className={styles.worklist}>
                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/venminder" target="_blank">
                        Venminder
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Software Engineer II</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/hexagon-sig/" target="_blank">
                        Hexagon
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Software Analyst</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/trips4trade" target="_blank">
                        Trips4Trade
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Software Intern</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/school/university-of-alabama/" target="_blank">
                        University of Alabama
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Teaching Assistant</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="http://www.threedaysllc.com/" target="_blank">
                        threeDays
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Software Intern</span>
                </div>
            </div>

            <h1>Skills</h1>
            <div className={styles.skilllist}>
                <div className={styles.skillitem}>
                    <span className={styles.skillname}>TypeScript</span>
                    <span className={styles.skilldescription}>Most competent language with 3 years of experience</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>Angular</span>
                    <span className={styles.skilldescription}>Most competent framework with 2 years developing micro-frontend</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>Aurelia</span>
                    <span className={styles.skilldescription}>2nd most experience frontend framework</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>HTML</span>
                    <span className={styles.skilldescription}>My first language and still using today</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>CSS</span>
                    <span className={styles.skilldescription}>Using Flexbox and Grid everyday to not get fired</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>React</span>
                    <span className={styles.skilldescription}>Currently learning with online resources</span>
                </div>

                <div className={styles.skillitem}>
                    <span className={styles.skillname}>.NET</span>
                    <span className={styles.skilldescription}>Slowly learning and gaining experience to become a full-skill one day</span>
                </div>
            </div>

            <h1>Contributions</h1>
            <p>GitHub Repos: {repoCount.toLocaleString()}</p>
            <p>GitHub Stars: {starCount.toLocaleString()}</p>
        </Layout>
    );
};

export default Index;
