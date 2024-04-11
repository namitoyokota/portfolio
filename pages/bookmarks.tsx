import Image from 'next/legacy/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { BookmarkProps } from '../models/types/bookmark-props';
import styles from '../styles/bookmarks.module.css';

export const Writing = ({ bookmarkGroups }: BookmarkProps): JSX.Element => {
    return (
        <Layout
            customMeta={{
                title: 'Writing - Namito Yokota',
                description:
                    'I use writing as a medium to open-source my learnings and notes to my future self. The hope is that along the way, I can help others facing the same problems!',
            }}
        >
            <h1>Bookmarks</h1>
            {bookmarkGroups.map((group) => (
                <section key={group.category}>
                    <label className="sentence">
                        <span>{group.category}</span>
                        <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                    </label>
                    <hr />
                    <div className={styles.list}>
                        {group.list.map((bookmark) => (
                            <Link legacyBehavior key={bookmark.url} href={bookmark.url}>
                                <a className={styles.bookmark} target="_blank" rel="noopener noreferrer">
                                    <span className={styles.title} title={bookmark.title}>
                                        {bookmark.title}
                                    </span>
                                    <div className={styles.website} title={bookmark.website}>
                                        <Image alt="link" height="12" width="12" src="/icons/link-2.svg" />
                                        <span>{bookmark.website}</span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    const res = await fetch(`https://api.namitoyokota.com/bookmarks.json`);
    const data = await res.json();

    return {
        props: {
            bookmarkGroups: data,
        },
    };
}

export default Writing;
