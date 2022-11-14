import Head from "next/head";

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        env user {process.env.DB_USER} password {process.env.DB_PASSWORD} id{" "}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          blogId: "1",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(`Connecting the DB for user ${user} with password ${password}`);
  return {
    props: {
      title: "Artcle page",
      description: "Description of article",
    },
  };
}
