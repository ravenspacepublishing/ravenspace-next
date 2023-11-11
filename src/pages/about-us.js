import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Card from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React from "react";

const LinkWrapper = ({ link, children }) => {
  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

const components = {
  Card: Card,
};

export default function AboutUs(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.aboutUs.title}</title>
        {data.aboutUs.description && (
          <meta name="description" content={data.aboutUs.description} />
        )}
        <meta property="og:title" content={data.aboutUs.title} />
        {data.aboutUs.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.aboutUs.image.src}`}
            />
            <meta property="og:image:alt" content={data.aboutUs.image.alt} />
            <meta property="og:image:type" content={data.aboutUs.image.type} />
            <meta
              property="og:image:width"
              content={data.aboutUs.image.width}
            />
            <meta
              property="og:image:height"
              content={data.aboutUs.image.height}
            />
          </>
        )}
        <meta property="og:description" content={data.aboutUs.description} />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="bg-gray-100 pt-14 lg:pt-24 px-4">
          <div className="pb-10 lg:w-2/3 lg:max-w-3xl lg:mx-auto">
            <h1 className="uppercase text-3xl lg:text-5xl lg:font-semibold text-center mb-4 lg:mb-10 text-rs-purple">
              About Us
            </h1>
            <p className="font-light lg:text-lg text-center">
              {data.aboutUs.header}
            </p>
          </div>
          <div className="pb-10 lg:pb-16 flex flex-wrap lg:max-w-6xl lg:mx-auto">
            {data.aboutUs.partners.map((partner, index) => (
              <div key={index} className="w-1/2 md:w-1/4 flex-none">
                <div className="mx-1 lg:mx-5 my-1 lg:my-5 p-4 lg:p-2 bg-white shadow-2xl rounded-lg">
                  <LinkWrapper link={partner.link}>
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      width="300"
                      height="255"
                    />
                  </LinkWrapper>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 bg-rs-purple">
          <div className="flex flex-wrap items-center py-8 lg:max-w-6xl lg:mx-auto">
            <div className="mb-4 lg:mb-0 mx-auto lg:w-1/3">
              <Image
                className="w-auto h-28 lg:h-52 mx-auto"
                width="250"
                height="208"
                alt="RavenSpace logo"
                src="/images/big-white-logo.png"
              />
            </div>
            <p className="text-white lg:text-lg font-light lg:w-2/3">
              {data.aboutUs.horiz}
            </p>
          </div>
        </section>
        <section className="mt-8 lg:mt-16 px-4 pb-10 lg:pb-16 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="max-w-2xl prose lg:prose-p:leading-8 lg:prose-p:text-lg">
              <TinaMarkdown
                content={data.aboutUs.body}
                components={components}
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-8 lg:py-14 px-4">
            <Link
              className="w-full max-w-xs text-center text-white lg:text-lg mx-auto py-2 bg-rs-purple rounded-sm"
              href="/contact-us/"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.aboutUs({
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
