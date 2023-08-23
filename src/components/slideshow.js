'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function Slideshow(props) {
  
  const ref = useRef(0);
  const slideImages = props.images;

  function back() {
    ref.current.goBack();
  }

  function next() {
    ref.current.goNext();
  }


  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>,
  };

  return (
    <div className="Slideshow">
      <div className="slide-container">
        <Slide ref={ref} {...properties}>
          {slideImages.map((each, index) => (
            <div key={index + 1} className="each-slide">
              <Image className="lazy" src={each.url} alt="sample" width="400" height="400"/>
              <p>{each.caption}</p>
            </div>
          ))}
        </Slide>
      </div>

      <div className="slide-container buttons">
        <button className="btn btn-ghost" onClick={back}>
          Anterior
        </button>
        <button className="btn btn-ghost" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
