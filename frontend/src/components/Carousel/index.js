import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./carousel.css";
import { activateSignUp } from "../../store/modal";
import Stock1 from "./stock-image-1.jpg";
import Stock2 from "./stock-image-2.jpg";
import Stock3 from "./stock-image-3.jpg";

const CAROUSEL_COUNT = 3;
const CAROUSEL_DELAY = 5000; //ms

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % CAROUSEL_COUNT);
    }, CAROUSEL_DELAY);

    return () => clearInterval(timer);
  }, [index]);

  const transform = `translateX(${index * -33.3}%)`;

  return (
    <>
      <div className="carousel" style={{ transform }}>
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Stock2})`,
          }}
        >
          <div className="splash-carousel-center">
            <h2 className="splash-carousel-header">
              Discover more with NoiseNimbus Go+
            </h2>
            <p className="splash-carousel-header-p">
              NoiseNimbus Go+ lets you listen offline, ad-free, with over 150
              million tracks - and growing.
            </p>
            <a
              href="https://github.com/husseineid-mocha"
              className="large-button-transparent"
            >
              Meet the creator
            </a>
            <button
              className="large-button-orange"
              onClick={() => modalIsOpenSignUp()}
            >
              Try it Free
            </button>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Stock3})`,
          }}
        >
          <div className="splash-carousel-center">
            <h2 className="splash-carousel-header">
              What's next in music is first on NoiseNimbus
            </h2>
            <p className="splash-carousel-header-p">
              Upload your first track and begin your journey. NoiseNimbus gives
              you space to create, listen, and connect with other artists.
            </p>
            <button className="upload-button">Start uploading today</button>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Stock1})`,
          }}
        ></div>
      </div>
      {/* // </div> */}
      <div className="carousel-button-container">
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
      </div>
    </>
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
