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
      {/* Spotify Song */}
      <iframe
        src="https://open.spotify.com/embed/track/5G2g7titQVbMK8jjRPWWr6?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen>
      </iframe>
    
      {/* YouTube Video: Do What You Can't */}
      <iframe
        src="https://www.youtube.com/embed/jG7dSXcfVqE?controls=0"
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>

      {/* YouTube Video: Karate Kid */}
      <iframe
        src="https://www.youtube.com/embed/DSgJ1sejWtw?controls=0"
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>

      {/* YouTube Video: I Had A Black Dog */}
      <iframe
        src="https://www.youtube.com/embed/XiCrniLQGYc?controls=0"
        width="560"
        height="315"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </Layout>
  );
};

export default About;
