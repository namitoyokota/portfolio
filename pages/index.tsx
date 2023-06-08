import Image from 'next/legacy/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.aboutpane}>
                <div>
                    <h1 className={styles.title}>Namito Yokota</h1>
                    <p>Almost Senior Developer</p>
                    <p className={styles.description}>Angular, Typescript, HTML, CSS</p>
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
            <p className={styles.description}>This is a list of side projects I've created or currently working on!</p>
            <div className={styles.projectspane}>
                <Link legacyBehavior href="https://www.keepintouch.cc" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3 className={styles.projectname}>Keep In Touch</h3>
                        <p>Website for keeping track of when you last caught up with your friends 😎</p>
                        <p className={styles.date}>3/23/23</p>
                    </a>
                </Link>

                <Link legacyBehavior href="https://steeeve.vercel.app/" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3 className={styles.projectname}>Steeeve</h3>
                        <p>For your uncle that says, "I had the idea for Uber first." 💡 </p>
                        <p className={styles.date}>5/25/23</p>
                    </a>
                </Link>

                <Link legacyBehavior href="https://www.npmjs.com/package/@namitoyokota/ng-components" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3 className={styles.projectname}>ng-components</h3>
                        <p>Angular component library in black and white styles</p>
                        <p className={styles.date}>5/14/23</p>
                    </a>
                </Link>
            </div>

            <h1>Work</h1>
            <div className={styles.worklist}>
                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/venminder" target="_blank">
                        Venminder
                    </a>
                    <hr className={styles.workitemdivider} />
                    <span className={styles.workitemposition}>Software Engineer II</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/hexagon-sig/" target="_blank">
                        Hexagon
                    </a>
                    <hr className={styles.workitemdivider} />
                    <span className={styles.workitemposition}>Software Analyst</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/trips4trade" target="_blank">
                        Trips4Trade
                    </a>
                    <hr className={styles.workitemdivider} />
                    <span className={styles.workitemposition}>Software Intern</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/school/university-of-alabama/" target="_blank">
                        University of Alabama
                    </a>
                    <hr className={styles.workitemdivider} />
                    <span className={styles.workitemposition}>Teaching Assistant</span>
                </div>

                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="http://www.threedaysllc.com/" target="_blank">
                        threeDays
                    </a>
                    <hr className={styles.workitemdivider} />
                    <span className={styles.workitemposition}>Software Intern</span>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
