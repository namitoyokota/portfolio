'use client';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import Label from '../../components/Label';
import Layout from '../../components/Layout';
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
            .then((response) => setPost(response.data.publication.post))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <Layout>
                    <h1>Loading...</h1>
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

                        <article>
                            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
                        </article>
                    </div>
                </Layout>
            )}
        </>
    );
};

export default PostPage;
