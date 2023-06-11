import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { MetaProps } from '../types/layout';
import Analytics from './Analytics';

export const WEBSITE_HOST_URL = 'https://namito.xyz';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
    const router = useRouter();
    const meta: MetaProps = {
        title: 'Namito Yokota',
        description: 'Software Engineer II at Venminder',
        image: `${WEBSITE_HOST_URL}/images/meta.png`,
        type: 'website',
        ...customMeta,
    };

    return (
        <NextHead>
            <Analytics />
            <title>{meta.title}</title>
            <link rel="icon" type="image/svg" href="/logos/white.svg" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@huntarosan" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && <meta property="article:published_time" content={meta.date} />}
        </NextHead>
    );
};

export default Head;
