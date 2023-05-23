import { useState } from "react";

export default function HeroSlides({
  slides = [{ image: { align: "right" } }, { button: { include: false } }],
}) {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? slides.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= slides.length ? 0 : newIndex);
  };

  return (
    <section
      className="w-full h-screen py-28 -mt-14 lg:-mt-16 relative overflow-hidden"
      style={{ backgroundColor: "#f1f3f2" }}
    >
      <button
        aria-label="previous"
        className="z-10 bottom-8 absolute lg:text-9xl h-16 top-auto p-3 lg:top-1/3 text-3xl text-rs-purple"
        onClick={handlePrevious}
      >
        &#10094;
      </button>
      <div className="heroSlides max-w-screen-lg h-full px-6 lg:px-24 2xl:px-14 m-auto items-center flex">
        <div
          className={
            slides[index].image.align === "left"
              ? "w-full md:w-2/4 order-2 inline-block leading-tight tracking-wide font-light mx-4"
              : "w-full md:w-2/4 order-1 inline-block leading-tight tracking-wide font-light mx-4"
          }
          style={{ color: "#292931" }}
        >
          <h1
            className="text-3xl lg:text-6xl uppercase drop-shadow tracking-widest font-normal mb-4 text-rs-purple"
            style={{ textShadow: "1px 1px 2px #7d7d7d" }}
          >
            {slides[index].header}
          </h1>
          <div
            className="align-baseline leading-snug mb-5"
            dangerouslySetInnerHTML={{ __html: slides[index].contents }}
          ></div>
          {slides[index].button.include && (
            <div className="-mx-5 flex flex-wrap text-lg ">
              <a
                className="mx-5 min-w-min mb-4 text-white inline-block py-2.5 px-7 text-center font-medium hover:shadow-2xl bg-rs-purple rounded-sm"
                href={slides[index].button.link}
                rel="prefetch"
              >
                {slides[index].button.text}
              </a>
            </div>
          )}
        </div>
        <div
          className={
            slides[index].align === "left"
              ? "w-0 order-1 hidden md:w-2/4 md:block"
              : "w-0 order-2 hidden md:w-2/4 md:block"
          }
        >
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="1px"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
            />
            <img
              className="max-h-full max-w-full h-auto"
              src={slides[index].image.file}
              alt={slides[index].image.alt}
              width={slides[index].image.width}
              height={slides[index].image.height}
            />
          </picture>
        </div>
      </div>
      <button
        aria-label="next"
        onClick={handleNext}
        className="z-10 bottom-8 absolute text-3xl lg:text-9xl right-0 h-16 top-auto lg:top-1/3 p-3 text-rs-purple"
      >
        &#10095;
      </button>
      <ul
        role="tablist"
        className="bottom-8 h-16 flex justify-center items-center absolute w-full"
      >
        {slides.map((slide, slideIndex) => (
          <li
            key={slideIndex}
            role="presentation"
            className={`${
              index !== slideIndex && "opacity-25"
            } h-8 w-8 relative inline-block text-center mt-2`}
          >
            <button
              role="tab"
              onClick={() => setIndex(slideIndex)}
              aria-label={`${index + 1} of ${slides.length}`}
              className="dot"
            >
              &#9679;
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
