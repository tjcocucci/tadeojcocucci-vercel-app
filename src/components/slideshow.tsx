"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goto = (index) => {
    if (index < 0 || index > images.length - 1) return;
    setCurrentIndex(index);
  };

  let firstIndex = Math.max(currentIndex - 2, 0);
  const lastIndex = Math.min(firstIndex + 4, images.length - 1);
  firstIndex = Math.max(lastIndex - 4, 0);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex flex-col h-96 relative rounded-xl dark:bg-gray-800 bg-neutral-200 0 mb-4 text-gray-800 dark:text-gray-200">
        <Image
          className="lazy mb-0 mt-0 rounded-t-xl"
          src={images[currentIndex].url}
          alt="sample"
          width="400"
          height="400"
        />
        <p className="text-left px-8">{images[currentIndex].caption}</p>
      </div>
      <div className="flex flex-row flex-nowrap items-center gap-5 justify-center">
        <button
          className="hover:bg-slate-100 hover:text-black border-1 rounded-3xl px-2 py-1 w-10"
          onClick={back}
        >
          {"<"}
        </button>
        {firstIndex > 0 ? <span>...</span> : null}
        {images.slice(firstIndex, lastIndex + 1).map((image, index) => (
          <button
            key={index + firstIndex}
            className={`hover:bg-slate-100 hover:text-black w-full rounded-3xl
            ${currentIndex === index + firstIndex ? "bg-slate-400/20 " : ""}`}
            onClick={() => goto(index + firstIndex)}
          >
            {index + firstIndex + 1}
          </button>
        ))}
        {lastIndex < images.length - 1 ? <span>...</span> : null}
        <button
          className="hover:bg-slate-100 hover:text-black border-1 rounded-3xl px-2 py-1 w-10"
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

// className={clsx(
//   "block rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-300 text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200",
//   {
//     "text-gray-400 hover:bg-gray-800": !isActive,
//     "italic": isActive,
//   },

export default Slideshow;
