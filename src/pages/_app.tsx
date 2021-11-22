import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "components/GlobalStyles";
import "styles/globals.css";

const CustomApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} session={session} />
    </SessionProvider>
  );
};

export default CustomApp;
