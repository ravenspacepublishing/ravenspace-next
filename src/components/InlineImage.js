import Image from "next/image";

export default function InlineImage(props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={`px-8 my-4 ${
        props.float && props.float === "right" ? "float-right" : "float-left"
      }`}
      width="380"
      height="468"
    />
  );
}
