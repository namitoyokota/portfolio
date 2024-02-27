import styles from '../styles/layout.module.css';
import { LayoutProps } from '../types/layout-props';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

export const WEBSITE_HOST_URL = 'https://namitoyokota.com';

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
            <main>{children}</main>
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

                    <p className={styles.copyright}>© 2024 Namito Yokota</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
