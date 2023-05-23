import { client } from "../../tina/__generated__/client";
import Link from "next/link";
import Head from "next/head";
import React from "react";

export default function News(props) {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
        {props.meta.description && (
          <meta name="description" content={props.meta.description} />
        )}
        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.description} />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="bg-gray-100 pb-6 lg:pt-4 lg:pb-16 grow">
          <div className="mx-6 lg:max-w-3xl lg:mx-auto mt-8 pt-4 pb-12">
            <h1 className="text-3xl lg:text-6xl font-normal tracking-widest text-center text-rs-purple uppercase">
              News
            </h1>
          </div>
          <div className="px-6 lg:px-0 mx-auto max-w-2xl">
            <hr className="border-rs-purple mb-6" />
            {props.posts
              .sort(
                (a, b) =>
                  Date.parse(b.node.pubDate) - Date.parse(a.node.pubDate)
              )
              .map((post) => (
                <React.Fragment key={post.node._sys.filename}>
                  <article className="p-2 mb-6">
                    <h2 className="font-semibold text-2xl lg:text-4xl mb-4">
                      <Link
                        className="border-b border-transparent hover:text-rs-purple hover:border-rs-purple transition duration-700"
                        href={`/news/${post.node._sys.filename}`}
                      >
                        {post.node.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 lg:text-xl mb-2">
                      <time>
                        {new Date(post.node.pubDate).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "full",
                          }
                        )}
                      </time>
                    </p>
                    {post.node.description && (
                      <p className="mt-1 lg:text-xl">{post.node.description}</p>
                    )}
                  </article>
                  <hr className="border-rs-purple mb-6" />
                </React.Fragment>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const postsResponse = await client.queries.postsConnection();

  return {
    props: {
      posts: postsResponse.data.postsConnection.edges,
      meta: {
        title: "News - RavenSpace",
        description: "RavenSpace News",
      },
    },
  };
};
