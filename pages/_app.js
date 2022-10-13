import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Globe from '../components/Globe';
import Layout from '../components/Layout';
import Script from 'next/script'
import Animation from "../components/AnimationContainer";
import { DefaultSeo } from 'next-seo';

import SEO from '../components/seo-config';
import { AnimatePresence } from 'framer-motion';

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
