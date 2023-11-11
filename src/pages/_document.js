import { Html, Head, Main, NextScript } from "next/document";
import config from "../../content/site.config.json";

export default function Document() {
  return (
    <Html lang="en">
      <!-- <html prefix="og: http://ogp.me/ns#"> -->
      <Head>
        {config.theme.themeColor && (
          <meta name="theme-color" content={config.theme.themeColor} />
        )}
        {config.noIndex && <meta name="robots" content="noindex, nofollow" />}
        <!-- <meta property="og:image" content="https://assets.tina.io/df87757b-c018-41f7-a4a6-643a17f6060e/images/favicon-192.png?fit=crop&max-w=400&max-h=400" /> -->
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
        <NextScript />
      </body>
    </Html>
  );
}
