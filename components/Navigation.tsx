import { useTheme } from 'next-themes';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Navigation = (): JSX.Element => {
    /** Router used to navigate through pages */
    const router = useRouter();

    /** Tracks current theme */
    const { theme } = useTheme();

    return (
        <>
            <Link legacyBehavior href="/">
                <a className={router.asPath == '/' ? styles.activepage : styles.page}>
                    <Image
                        className={styles.logo}
                        alt="namito"
                        height="500"
                        width="500"
                        src={theme === 'dark' ? '/logos/white.svg' : '/logos/black.svg'}
                    />
                </a>
            </Link>

            <Link legacyBehavior href="/blogs">
                <a className={router.asPath == '/blogs' ? styles.activepage : styles.page}>
                    <span>Blogs</span>
                </a>
            </Link>

            {/* <Link legacyBehavior href="/tools">
                <a className={router.asPath == '/tools' ? styles.activepage : styles.page}>
                    <span>Tools</span>
                </a>
            </Link> */}

            <Link legacyBehavior href="/ideas">
                <a className={router.asPath == '/ideas' ? styles.activepage : styles.page}>
                    <span>Ideas</span>
                </a>
            </Link>

            {/* <Link legacyBehavior href="/photos">
                <a className={router.asPath == '/photos' ? styles.activepage : styles.page}>
                    <span>Photos</span>
                </a>
            </Link> */}
        </>
    );
};

export default Navigation;
