import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import styles from '../styles/Home.module.css';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://namito.xyz';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <Head customMeta={customMeta} />
      <header>
        <div>
          <div className={styles.navpane}>
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <div className={styles.footerpane}>
          <p>GitHub</p>
          <p>VSCO</p>
          <p>Twitter</p>
          <p>YouTube</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
