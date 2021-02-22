import React, { useState } from "react";
import "./slider.css";
import { sliderData } from "./sliderData";
import { activateSignUp } from "../../store/modal";
import { useDispatch } from "react-redux";

export default function Slider() {
  const [slider, setSlider] = useState(0);
  const length = sliderData.length;
  const dispatch = useDispatch();

  const slideChange = () => setSlider(slider === 0 ? 1 : 0);

  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }

  return (
    <div className="splash-slider-container">
      <div className="slider1-title">Discover more with NoiseNimbus Go+</div>
      <p className="slider1-text">
        NoiseNimbus Go+ lets you listen offline, ad-free, with over 150 million
        tracks - and growing.
      </p>
      <div className="slider1-buttons">
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
      {sliderData.map((slide, i) => {
        return (
          <div className={i === slider ? "slide active" : "slide"} key={i}>
            {i === slider && <img className="slider-img" src={slide.image} />}
          </div>
        );
      })}
      <button className="slider-button" onClick={slideChange}>
        ...
      </button>
      <button className="slider-button" onClick={slideChange}>
        ...
      </button>
    </div>
  );
}
