import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Jesus = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Jesus - Namito Yokota',
      }}
    >

      <div className={styles.header}>
        <h1 className={styles.title}>Jesus</h1>
        <p className={styles.description}>Coming Soon...</p>
      </div>

    </Layout>
  );
};

export default Jesus;
