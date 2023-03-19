import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Navigation = (): JSX.Element => {
    /** Router used to navigate through pages */
    const router = useRouter();

    /** Tracks current theme */
    const { theme } = useTheme();

    /** Indicates current state of theme */
    const isDark = theme === 'dark';

    return (
        <>
            <Link href="/">
                <a className={router.asPath == '/' ? styles.activepage : styles.page}>
                    <Image
                        className={styles.logo}
                        alt="namito"
                        height="500px"
                        width="500px"
                        src={isDark ? '/logos/white.svg' : '/logos/black.svg'}
                    />
                </a>
            </Link>

            <Link href="/blogs">
                <a className={router.asPath == '/blogs' ? styles.activepage : styles.page}>
                    <h4>Blogs</h4>
                </a>
            </Link>

            <Link href="/tools">
                <a className={router.asPath == '/tools' ? styles.activepage : styles.page}>
                    <h4>Tools</h4>
                </a>
            </Link>

            <Link href="/ideas">
                <a className={router.asPath == '/ideas' ? styles.activepage : styles.page}>
                    <h4>Ideas</h4>
                </a>
            </Link>
        </>
    );
};

export default Navigation;
