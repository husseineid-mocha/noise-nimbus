import "./splash.css";
import logo from "./white-logo.png";
import mobile from "./mobile.jpg";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";
import ProfileButton from "../Navigation/ProfileButton";
import { activateLogin } from "../../store/modal";
import { activateSignUp } from "../../store/modal";
import Carousel from "../Carousel";
// import Slider from "../Carousel3";
// import Cagain from "../CarouselAgain";

function Splash({ isLoaded }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }

  function modalIsOpenLogin() {
    dispatch(activateLogin());
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div>
          <button onClick={() => modalIsOpenLogin()} className="splash-login">
            Log In
          </button>
          <LoginForm />
        </div>
        <div>
          <button onClick={() => modalIsOpenSignUp()} className="splash-signup">
            Sign Up
          </button>
          <SignupForm />
        </div>
      </>
    );
  }

  return (
    <div className="splash">
      <div className="splash-top-line"></div>
      <div className="splash-banner-container">
        {/* <Carousel className="carousel" /> */}

        <div className="splash-banner-navbar">
          <div className="splash-banner-left">
            <img src={logo}></img>
          </div>

          {/* <h2 className="splash-header">
              Discover more with NoiseNimbus Go+
            </h2>
            <p className="splash-header-p">
              Upload your first track and begin your journey. NoiseNimbus gives
              you space to create, listen, and connect with other artists.
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
            </button> */}

          <div className="splash-banner-right">{isLoaded && sessionLinks}</div>
        </div>
        <div>
          <Carousel className="carousel" />
        </div>
      </div>

      <div className="splash-search">
        <input
          className="splash-search-input"
          type="text"
          placeholder="Search for artists, bands, tracks, podcasts"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
        <p>or</p>
        <button className="splash-search-button">Upload your own</button>
      </div>

      <div>
        <div className="splash-trending-container">
          <h3>Hear what's trending in the NoiseNimbus community</h3>
          <div className="splash-trending-tracks">
            <button
              className="splash-trending-button"
              // onClick={() => modalIsOpenSignUp()}
              // add this onClick and change button name if want this to be "sign up here"
            >
              Explore trending playlists
            </button>
          </div>
        </div>
        <div className="orange-line"></div>
      </div>

      <div className="splash-mobile">
        <div className="mobile-img">
          <img src={mobile}></img>
        </div>
        <div className="mobile-text">
          <h1>Never stop listening</h1>
          <div className="mobile-border"></div>
          <h3>
            NoiseNimbus is only available on browsers, coming to mobile soon!
          </h3>
        </div>
      </div>

      <div className="splash-creators">
        <div className="splash-creators-text">
          <h1 className="splash-header">Calling all creators</h1>
          <h3>
            Get on NoiseNimbus to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </h3>
          <button onClick={() => modalIsOpenSignUp()}>Get started</button>
        </div>
      </div>

      <div className="splash-endpage">
        <h1>Thanks for listening. Now join in.</h1>
        <h3>Save tracks, follow artists and build playlists. All for free.</h3>
        <button className="splash-signup" onClick={() => modalIsOpenSignUp()}>
          Create account
        </button>
        <div className="splash-endpage-login">
          <p>Already have an account?</p>
          <button className="splash-login" onClick={() => modalIsOpenLogin()}>
            Sign in
          </button>
        </div>
      </div>

      <div className="splash-footer">
        <a href="https://github.com/husseineid-mocha/noise-nimbus">GitHub</a>
        <p>-</p>
        <a href="www.linkedin.com/in/hussein-eid">Linkedin</a>
      </div>
    </div>
  );
}

export default Splash;
