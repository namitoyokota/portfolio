import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { MetaProps } from '../models/types/meta-props';

export const WEBSITE_HOST_URL = 'https://namitoyokota.com';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
    const router = useRouter();
    const meta: MetaProps = {
        title: 'Namito Yokota',
        description: 'Software Engineer II at Venminder',
        image: `https://api.namitoyokota.com/assets/og-images/portfolio.png`,
        type: 'website',
        ...customMeta,
    };

    return (
        <NextHead>
            <title>{meta.title}</title>
            <link rel="icon" href="/images/logo.svg" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@namitoyokota" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && <meta property="article:published_time" content={meta.date} />}
        </NextHead>
    );
};

export default Head;
