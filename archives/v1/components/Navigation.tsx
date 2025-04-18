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
      <Link href="/dashboard">
        <a className={router.asPath == '/dashboard' ? styles.activepage : styles.page}>
          <h4>Dashboard</h4>
        </a>
      </Link>
      <Link href="/jesus">
        <a className={router.asPath == '/jesus' ? styles.activepage : styles.page}>
          <h4>Jesus</h4>
        </a>
      </Link>
      <Link href="https://search.namitoyokota.com" passHref>
        <a className={styles.page} target="_blank" rel="noopener noreferrer">
          <h4>Search</h4>
        </a>
      </Link>
    </>
  );
};

export default Navigation;
