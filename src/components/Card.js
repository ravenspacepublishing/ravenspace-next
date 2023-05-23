import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Card(props) {
  return (
    <div className="rounded-lg px-4 py-3 my-3 font-light bg-gray-200 shadow-lg">
      <p className="font-semibold uppercase tracking-wider text-rs-purple my-1">
        {props.heading}
      </p>
      <TinaMarkdown content={props.children} />
    </div>
  );
}
