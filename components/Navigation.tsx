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
                    <span>Home</span>
                </a>
            </Link>

            <Link legacyBehavior href="/writings">
                <a className={router.asPath == '/writings' ? styles.active : styles.page}>
                    <span>Writings</span>
                </a>
            </Link>

            <Link legacyBehavior href="/bookmarks">
                <a className={router.asPath == '/bookmarks' ? styles.active : styles.page}>
                    <span>Bookmarks</span>
                </a>
            </Link>
        </>
    );
};

export default Navigation;
