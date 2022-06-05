import Layout from '@/components/layout';
import { LocalizationScript } from '@/internationalization/index';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
// FONTS
import '@fontsource/museomoderno/400.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
// FA ICONS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Script from 'next/script';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <LocalizationScript />
      <Script
        async
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-SCE3XDZFSJ'
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SCE3XDZFSJ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
