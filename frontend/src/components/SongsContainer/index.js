import React from "react";
import "./songscontainer.css";

function SongsContainer({ song }) {
  return (
    <div className="tile-container">
      <img src={song.image}></img>
      <p className="song-title">{song.title}</p>
    </div>
  );
}

export default SongsContainer;
