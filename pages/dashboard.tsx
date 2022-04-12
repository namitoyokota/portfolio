import React, { useEffect, useState } from 'react';
import { Repository } from '../types/repository';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { Unsplash } from '../types/unsplash';

export const Dashboard = (): JSX.Element => {

  /** Number of repositories under my GitHub Account */
  const [repoCount, setRepoCount] = useState(0);

  /** Number of stars across all of my repositories */
  const [starCount, setStarCount] = useState(0);

  /** Current GitHub username for my account */
  const GITHUB_USERNAME = 'namitoyokota';

  /** Public API endpoint to get repositories list */
  const GITHUB_API_ENDPOINT = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

  /** Download count on Unplash account */
  let downloads = 0;

  /** View count on Unplash account */
  let views = 0;

  /** Fetch user statistics from Unsplash */
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher);
  if (data) {
    downloads = data?.downloads;
    views = data?.views;
  }

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
            <p className={styles.description}>GitHub Repos</p>
            <h2>{repoCount}</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>GitHub Stars</p>
            <h2>{starCount}</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>Unsplash Downloads</p>
            <h2>{downloads}</h2>
        </div>
        <div className={styles.boardcard}>
            <p className={styles.description}>Unsplash Views</p>
            <h2>{views}</h2>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
