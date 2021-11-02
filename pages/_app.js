import '../styles/globals.css'
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Globe from '../components/Globe';
import Layout from '../components/Layout';

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
    <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" integrity="sha512-N4kV7GkNv7QR7RX9YF/olywyIgIwNvfEe2nZtfyj73HdjCUkAfOBDbcuJ/cTaN04JKRnw1YG1wnUyNKMsNgg3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </Head>
    <ChakraProvider>
      <Globe>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Globe>
    </ChakraProvider>
    </>
  );
}

export default MyApp
