import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function PrivacyStatement(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <main className="mt-20 lg:mt-24 grow flex flex-col">
      <section className="w-full py-10 lg:py-16 leading-4 tracking-wide">
        <div className="max-w-3xl px-4 lg:px-12 m-auto prose lg:prose-h1:text-4xl">
          <TinaMarkdown content={data.privacy.body} />
        </div>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.privacy({
    relativePath: "index.mdx",
  });

  const pageData = pageResponse.data.privacy;

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
