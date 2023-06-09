import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../lib/theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/bayon";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Head>
          <title>Bebe - Teman Bermain & Belajar</title>
          <meta
            name="ViewPort"
            content="width=device-width, minimum-scale=1, initial-scale=1"
          />
        </Head>
        <Component {...pageProps} />;
      </>
    </ChakraProvider>
  );
};

export default App;