import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navigation.module.css';

const Navigation = (): JSX.Element => {
    /** Router used to navigate through pages */
    const router = useRouter();

    return (
        <>
            <Link legacyBehavior href="/">
                <a className={router.asPath == '/' ? styles.active : styles.page}>
                    <span>home</span>
                </a>
            </Link>

            <Link legacyBehavior href="/works">
                <a className={router.asPath == '/works' ? styles.active : styles.page}>
                    <span>works</span>
                </a>
            </Link>

            <Link legacyBehavior href="/projects">
                <a className={router.asPath == '/projects' ? styles.active : styles.page}>
                    <span>projects</span>
                </a>
            </Link>

            <Link legacyBehavior href="/blogs">
                <a className={router.asPath == '/blogs' ? styles.active : styles.page}>
                    <span>blogs</span>
                </a>
            </Link>
        </>
    );
};

export default Navigation;
