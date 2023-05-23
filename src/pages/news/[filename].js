import Image from "next/image";
import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { client } from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useRouter } from "next/router";
import config from "../../../content/site.config.json";
import Quote from "@/components/Quote";
import InlineImage from "@/components/InlineImage";

const components = {
  Quote: Quote,
  InlineImage: InlineImage,
};

export default function Page(props) {
  const router = useRouter();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.posts.title}</title>
        {data.posts.description && (
          <meta name="description" content={data.posts.description} />
        )}
        <meta property="og:title" content={data.posts.title} />
        {data.posts.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.posts.image.src}`}
            />
            <meta property="og:image:alt" content={data.posts.image.alt} />
            <meta property="og:image:type" content={data.posts.image.type} />
            <meta property="og:image:width" content={data.posts.image.width} />
            <meta
              property="og:image:height"
              content={data.posts.image.height}
            />
          </>
        )}
        <meta property="og:description" content={data.posts.description} />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="pt-14 lg:pt-24 pb-10 lg:pb-20">
          <div className="max-w-4xl px-4 lg:px-12 m-auto">
            {data.posts.feature_image && (
              <Image
                className="lg:-mt-16 -mt-8 mb-4"
                src={data.posts.feature_image.file}
                alt={data.posts.feature_image.alt}
                width={data.posts.feature_image.width}
                height={data.posts.feature_image.height}
              />
            )}
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-center uppercase text-rs-purple mb-2">
              {data.posts.title}
            </h1>
            <div className="py-2 flex border-b-2">
              <time className="basis-4/5 md:basis-1/2 text-md lg:text-lg border-r-2 text-right pr-4">
                {new Date(data.posts.pubDate).toLocaleDateString()}
              </time>
              <p className="basis-1/2 pl-4 flex items-center gap-2">
                <a
                  href={`https://www.twitter.com/intent/tweet?url=${encodeURIComponent(
                    config.url + router.asPath
                  )}&text=${encodeURIComponent(data.posts.title)}`}
                  aira-label="Share to Twitter"
                >
                  <Image
                    src="/images/twitter.svg"
                    width="25"
                    height="25"
                    alt="Twitter logo"
                  />
                </a>
                <a
                  href={`https://www.facebook.com/share.php?u=${
                    config.url + router.asPath
                  }`}
                  aira-label="Share to Facebook"
                >
                  <Image
                    src="/images/facebook.png"
                    width="25"
                    height="25"
                    alt="Facebook logo"
                  />
                </a>
                {/*
        <a
          className="text-rs-dark-purple font-semibold uppercase underline"
          href="/news/feed.xml">
          RSS
        </a>
      */}
              </p>
            </div>

            <article className="prose lg:prose-p:text-xl lg:prose-li:text-xl lg:prose-h2:text-3xl mt-8 max-w-none">
              <TinaMarkdown content={data.posts.body} components={components} />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const pageResponse = await client.queries.posts({
    relativePath: `${params.filename}.mdx`,
  });

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async () => {
  const postsListData = await client.queries.postsConnection();
  return {
    paths: postsListData.data.postsConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  };
};
