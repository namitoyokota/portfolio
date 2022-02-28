import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Namito Yokota',
      }}
    >
      <iframe src="https://open.spotify.com/embed/track/5G2g7titQVbMK8jjRPWWr6?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jG7dSXcfVqE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DSgJ1sejWtw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XiCrniLQGYc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Layout>
  );
};

export default About;
