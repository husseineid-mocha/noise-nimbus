import React from "react";
import "./songscontainer.css";
import { useDispatch } from "react-redux";
import { activateSignUp } from "../../store/modal";

function SongsContainer({ song }) {
  const dispatch = useDispatch();
  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }
  return (
    <div className="tile-container">
      <img src={song.image}></img>
      <p className="song-title">{song.title}</p>
    </div>
  );
}

export default SongsContainer;
