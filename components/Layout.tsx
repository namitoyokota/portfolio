import styles from '../styles/layout.module.css';
import { LayoutProps } from '../types/layout-props';
import Footer from './Footer';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

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
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
