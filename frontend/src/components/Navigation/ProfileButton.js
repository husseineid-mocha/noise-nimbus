import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./profilebutton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="ellipsis-button" onClick={openMenu}>
        <i className="fas fa-ellipsis-h" icon="ellipsis-h" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="logout-button-div">
            <button className="logout-button" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
