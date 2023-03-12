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
                    {/* GitHub */}
                    <a className={styles.sociallink} href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                        <p>GitHub</p>
                    </a>

                    {/* Goodreads */}
                    <a
                        className={styles.sociallink}
                        href="https://www.goodreads.com/user/show/111816710-namito-yokota"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Goodreads</p>
                    </a>

                    {/* LinkedIn */}
                    <a className={styles.sociallink} href="https://www.linkedin.com/in/namitoyokota/" target="_blank" rel="noreferrer">
                        <p>LinkedIn</p>
                    </a>

                    {/* Twitter */}
                    <a className={styles.sociallink} href="https://twitter.com/namitoyokota" target="_blank" rel="noreferrer">
                        <p>Ideas</p>
                    </a>

                    {/* VSCO */}
                    <a className={styles.sociallink} href="https://vsco.co/yokota-namito" target="_blank" rel="noreferrer">
                        <p>VSCO</p>
                    </a>

                    {/* Resume */}
                    <a className={styles.sociallink} href="/resume.pdf" download>
                        <p>Resume</p>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
