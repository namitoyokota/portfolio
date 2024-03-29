import { SpeedInsights } from '@vercel/speed-insights/next';
import { LayoutProps } from '../models/types/layout-props';
import styles from '../styles/layout.module.css';
import Footer from './Footer';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.content}>
            <Head customMeta={customMeta} />
            <SpeedInsights />
            <header className={styles.navigation}>
                <Navigation />
                <ThemeSwitch />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
