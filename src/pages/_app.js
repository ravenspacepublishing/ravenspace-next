import "../../src/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import config from "../../content/site.config.json";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <link rel="canonical" href={`${config.url}${router.asPath}`} />
        <meta property="og:url" content={`${config.url}${router.asPath}`} />
      </Head>
      {config.googleAnalytics && process.env.NODE_ENV == "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', '${config.googleAnalytics}');
            `}
          </Script>
        </>
      )}
      <header id="header" className="fixed bg-white w-full z-50 shadow">
        <div className="px-4 m-auto h-20 lg:h-24 flex flex-wrap max-w-screen-xl items-center">
          {/* Header Logo */}
          <div className="h-14 lg:h-20 pb-4 pt-2 lg:pt-0 my-auto">
            <Link href="/">
              <Image
                className="h-16 lg:h-24 w-auto"
                alt="RavenSpace home"
                src={config.theme.logo.src}
                width={config.theme.logo.width}
                height={config.theme.logo.height}
              />
            </Link>
          </div>
          {/* Navigation */}
          <nav className="ml-auto my-auto text-lg uppercase font-sans static">
            <button
              aria-label="Open Menu"
              id="openMenu"
              onClick={toggleMenu}
              className={`${
                isOpen ? "hidden" : "block"
              } cursor-pointer text-4xl lg:hidden`}
            >
              <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
            {/* Mobile Navigation Menu */}
            <div
              id="mobileNav"
              className={`${
                isOpen ? "block" : "hidden"
              } bg-white h-screen w-3/4 absolute top-0 right-0 shadow-2xl normal-case text-gray-600`}
            >
              <div className="flex items-center border-solid border-b-4 text-3xl py-2.5 leading-none">
                <button
                  aria-label="Close Menu"
                  id="closeMenu"
                  onClick={toggleMenu}
                  className={`${
                    isOpen ? "block" : "hidden"
                  } cursor-pointer absolute left-0 px-2 text-2xl`}
                >
                  &#10005;
                </button>
                <p className="m-auto font-medium">Menu</p>
              </div>
              <ul>
                {config.navigation
                  .filter((navItem) => !navItem.hidden)
                  .map((navItem) => (
                    <li
                      key={navItem.title}
                      onClick={toggleMenu}
                      className="border-solid border-b-2 border-l-8 pl-2.5 py-2 text-2xl"
                      style={{ borderLeftColor: navItem.color }}
                    >
                      <Link href={navItem.href}>{navItem.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex flex-row gap-x-6 2xl:gap-x-10 2xl:-mr-20 font-light">
              {config.navigation
                .filter((navItem) => !navItem.hidden)
                .map((navItem) => (
                  <li
                    key={navItem.title}
                    className="border-b border-transparent hover:border-rs-purple transition duration-700"
                  >
                    <Link
                      className="hover:text-rs-purple text-xl"
                      href={navItem.href}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
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
              <Link
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
              </Link>
              <p>{config.theme.footer.supporter.note}</p>
            </div>
            <div className="w-full md:w-5/12 mb-5 lg:mb-0 md:mx-auto lg:mx-5">
              <Link
                className="cursor-pointer inline-block text-black hover:text-white text-center lg:text-lg py-2.5 px-6 text-base font-medium w-full relative bg-rs-light-purple hover:bg-rs-dark-purple rounded-sm"
                href="/contact-us/"
              >
                Contact Us
              </Link>
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

            <Link
              className="text-white hover:underline"
              href="/privacy-statement"
            >
              Privacy Statement
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
