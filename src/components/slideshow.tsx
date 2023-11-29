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
    <div className="Slideshow">
      <div className="flex flex-col h-96 w-full relative bg-gray-600 rounded-2xl mb-4">
        <Image
          className="lazy mb-0 mt-0 rounded-t-2xl"
          src={images[currentIndex].url}
          alt="sample"
          width="400"
          height="400"
        />
        <p className="text-center px-2">{images[currentIndex].caption}</p>
      </div>
      <div className="flex flex-row flex-nowrap items-center gap-5 justify-center">
        <button
          className="text-white hover:bg-slate-100 hover:text-black border-1 rounded-3xl px-2 py-1 w-10"
          onClick={back}
        >
          {"<"}
        </button>
        {firstIndex > 0 ? <span>...</span> : null}
        {images.slice(firstIndex, lastIndex + 1).map((image, index) => (
          <button
            key={index + firstIndex}
            className={`text-white hover:bg-slate-100 hover:text-black w-full rounded-3xl
            ${currentIndex === index + firstIndex ? "bg-slate-400/20 " : ""}`}
            onClick={() => goto(index + firstIndex)}
          >
            {index + firstIndex + 1}
          </button>
        ))}
        {lastIndex < images.length - 1 ? <span>...</span> : null}
        <button
          className="text-white hover:bg-slate-100 hover:text-black border-1 rounded-3xl px-2 py-1 w-10"
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Slideshow;

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory">
      {children}
    </div>
  );
}
