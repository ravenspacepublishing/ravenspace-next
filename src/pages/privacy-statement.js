import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";

export default function PrivacyStatement(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.privacy.title}</title>
        {data.privacy.description && (
          <meta name="description" content={data.privacy.description} />
        )}
        <meta property="og:title" content={data.privacy.title} />
        {data.privacy.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.privacy.image.src}`}
            />
            <meta property="og:image:alt" content={data.privacy.image.alt} />
            <meta property="og:image:type" content={data.privacy.image.type} />
            <meta
              property="og:image:width"
              content={data.privacy.image.width}
            />
            <meta
              property="og:image:height"
              content={data.privacy.image.height}
            />
          </>
        )}
        <meta property="og:description" content={data.privacy.description} />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="w-full py-10 lg:py-16 leading-4 tracking-wide">
          <div className="max-w-3xl px-4 lg:px-12 m-auto prose lg:prose-h1:text-4xl">
            <TinaMarkdown content={data.privacy.body} />
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.privacy({
    relativePath: "index.mdx",
  });

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};
