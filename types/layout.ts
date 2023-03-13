import { PostType } from './post';

export interface MetaProps extends Pick<PostType, 'date' | 'subtitle' | 'title'> {
    type?: string;
}
