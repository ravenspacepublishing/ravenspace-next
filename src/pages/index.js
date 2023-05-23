import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Image from "next/image";
import config from "../../content/site.config.json";
import HeroSlides from "@/components/HeroSlides";
import PubSlides from "@/components/PubSlides";
import Script from "next/script";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <main className="mt-20 lg:mt-24 grow flex flex-col">
      <HeroSlides slides={data.home.slides} />
      <section className="w-full py-8 lg:py-0 flex items-center bg-rs-purple">
        <Image
          className="hidden lg:block w-72 h-auto"
          alt="RavenSpace logo"
          width="275"
          height="181"
          src="/images/rs-logo.png"
        />
        <div className="px-4 lg:flex lg:items-center lg:max-w-6xl lg:mx-10">
          <h2 className="text-white uppercase text-2xl lg:text-4xl tracking-wide text-center lg:text-left mb-2 lg:w-1/3">
            {config.title}
          </h2>
          <p className="text-white 2xl:text-lg leading-6 text-center lg:text-left font-light lg:w-2/3">
            {data.home.subHead}
          </p>
        </div>
      </section>
      {/* Features and Values */}
      <section className="bg-white py-10 px-4 lg:max-w-6xl lg:mx-auto">
        <div className="mb-10 uppercase text-2xl lg:text-4xl text-center">
          <h2 className="text-rs-purple">Features</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-7">
          {data.home.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="mb-4 max-w-md lg:max-w-xl p-7 bg-gray-200 shadow-2xl rounded-2xl mx-auto lg:flex-1"
            >
              <Image
                className="mx-auto mb-5 h-12 lg:h-24 w-auto"
                height={feature.icon.height}
                width={feature.icon.width}
                alt={feature.icon.alt}
                src={feature.icon.src}
              />
              <h3 className="uppercase text-center font-semibold text-rs-purple">
                {feature.header}
              </h3>
              <p className="text-center font-light leading-6">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mb-10 mt-4 uppercase text-2xl lg:text-4xl text-center">
          <h2 className="text-rs-purple">Values</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-7">
          {data.home.valuesProvided.map((value, valueIndex) => (
            <div
              key={valueIndex}
              className="mb-4 max-w-md lg:max-w-xl mx-auto p-7 rounded-lg bg-gray-200 shadow-2xl lg:w-1/3 lg:flex-1"
            >
              <Image
                className="mx-auto mb-5 h-12 lg:h-24 w-auto"
                height={value.icon.height}
                width={value.icon.width}
                alt={value.icon.alt}
                src={value.icon.src}
              />
              <h3 className="uppercase text-center font-semibold text-rs-purple">
                {value.header}
              </h3>
              <p className="text-center font-light leading-6">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-gray-200 py-10 lg:px-8">
        <div className="lg:max-w-6xl lg:mx-auto lg:flex lg:gap-x-16">
          <PubSlides ourPublications={data.home.ourPublications} />
          <Script
            src="https://platform.twitter.com/widgets.js"
            strategy="lazyOnload"
          />
          <div className="text-center h-auto max-w-xs lg:max-w-none mx-auto lg:mx-0 mt-10 lg:mt-0 lg:w-1/2 lg:order-2 lg:px-20 px-4 lg:flex-auto">
            <a
              id="twitterEmbed"
              className="twitter-timeline"
              data-width="100%"
              data-height="631"
              href="https://twitter.com/ravenspacepub?ref_src=twsrc%5Etfw"
              data-dnt="true"
              data-tweet-limit="5"
            >
              Tweets by ravenspacepub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.home({
    relativePath: "index.mdx",
  });

  const pageData = pageResponse.data.home;

  const meta = {
    title: pageData.title,
    description: pageData.description,
    image: pageData.image ? pageData.image : "",
  };

  return {
    props: {
      data: pageResponse.data,
      meta: meta,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};
