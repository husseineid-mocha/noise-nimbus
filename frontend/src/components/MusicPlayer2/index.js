import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const MusicPlayer2 = () => {
  const tracks = useSelector((state) => state?.song?.songs);
  console.log(tracks);

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artistName, image, audioFile } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioFile));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    console.log("TODO go to prev");
  };

  const toNextTrack = () => {
    console.log("TODO go to next");
  };

  return (
    tracks && (
      <div className="audio-player">
        <div className="track-info">
          <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artistName}`}
          />
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artistName}</h3>
        </div>
      </div>
    )
  );
};

export default MusicPlayer2;
