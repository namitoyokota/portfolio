import Image from 'next/legacy/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.aboutpane}>
                <div>
                    <h1 className={styles.title}>Namito Yokota</h1>
                    <p>Senior Frontend Developer</p>
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

            <h1>Work</h1>
            <div className={styles.worklist}>
                <div className={styles.workitem}>
                    <a className={styles.workitemcompany} href="https://www.linkedin.com/company/venminder" target="_blank">
                        Venminder
                    </a>
                    <hr className={styles.divider} />
                    <span className={styles.workitemposition}>Senior Software Engineer I</span>
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
        </Layout>
    );
};

export default Index;
