import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Controls from "./Controls";
import "./MusicPlayer2.css";

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
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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
          <Controls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
        </div>
      </div>
    )
  );
};

export default MusicPlayer2;
