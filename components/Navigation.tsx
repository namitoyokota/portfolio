import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";

const Navigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Link href="/" >
        <a className={router.asPath == "/" ? styles.activepage : styles.page}>
          <h4>Home</h4>
        </a>
      </Link>
      <Link href="/photos">
        <a className={router.asPath == "/photos" ? styles.activepage : styles.page}>
          <h4>Photos</h4>
        </a>
      </Link>
      <Link href="/about">
        <a className={router.asPath == "/about" ? styles.activepage : styles.page}>
          <h4>About</h4>
        </a>
      </Link>
      <Link href="/jesus">
        <a className={router.asPath == "/jesus" ? styles.activepage : styles.page}>
          <h4>Jesus</h4>
        </a>
      </Link>
    </>
  );
};

export default Navigation;
