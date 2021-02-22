import React from "react";
import { useState, useEffect } from "react";
import "./carousel.css";
// import Stock1 from "./stock-image-1.jpg";
// import Stock2 from "./stock-image-2.jpg";
// import Stock3 from "./stock-image-3.jpg";

const CAROUSEL_COUNT = 3;
const CAROUSEL_DELAY = 2000; //ms

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % CAROUSEL_COUNT);
    }, CAROUSEL_DELAY);

    return () => clearInterval(timer);
  }, [index]);

  const transform = `translateX(${index * -50}%)`;

  return (
    // <div className="carousel-container">
    <div className="carousel" style={{ transform }}>
      <div className="carousel-button-container">
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
      </div>
      <div
        className="carousel-item"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1240x450)",
        }}
      ></div>
      ;
      <div
        className="carousel-item"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1240x450)",
        }}
      ></div>
      ;
      <div
        className="carousel-item"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1240x450)",
        }}
      ></div>
      ;
    </div>
    // </div>
  );
};

const CarouselButton = ({ activeIndex, index, onClick }) => (
  <div
    className={
      "carousel-button " + (activeIndex === index)
        ? "carousel-button-active"
        : ""
    }
    onClick={() => onClick(index)}
  />
);

export default Carousel;
