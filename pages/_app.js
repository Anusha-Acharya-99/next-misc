import "styles/globals.css";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/layout.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>App layout</title>
        <meta name="description" content="Description of app layout" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
