import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../api/posts';
import { PostType } from '../types/post';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div className={styles.aboutpane}>
        <div className={styles.abouttext}>
          <h1 className={styles.title}>Namito Yokota</h1>
          <p>Frontend Web Developer at Hexagon Safety & Infrastructure</p>
          <p className={styles.description}>This website is still in the works!</p>
        </div>
        <Image
          className={styles.profileimg}
          alt="Namito Yokota Profile"
          height="150px"
          width="150px"
          quality={100}
          src="/images/profile-3.png"
          objectFit="contain" 
        />
      </div>

      <h1>Projects</h1>
      <p className={styles.description}>These are various software projects that I have or am currently working on!</p>
      <div className={styles.projectspane}>
        {posts.filter(post => post.type === 'project').map((project) => (
          <Link as={`/posts/${project.slug}`} href={`/posts/[slug]`} key={project.slug}>
            <div className={styles.project}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className={styles.date}>{format(parseISO(project.date!), 'MMMM dd, yyyy')}</p>
            </div>
          </Link>
        ))}
      </div>

      <h1>Blogs</h1>
      <p className={styles.description}>These are my notes on all kinds of different books and thoughts :)</p>
      <div className={styles.blogspane}>
        {posts.filter(post => post.type === 'blog').map((blog, index) => (
          <Link as={`/posts/${blog.slug}`} href={`/posts/[slug]`} key={blog.slug}>
            <div className={styles.blog}>
              <h5>{index + 1}</h5>
              <h3>{blog.title}</h3>
              <p className={styles.date}>
                {format(parseISO(blog.date!), 'MMMM dd, yyyy')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'type']);

  return {
    props: { posts },
  };
};


export default Index;
