import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import Label from '../../components/Label';
import Layout from '../../components/Layout';
import { PostProps } from '../../models/types/post-props';
import styles from '../../styles/post.module.css';

export const PostPage = ({ post }: PostProps): JSX.Element => {
    return (
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
    );
};

export async function getServerSideProps({ params }) {
    const client = new ApolloClient({
        uri: 'https://gql.hashnode.com/',
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
                query Publication {
                    publication(host: "blogs.namitoyokota.com") {
                        post(slug: "${params.slug}") {
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
    });

    return {
        props: {
            post: data.publication.post,
        },
    };
}

export default PostPage;
