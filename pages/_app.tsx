import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    );
};

export default MyApp;
