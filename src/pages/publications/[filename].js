import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PubSlides from "../../components/PubSlides";
import React from "react";
import config from "../../../content/site.config.json";

const LinkWrapper = ({ link, children }) => {
  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

export default function Page(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.publications.title}</title>
        {data.publications.description && (
          <meta name="description" content={data.publications.description} />
        )}
        <meta property="og:title" content={data.publications.title} />
        {data.publications.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.publications.image.src}`}
            />
            <meta
              property="og:image:alt"
              content={data.publications.image.alt}
            />
            <meta
              property="og:image:type"
              content={data.publications.image.type}
            />
            <meta
              property="og:image:width"
              content={data.publications.image.width}
            />
            <meta
              property="og:image:height"
              content={data.publications.image.height}
            />
          </>
        )}
        <meta
          property="og:description"
          content={data.publications.description}
        />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="bg-gray-100 py-10 relative mb-0 text-gray-700">
          <div className="lg:px-8 max-w-3xl lg:max-w-7xl m-auto flex flex-wrap">
            <div className="w-full order-1 mb-12 mx-4 lg:-mx-7 lg:px-10 lg:w-2/3 lg:order-2">
              <LinkWrapper link={data.publications.pub_url}>
                <h1 className="mt-0 uppercase mb-2.5 text-3xl lg:text-5xl font-normal tracking-wide text-rs-purple">
                  {data.publications.title}
                </h1>
              </LinkWrapper>
              <p className="text-xl font-medium mb-2.5 text-rs-purple">
                {data.publications.subtitle}
              </p>
              <p className="font-light mb-5">
                <em>{data.publications.authors}</em>
              </p>
              {data.publications.testimonials && (
                <blockquote className="mb-6 font-light">
                  {data.publications.testimonials.map((testimony, index) => (
                    <React.Fragment key={index}>
                      <p
                        className="text-center mb-5"
                        dangerouslySetInnerHTML={{
                          __html: `"${testimony.quote}"`,
                        }}
                      ></p>
                      <p className="text-right mb-5">
                        -{" "}
                        <strong className="font-semibold">
                          {testimony.author.name}
                        </strong>
                        , {testimony.author.position}
                      </p>
                    </React.Fragment>
                  ))}
                </blockquote>
              )}
              {data.publications.pub_url && (
                <div className="flex justify-center flex-wrap">
                  <Link
                    href={data.publications.pub_url}
                    className="inline-block text-white py-2.5 px-20 text-center font-medium relative min-w-min mb-5 hover:shadow-2xl bg-rs-purple rounded-sm"
                  >
                    Available Here
                  </Link>
                </div>
              )}
              <p className="font-light mb-7">
                {data.publications.publisher && (
                  <>
                    <strong className="font-semibold">Publisher: </strong>
                    <Link
                      className="underline"
                      href={data.publications.publisher.url}
                      style={{ color: "#5050bc" }}
                    >
                      {data.publications.publisher.name}
                    </Link>
                    <br />
                  </>
                )}
                {data.publications.release_date && (
                  <>
                    <strong className="font-semibold">Release Date: </strong>
                    {data.publications.release_date}
                    <br />
                  </>
                )}
                {data.publications.isbn && (
                  <>
                    <strong className="font-semibold">ISBN: </strong>
                    {data.publications.isbn}
                    <br />
                  </>
                )}
                {data.publications.pub_url && (
                  <>
                    <strong className="font-semibold">URL: </strong>
                    <Link
                      className="underline"
                      href={data.publications.pub_url}
                      style={{ color: "#5050bc" }}
                    >
                      {data.publications.pub_url.replace("http://", "")}
                    </Link>
                    <br />
                    <em>
                      For the best experience with this publication, use the
                      latest version of your web browser. If you encounter a
                      problem, you can&nbps; 
                      <Link
                        className="underline"
                        style={{ color: "#5050bc" }}
                        href="https://form.asana.com/?hash=0537f1d8a42ad2a26db924a039932b4b7765e4c2b68d94eec7b561382e6640ea&id=1161907274885479"
                      >
                        report it here
                      </Link>
                      .
                    </em>
                  </>
                )}
              </p>
              {data.publications.accolades && (
                <>
                  {data.publications.accolades.map((accolade, index) => (
                    <p key={index} className="mb-7">
                      <strong className="font-semibold">{accolade}</strong>
                    </p>
                  ))}
                </>
              )}
              <div className="prose prose-p:leading-7 max-w-full">
                <TinaMarkdown content={data.publications.body} />
              </div>
            </div>
            <div className="w-full order-2 lg:order-1 lg:w-1/3 mb-12 mx-4 lg:mx-auto">
              <Image
                className="shadow-2xl max-w-full h-auto mb-7 mx-auto"
                width={data.publications.image.width}
                height={data.publications.image.height}
                alt={data.publications.image.alt}
                src={data.publications.image.file}
              />
              <div className="flex justify-center flex-wrap">
                {data.publications.pub_url ? (
                  <Link
                    href={data.publications.pub_url}
                    className="inline-block text-white py-2.5 px-20 text-center font-medium relative min-w-min mb-5 hover:shadow-2xl bg-rs-purple rounded-sm"
                  >
                    Available Here
                  </Link>
                ) : (
                  <p className="inline-block text-white py-2.5 px-20 text-center font-medium relative min-w-min mb-5 hover:shadow-2xl bg-rs-purple rounded-sm">
                    Available Soon
                  </p>
                )}
              </div>
            </div>
            <div className="w-full order-3 mx-auto px-7 max-w-xs lg:max-w-5xl">
              <PubSlides
                ourPublications={props.publications.filter(
                  (publication) => publication.title !== data.publications.title
                )}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const pageResponse = await client.queries.publications({
    relativePath: `${params.filename}.mdx`,
  });

  const publicationsResponse = await client.queries.home({
    relativePath: "index.mdx",
  });

  return {
    props: {
      publications: publicationsResponse.data.home.ourPublications,
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
  const publicationsListData = await client.queries.publicationsConnection();
  return {
    paths: publicationsListData.data.publicationsConnection.edges.map(
      (publication) => ({
        params: { filename: publication.node._sys.filename },
      })
    ),
    fallback: false,
  };
};
