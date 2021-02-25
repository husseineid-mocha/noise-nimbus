import React from "react";

function Details(props) {
  return (
    <div className="c-player--details">
      <div className="details-img">
        <img src={props.song.image} alt="" />
      </div>
      <div>
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artistName}</h4>
      </div>
    </div>
  );
}

export default Details;
