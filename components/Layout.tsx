import styles from '../styles/Home.module.css';
import { LayoutProps } from '../types/layout-props';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

export const WEBSITE_HOST_URL = 'https://namito.wiki';

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
                        <a className={styles.sociallink} href="https://twitter.com/namitoyokota" target="_blank" rel="noreferrer">
                            Twitter
                        </a>

                        <a className={styles.sociallink} href="https://github.com/namitoyokota" target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                        <a className={styles.sociallink} href="https://www.linkedin.com/in/namito/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>

                    <p className={styles.copyright}>© 2023 Namito Yokota</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
