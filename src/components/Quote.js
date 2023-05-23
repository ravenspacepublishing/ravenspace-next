import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Quote(props) {
  return (
    <figure className="mx-24 lg:text-xl">
      <blockquote>
        <TinaMarkdown content={props.children} />
      </blockquote>
      <figcaption className="text-right text-black">{`- ${props.author}`}</figcaption>
    </figure>
  );
}
