import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Head from "next/head";

export default function PublishWithUs(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.publishWithUs.title}</title>
        {data.publishWithUs.description && (
          <meta name="description" content={data.publishWithUs.description} />
        )}
        <meta property="og:title" content={data.publishWithUs.title} />
        {data.publishWithUs.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.publishWithUs.image.src}`}
            />
            <meta
              property="og:image:alt"
              content={data.publishWithUs.image.alt}
            />
            <meta
              property="og:image:type"
              content={data.publishWithUs.image.type}
            />
            <meta
              property="og:image:width"
              content={data.publishWithUs.image.width}
            />
            <meta
              property="og:image:height"
              content={data.publishWithUs.image.height}
            />
          </>
        )}
        <meta
          property="og:description"
          content={data.publishWithUs.description}
        />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="w-full py-10 lg:py-16 leading-4 tracking-wide">
          <div className="max-w-3xl px-4 lg:px-12 m-auto prose lg:prose-h1:text-4xl lg:prose-h3:text-xl lg:prose-h3:mt-7">
            <TinaMarkdown content={data.publishWithUs.body} />
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.publishWithUs({
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
