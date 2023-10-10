import Layout from "@/components/layout/Layout";
import { GlobalStyle } from "@/styles/globals";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
