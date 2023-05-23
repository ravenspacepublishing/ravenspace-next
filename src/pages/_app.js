import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import config from "../../content/site.config.json";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>{pageProps.meta.title}</title>
        {pageProps.meta.description && (
          <meta name="description" content={pageProps.meta.description} />
        )}
        <meta property="og:title" content={pageProps.meta.title} />
        {pageProps.meta.image && (
          <>
            <meta
              property="og:image"
              content={`${config.url}${pageProps.meta.image.src}`}
            />
            <meta property="og:image:alt" content={pageProps.meta.image.alt} />
            <meta
              property="og:image:type"
              content={pageProps.meta.image.type}
            />
            <meta
              property="og:image:width"
              content={pageProps.meta.image.width}
            />
            <meta
              property="og:image:height"
              content={pageProps.meta.image.height}
            />
          </>
        )}
        <meta property="og:description" content={pageProps.meta.description} />
        <link rel="canonical" href={`${config.url}${router.asPath}`} />
        <meta property="og:url" content={`${config.url}${router.asPath}`} />
      </Head>
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
    </>
  );
}
