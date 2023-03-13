import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
// @ts-ignore
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostPageProps } from '../../types/post-page-props';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const components = {
    Head,
    Image,
    Link,
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
    const customMeta: MetaProps = {
        title: `${frontMatter.title} - Namito Yokota`,
        description: frontMatter.subtitle,
        image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
        date: frontMatter.date,
        type: 'article',
    };
    return (
        <Layout customMeta={customMeta}>
            <article>
                <h1>{frontMatter.title}</h1>
                <p>{format(parseISO(frontMatter.date!), 'MMMM dd, yyyy')}</p>
                <div>
                    <MDXRemote {...source} components={components} />
                </div>
            </article>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default PostPage;
