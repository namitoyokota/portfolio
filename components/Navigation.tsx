import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

const Navigation = (): JSX.Element => {
  return (
    <>
      <Link href="/">
        <a className={styles.page}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.page}>About</a>
      </Link>
    </>
  );
};

export default Navigation;
