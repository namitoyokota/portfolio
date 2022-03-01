import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Photos - Namito Yokota',
      }}
    >

      <div className={styles.imagerow}>
        <div className={styles.imagecolumn}>
          <img src="/photos/grad-pic-hannah.jpg" alt="Hannah Graduation Picture" />
          <img src="/photos/worship-1.jpg" alt="Worship Picture" />
          <img src="/photos/japan-trip-1.jpg" alt="Japan Trip" />
          <img src="/photos/japan-trip-3.jpg" alt="Japan Trip" />
          <img src="/photos/sky-diving-1.jpg" alt="Sky Diving" />
          <img src="/photos/bryant-denny-1.jpg" alt="Bryant Denny Friends" />
        </div>
        <div className={styles.imagecolumn}>
          <img src="/photos/grad-pic-hannah-haylee.jpg" alt="Hannah and Haylee Graduation Picture" />
          <img src="/photos/grad-pic-haylee.jpg" alt="Haylee Graduation Picture" />
          <img src="/photos/worship-2.jpg" alt="Worship" />
          <img src="/photos/japan-trip-2.jpg" alt="Japan Trip" />
          <img src="/photos/sky-diving-2.jpg" alt="Sky Diving" />
          <img src="/photos/halloween-1.jpg" alt="Halloween" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
