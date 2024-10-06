import { parseISO } from 'date-fns';
import Image from 'next/legacy/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import type { Snippet } from '../models/interface/snippet';
import type { SnippetsProps } from '../models/types/snippets-props';
import styles from '../styles/snippets.module.css';

export const Snippets = ({ snippets }: SnippetsProps): JSX.Element => {
    const [codeSnippets, setCodeSnippets] = useState(snippets);

    function toggleShow(snippetId: string) {
        const updatedCodeSnippets = structuredClone(codeSnippets);
        const snippetToToggle = updatedCodeSnippets.find((snippet) => snippet.id === snippetId);
        if (snippetToToggle) {
            snippetToToggle.show = !snippetToToggle.show;
        }

        setCodeSnippets(updatedCodeSnippets);
    }

    return (
        <Layout
            customMeta={{
                title: 'Snippets - Namito Yokota',
                description:
                    'I use writing as a medium to open-source my learnings and notes to my future self. The hope is that along the way, I can help others facing the same problems!',
            }}
        >
            <h1>Snippets</h1>
            {[...new Set(codeSnippets.map((snippet) => parseISO(snippet.created_at!).getFullYear()))].map((year) => (
                <section key={year}>
                    <label className="sentence">
                        <span>From {year}</span>
                        <Image alt="Arrow down" height="15" width="15" src="/icons/arrow-down.svg" />
                    </label>
                    <hr />
                    <div className={styles.list}>
                        {codeSnippets
                            .filter((snippet) => parseISO(snippet.created_at!).getFullYear() === year)
                            .map((snippet) => (
                                <div key={snippet.id} className={styles.snippet}>
                                    <span className={styles.snippetTitle} title={snippet.title} onClick={() => toggleShow(snippet.id)}>
                                        {snippet.title}
                                    </span>
                                    <span className={styles.snippetDescription} title={snippet.description}>
                                        {snippet.description}
                                    </span>
                                    <div className={`${styles.snippetContent} ${snippet.show ? styles.snippetShow : ''}`}>
                                        <pre className={styles.snippetCode}>{snippet.content}</pre>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    let snippets: Snippet[] = [];
    const snippetsUrl = 'https://api.github.com/users/namitoyokota/gists';
    await fetch(snippetsUrl)
        .then((response) => response.json())
        .then((list) => (snippets = list));

    await Promise.all(
        snippets.map(async (snippet) => {
            const fileName = Object.keys(snippet.files)[0];
            const fileUrl = snippet.files[fileName].raw_url;
            await fetch(fileUrl)
                .then((response) => response.text())
                .then((content) => {
                    snippet.title = fileName;
                    snippet.content = content;
                    snippet.show = false;
                });
        }),
    );

    return {
        props: {
            snippets,
        },
    };
}

export default Snippets;
