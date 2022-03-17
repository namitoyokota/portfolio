import Document, { Head, Html, Main, NextScript } from 'next/document';
import Analytics from '../components/Analytics';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <Analytics />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
