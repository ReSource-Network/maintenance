import theme from '@/theme';
import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class Doc extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='https://use.typekit.net/xre2tdj.css' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
