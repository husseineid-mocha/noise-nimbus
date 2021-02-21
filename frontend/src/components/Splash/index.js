import "./splash.css";
import logo from "./soundcloud-512.png";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import SignupForm from "../SignupFormModal/SignupForm";
import ProfileButton from "../Navigation/ProfileButton";

function Splash({ isLoaded }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="splash">
      <div className="splash-top-line"></div>
      <div className="splash-banner">
        <div className="splash-banner-navbar">
          <div className="splash-banner-left">
            <img src={logo}></img>
          </div>

          <div className="splash-banner-center">
            <h2 className="splash-header">
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
              onClick={() => setShowModal(true)}
            >
              Try it Free
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <SignupForm />
              </Modal>
            )}
          </div>

          <div className="splash-banner-right">{isLoaded && sessionLinks}</div>
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

      <div></div>
    </div>
  );
}

export default Splash;
