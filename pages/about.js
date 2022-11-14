import Head from "next/head";
import Footer from "@/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="Description of about page" />
      </Head>
      <h2 className="content">About</h2>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
