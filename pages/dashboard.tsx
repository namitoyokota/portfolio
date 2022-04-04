import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Dashboard = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Dashboard - Namito Yokota',
      }}
    >

      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.description}>Still in the works...</p>
      </div>

      <div className={styles.board}>
        <div className={styles.boardcard}>
            <p className={styles.description}>Item 1</p>
            <h2>Heading 1</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>Item 2</p>
            <h2>Heading 2</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>Item 3</p>
            <h2>Heading 3</h2>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
