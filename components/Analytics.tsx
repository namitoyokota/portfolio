import Script from 'next/script';

const Analytics = (): JSX.Element => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-139154154-1"></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-139154154-1');
                `}
            </Script>
        </>
    );
};

export default Analytics;
