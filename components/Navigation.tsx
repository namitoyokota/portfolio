import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Navigation = (): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Link href="/">
                <a className={router.asPath == '/' ? styles.activepage : styles.page}>
                    <h4>Home</h4>
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
