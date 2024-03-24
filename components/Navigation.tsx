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

            <Link legacyBehavior href="/writing">
                <a className={router.asPath == '/writing' ? styles.active : styles.page}>
                    <span>Writing</span>
                </a>
            </Link>
        </>
    );
};

export default Navigation;
