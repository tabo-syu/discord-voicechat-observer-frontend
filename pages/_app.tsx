import { ChakraProvider } from '@chakra-ui/react';
import { AppPropsWithLayout } from '../utils/types';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  );
};

export default MyApp;
