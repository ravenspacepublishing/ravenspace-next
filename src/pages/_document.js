import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import config from "../../content/site.config.json";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {config.theme.themeColor && (
          <meta name="theme-color" content={config.theme.themeColor} />
        )}
        {config.noIndex && <meta name="robots" content="noindex, nofollow" />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ravenspacepub" />
        {config.theme.icon.small && (
          <link
            rel="icon"
            href={config.theme.icon.small}
            sizes="32x32"
            type="image/png"
          />
        )}
        {config.theme.icon.large && (
          <link
            rel="icon"
            href={config.theme.icon.large}
            sizes="192x192"
            type="image/png"
          />
        )}
        {config.theme.icon.apple && (
          <link rel="apple-touch-icon" href={config.theme.icon.apple} />
        )}
      </Head>
      <body className="min-h-screen flex flex-col">
        <Main />
        <footer className="tracking-wide bg-rs-purple">
          <div className="py-12 px-4 m-auto max-w-7xl flex flex-wrap lg:align-middle">
            {/* RavenSpace SVG Icon */}
            <div className="w-full lg:w-1/2 mb-7 lg:mb-0">
              <Image
                className="w-full mx-auto lg:mx-0 max-w-xs h-auto"
                alt={config.theme.footer.logo.alt}
                src={config.theme.footer.logo.src}
                loading="lazy"
                width={config.theme.footer.logo.width}
                height={config.theme.footer.logo.height}
              />
            </div>
            <div className="w-full lg:w-1/2 -mb-7 lg:mb-0 lg:-ml-5 lg:-mr-8 lg:flex flex-nowrap">
              <div className="w-64 mb-7 lg:mb-0 mx-auto lg:mx-2 text-center text-white text-xs font-light leading-5">
                <a
                  className="inline-block mx-auto text-center"
                  href={config.theme.footer.supporter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {config.theme.footer.supporter.logo.avif ? (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={config.theme.footer.supporter.logo.avif}
                      />
                      <img
                        alt={`${config.theme.footer.supporter.name} logo`}
                        width="150"
                        height="33"
                        loading="lazy"
                        src={config.theme.footer.supporter.logo.png}
                      />
                    </picture>
                  ) : (
                    <Image
                      alt={`${config.theme.footer.supporter.name} logo`}
                      width="150"
                      height="33"
                      loading="lazy"
                      src={config.theme.footer.supporter.logo.png}
                    />
                  )}
                </a>
                <p>{config.theme.footer.supporter.note}</p>
              </div>
              <div className="w-full md:w-5/12 mb-5 lg:mb-0 md:mx-auto lg:mx-5">
                <a
                  className="cursor-pointer inline-block text-black hover:text-white text-center lg:text-lg py-2.5 px-6 text-base font-medium w-full relative bg-rs-light-purple hover:bg-rs-dark-purple rounded-sm"
                  href="/contact-us/"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-full bg-rs-dark-purple">
            <div className="m-auto max-w-screen-xl px-4 py-4 text-center flex flex-col lg:flex-row justify-between">
              <span
                className="mb-0 font-light text-sm lg:text-base leading-6"
                style={{ color: "#9293a9" }}
              >
                {config.theme.footer.copyright}
              </span>
              <a
                className="text-white hover:underline"
                href="/privacy-statement"
              >
                Privacy Statement
              </a>
            </div>
          </div>
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
