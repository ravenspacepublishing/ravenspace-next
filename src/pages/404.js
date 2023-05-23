import Head from "next/head";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main className="mt-20 lg:mt-24 grow flex flex-col">
        <section className="w-full py-10 lg:py-16 leading-4 tracking-wide">
          <div className="max-w-3xl px-4 lg:px-12 m-auto prose lg:prose-h1:text-4xl lg:prose-h3:text-xl lg:prose-h3:mt-7">
            <h1>404 Page Not Found</h1>
            <br />
            <p>Sorry, but the page you were trying to view does not exist.</p>
          </div>
        </section>
      </main>
    </>
  );
}
