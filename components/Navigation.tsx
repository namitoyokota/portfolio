import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";
import useSound from 'use-sound';

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const [play] = useSound('/sound/stop.mp3');

  return (
    <>
      <Link href="/">
        <a className={router.asPath == "/" ? styles.activepage : styles.page}
          onClick={() => play()}
        >
          <h4>Home</h4>
        </a>
      </Link>
      <Link href="/dashboard">
        <a className={router.asPath == "/dashboard" ? styles.activepage : styles.page}
          onClick={() => play()}
        >
          <h4>Dashboard</h4>
        </a>
      </Link>
      <Link href="/jesus">
        <a className={router.asPath == "/jesus" ? styles.activepage : styles.page}
          onClick={() => play()}
        >
          <h4>Jesus</h4>
        </a>
      </Link>
      <Link href="https://www.namito.wiki" passHref>
        <a className={styles.page}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => play()}
        >
          <h4>Search</h4>
        </a>
      </Link>
    </>
  );
};

export default Navigation;
