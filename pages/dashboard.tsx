import React, { useEffect, useState } from 'react';
import { Repository } from '../types/repository';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Dashboard = (): JSX.Element => {

  /** Number of repositories under my GitHub Account */
  const [repoCount, setRepoCount] = useState(0);

  /** Number of stars across all of my repositories */
  const [starCount, setStarCount] = useState(0);

  /** Current GitHub username for my account */
  const GITHUB_USERNAME = 'namitoyokota';

  /** Public API endpoint to get repositories list */
  const GITHUB_API_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

  /** Fetches repositories from GitHub API */
  useEffect(() => {
    fetch(GITHUB_API_ENDPOINT)
      .then((res) => res.json())
      .then((data: Repository[]) => {
        let starCount = 0;
        data.forEach((repo: Repository) =>  {
          starCount += repo.stargazers_count;
        });

        setStarCount(starCount);
        setRepoCount(data.length);
      });
  }, [GITHUB_API_ENDPOINT]);

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
            <p className={styles.description}>GitHub</p>
            <h2>{repoCount} Repos</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>GitHub</p>
            <h2>{starCount} Stars</h2>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
