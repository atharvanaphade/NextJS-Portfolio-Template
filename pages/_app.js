import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Globe from '../components/Globe';
import Layout from '../components/Layout';
import Script from 'next/script'
import { DefaultSeo } from 'next-seo';

import SEO from '../components/seo-config';

const colors = {
    brand: {
        900: '#2A363B',
        800: '#E84A5F',
        700: '#FF847C',
        600: '#FECEA8',
        500: '#99B898',
    },
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></Script>
    <ChakraProvider>
      <Globe>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Globe>
      <DefaultSeo {...SEO} />
    </ChakraProvider>
    </>
  );
}

export default MyApp
