import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Link from "next/link";
import Head from "next/head";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function ContactUs(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.contactUs.title}</title>
        {data.contactUs.description && (
          <meta name="description" content={data.contactUs.description} />
        )}
        <meta property="og:title" content={data.contactUs.title} />
        {data.contactUs.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${data.contactUs.image.src}`}
            />
            <meta property="og:image:alt" content={data.contactUs.image.alt} />
            <meta
              property="og:image:type"
              content={data.contactUs.image.type}
            />
            <meta
              property="og:image:width"
              content={data.contactUs.image.width}
            />
            <meta
              property="og:image:height"
              content={data.contactUs.image.height}
            />
          </>
        )}
        <meta property="og:description" content={data.contactUs.description} />
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="pt-8 bg-gray-100 lg:px-24 lg:pb-14 grow">
          <div className="flex flex-wrap justify-between">
            <div className="px-6 mx-auto lg:mx-0 lg:pl-24 lg:pr-0 lg:w-1/2 my-auto">
              <div className="lg:max-w-md lg:mx-auto">
                <h2 className="text-3xl lg:text-4xl uppercase mb-4 text-rs-purple">
                  Contact Us
                </h2>
                <p className="font-semibold mb-4">
                  For more information or to submit a proposal, contact:
                </p>
                <div className="mb-6">
                  {data.contactUs.contacts.map((contact, index) => (
                    <p key={index} className="font-light lg:text-lg mb-2">
                      {contact.name}, {contact.position}:
                      <br />
                      <Link
                        className="pl-6 text-rs-purple"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </Link>
                    </p>
                  ))}
                </div>
                <div className="font-light mb-4">
                  <address
                    className="not-italic"
                    dangerouslySetInnerHTML={{ __html: data.contactUs.address }}
                  />
                </div>
                <div className="flex items-center font-light mb-2">
                  <svg
                    style={{ fill: "#51416e" }}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    id="svg-replaced-0"
                    className="convert-to-svg layout-form__contact__image replaced-svg svg-replaced-0"
                  >
                    <title>phone</title>
                    <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                  </svg>
                  <a className="pl-1.5" href={`tel:${data.contactUs.phone}`}>
                    {data.contactUs.phone}
                  </a>
                </div>
                <div className="flex items-center font-light">
                  <svg
                    style={{ fill: "#51416e" }}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    id="svg-replaced-1"
                    className="convert-to-svg layout-form__contact__image replaced-svg svg-replaced-1"
                  >
                    <title>envelope</title>
                    <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
                  </svg>
                  <a className="pl-1.5" href={`mailto:${data.contactUs.mail}`}>
                    {data.contactUs.mail}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:h-auto lg:w-1/2 prose prose-p:leading-8 lg:prose-2xl lg:my-auto px-6 xl:px-24 italic mx-auto py-10">
              <TinaMarkdown content={data.contactUs.body} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.contactUs({
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
