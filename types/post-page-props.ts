import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostType } from './post';

export type PostPageProps = {
    source: MDXRemoteSerializeResult;
    frontMatter: PostType;
};
