import React from 'react';
import styles from '../styles/Home.module.css';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
    children: React.ReactNode;
    customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://namito.xyz';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.content}>
            <Head customMeta={customMeta} />
            <header>
                <div>
                    <div className={styles.navpane}>
                        <Navigation />
                        <ThemeSwitch />
                    </div>
                </div>
            </header>
            <main>
                <div>{children}</div>
            </main>
            <footer>
                <div className={styles.footerpane}>
                    <div className={styles.sociallinks}>
                        <a className={styles.sociallink} href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                        <a className={styles.sociallink} href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    {/* <h3>About Me</h3>

                    <span>
                        <p>I'm most active on</p>I'm most active on
                        <a href="/resume.pdf" download>
                            GitHub
                        </a>
                        and LinkedIn so connect with me on there! The best way to connect me is via email.
                    </span> */}

                    <p className={styles.copyright}>© 2023 Namito Yokota</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
