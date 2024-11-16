'use client';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import Label from '../../components/Label';
import Layout from '../../components/Layout';
import Skeleton from '../../components/Skeleton';
import { Post } from '../../models/interface/post';
import styles from '../../styles/post.module.css';

export const PostPage = (): JSX.Element => {
    /** Tracks blog content */
    const [post, setPost] = useState<Post>(null);

    /** Tracks whether blog content has loaded */
    const [loading, setLoading] = useState(true);

    /** Retrieves blog content on page load */
    useEffect(() => {
        const slug = window.location.pathname.split('/')[2];
        if (getCachedPost(slug)) {
            return;
        }

        getPost(slug);
    }, []);

    /**
     * Finds and sets blog post previously saved in local storage
     * @param slug Key of the blog post
     * @returns Whether post was found from cache
     */
    function getCachedPost(slug: string): boolean {
        const cachedPostString = localStorage.getItem(slug);
        if (cachedPostString) {
            setPost(JSON.parse(cachedPostString));
            setLoading(false);
            return true;
        }

        return false;
    }

    /**
     * Retrieves blog from Hashnode API
     * @param slug Key of the blog post
     */
    function getPost(slug: string): void {
        const client = new ApolloClient({
            uri: 'https://gql.hashnode.com/',
            cache: new InMemoryCache(),
        });

        client
            .query({
                query: gql`
                    query Publication {
                        publication(host: "blogs.namitoyokota.com") {
                            post(slug: "${slug}") {
                                id
                                url
                                title
                                subtitle
                                publishedAt
                                reactionCount
                                slug
                                content {
                                    html
                                }
                            }
                        }
                    }
                `,
            })
            .then((response) => {
                const post = response.data.publication.post;
                setPost(post);
                localStorage.setItem(slug, JSON.stringify(post));
            })
            .finally(() => setLoading(false));
    }

    return (
        <>
            {loading ? (
                <Layout>
                    <div className={styles.content}>
                        <Skeleton height={'2rem'} width={'min(300px, 70%)'}></Skeleton>
                        <Skeleton height={'1rem'} width={'min(500px, 85%)'}></Skeleton>
                        <div className={styles.menu}>
                            <Skeleton height={'1.5rem'} width={'min(20%, 100px)'}></Skeleton>
                            <Skeleton height={'1.5rem'} width={'min(20%, 100px)'}></Skeleton>
                        </div>
                        <article>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Skeleton key={index} height={'1rem'} width={'100%'}></Skeleton>
                            ))}
                        </article>
                    </div>
                </Layout>
            ) : (
                <Layout
                    customMeta={{
                        title: post.title,
                        description: post.subtitle,
                    }}
                >
                    <div className={styles.content}>
                        <h1>{post.title}</h1>
                        <span className="grey">{post.subtitle}</span>
                        <div className={styles.menu}>
                            <Label alternate={true}>{format(parseISO(post.publishedAt!), 'MMMM dd, yyyy')}</Label>
                            <Label>
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                    View Original
                                </a>
                            </Label>
                        </div>
                        <article dangerouslySetInnerHTML={{ __html: post.content.html }}></article>
                    </div>
                </Layout>
            )}
        </>
    );
};

export default PostPage;
