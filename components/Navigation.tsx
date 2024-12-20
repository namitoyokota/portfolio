import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navigation.module.css';

const Navigation = (): JSX.Element => {
    /** Router used to navigate through pages */
    const router = useRouter();

    return (
        <div className={styles.bar}>
            <Link legacyBehavior href="/">
                <a className={router.asPath == '/' ? styles.active : styles.page}>
                    <span>Home</span>
                </a>
            </Link>

            <Link legacyBehavior href="/writings">
                <a className={router.asPath == '/writings' ? styles.active : styles.page}>
                    <span>Writings</span>
                </a>
            </Link>

            <Link legacyBehavior href="/snippets">
                <a className={router.asPath == '/snippets' ? styles.active : styles.hidden}>
                    <span>Snippets</span>
                </a>
            </Link>

            <Link legacyBehavior href="/bookmarks">
                <a className={router.asPath == '/bookmarks' ? styles.active : styles.hidden}>
                    <span>Bookmarks</span>
                </a>
            </Link>
        </div>
    );
};

export default Navigation;
