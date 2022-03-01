import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Photos - Namito Yokota',
      }}
    >

      <div className={styles.imagerow}>
        <div className={styles.imagecolumn}>
          <img src="/photos/grad-pic-hannah.jpg" />
          <img src="/photos/worship-1.jpg" />
          <img src="/photos/japan-trip-1.jpg" />
          <img src="/photos/japan-trip-3.jpg" />
          <img src="/photos/sky-diving-11.jpg" />
          <img src="/photos/vlog-squad-12.jpg" />
        </div>
        <div className={styles.imagecolumn}>
          <img src="/photos/grad-pic-hannah-haylee.jpg" />
          <img src="/photos/grad-pic-haylee.jpg" />
          <img src="/photos/worship-2.jpg" />
          <img src="/photos/japan-trip-2.jpg" />
          <img src="/photos/sky-diving-12.jpg" />
          <img src="/photos/haloween-1.jpg" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
