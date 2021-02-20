import React, { useState } from "react";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import logo from "./soundcloud-512.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Splash() {
  //   const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="splash">
      <div className="splash-top-line"></div>
      <div className="splash-banner">
        <div className="splash-banner-navbar">
          <div className="splash-banner-left">
            <img src={logo}></img>
          </div>

          <div className="splash-banner-right">
            <LoginFormModal className="splash-login" />
            <SignupFormModal className="splash-signup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
