import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Namito Yokota',
      }}
    >
      <h2>Coming Soon...</h2>
    </Layout>
  );
};

export default About;