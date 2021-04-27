import React from "react";

import "./MusicPlayer3.css";

const Controls = ({
  isPlaying,
  onPlayPauseClick,
  toPrevTrack,
  toNextTrack,
}) => (
  <div className="audio-controls2">
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <i className="fas fa-pause-circle pauseCircle" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <i className="fas fa-play-circle playCircle" />
      </button>
    )}
  </div>
);

export default Controls;
