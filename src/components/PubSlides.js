import { useState } from "react";
import Link from "next/link";

export default function PubSlides(props) {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? props.ourPublications.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= props.ourPublications.length ? 0 : newIndex);
  };

  return (
    <div className="w-full order-3 mx-auto max-w-xs lg:max-w-none lg:w-1/2 lg:order-1 lg:flex-auto">
      <div className="text-center text-2xl lg:text-4xl mb-4 text-rs-purple">
        OUR PUBLICATIONS
      </div>
      <div className="mx-auto lg:max-w-lg relative">
        {props.ourPublications.length >= 2 && (
          <button
            aria-label="previous"
            onClick={handlePrevious}
            className="lg:-left-8 -left-6 z-10 absolute text-5xl w-8 h-16 top-1/2 lg:top-1/3"
          >
            &#10094;
          </button>
        )}
        <div className="w-full relative">
          <div className="w-11/12 top-0 left-0 mx-auto flex">
            <div
              className="w-full overflow-y-scroll bg-white rounded-md py-4"
              style={{ height: "575px" }}
            >
              <div className="inline-block w-auto mx-4">
                <Link href={props.ourPublications[index].url} tabIndex="0">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={props.ourPublications[index].image.file.avif}
                    />
                    <img
                      className="mb-4 shadow-2xl max-w-full h-auto mx-auto"
                      loading="lazy"
                      width={props.ourPublications[index].image.width}
                      height={props.ourPublications[index].image.height}
                      alt={props.ourPublications[index].image.alt}
                      src={props.ourPublications[index].image.file.jpg}
                    />
                  </picture>
                </Link>
                <h4 className="mb-2">
                  <Link href={props.ourPublications[index].url} tabIndex="0">
                    <strong className="text-xl lg:text-2xl font-semibold uppercase text-rs-purple">
                      {props.ourPublications[index].title}
                    </strong>
                  </Link>
                </h4>
                {props.ourPublications[index].subtitle && (
                  <h5 className="font-semibold lg:text-lg mb-2">
                    {props.ourPublications[index].subtitle}
                  </h5>
                )}
                <p className="font-light mb-5">
                  <em>{props.ourPublications[index].authors}</em>
                </p>
                <p className="font-light">
                  {props.ourPublications[index].text}
                </p>
              </div>
            </div>
          </div>
        </div>
        {props.ourPublications.length >= 2 && (
          <button
            aria-label="next"
            onClick={handleNext}
            className="lg:-right-8 -right-6 z-10 absolute text-5xl w-8 h-16 top-1/2 lg:top-1/3"
          >
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
}
