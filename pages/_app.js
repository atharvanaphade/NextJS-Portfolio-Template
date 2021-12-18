import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Globe from '../components/Globe';
import Layout from '../components/Layout';
import Script from 'next/script'
import Animation from "../components/AnimationContainer";
import { DefaultSeo } from 'next-seo';

import SEO from '../components/seo-config';
import { AnimatePresence } from 'framer-motion';

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

function MyApp({ Component, pageProps, router }) {

  return (
    <>
    <AnimatePresence
      exitBeforeEnter
    >
      <Animation key={router.route}>
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></Script>
          <ChakraProvider>
            <Globe>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Globe>
            <DefaultSeo {...SEO} />
        </ChakraProvider>
      </Animation>
    </AnimatePresence>
    </>
  );
}

export default MyApp
