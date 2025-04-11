import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout';
import fetcher from '../lib/fetcher';
import styles from '../styles/Home.module.css';
import { Repository } from '../types/repository';
import { Unsplash } from '../types/unsplash';

export const Dashboard = (): JSX.Element => {
  /** URL used for GitHub cards */
  const GITHUB_URL = 'https://github.com/namitoyokota?tab=repositories';

  /** URL used for Unplash cards */
  const UNSPLASH_URL = 'https://unsplash.com/@namitoyokota';

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
        data.forEach((repo: Repository) => {
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
        <a className={styles.boardcard} href={GITHUB_URL} target="_blank" rel="noreferrer">
          <p className={styles.description}>
            <span>GitHub Repos</span>
            <Image alt="github" height="15px" width="15px" src={'/icons/github.svg'} />
          </p>
          <h2>{repoCount.toLocaleString()}</h2>
        </a>
        <a className={styles.boardcard} href={GITHUB_URL} target="_blank" rel="noreferrer">
          <p className={styles.description}>
            <span>GitHub Stars</span>
            <Image alt="github" height="15px" width="15px" src={'/icons/github.svg'} />
          </p>
          <h2>{starCount.toLocaleString()}</h2>
        </a>
        <a className={styles.boardcard} href={UNSPLASH_URL} target="_blank" rel="noreferrer">
          <p className={styles.description}>
            <span>Unsplash Downloads</span>
            <Image alt="unsplash" height="15px" width="15px" src={'/icons/camera.svg'} />
          </p>
          <h2>{downloads.toLocaleString()}</h2>
        </a>
        <a className={styles.boardcard} href={UNSPLASH_URL} target="_blank" rel="noreferrer">
          <p className={styles.description}>
            <span>Unsplash Views</span>
            <Image alt="unsplash" height="15px" width="15px" src={'/icons/camera.svg'} />
          </p>
          <h2>{views.toLocaleString()}</h2>
        </a>
      </div>
    </Layout>
  );
};

export default Dashboard;
