import React from "react";

import "./MusicPlayer2.css";

const Controls = ({
  isPlaying,
  onPlayPauseClick,
  toPrevTrack,
  toNextTrack,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={toPrevTrack}
    >
      <i className="fas fa-step-backward" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <i className="fas fa-pause-circle" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <i className="fas fa-play-circle" />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={toNextTrack}
    >
      <i className="fas fa-step-forward" />
    </button>
  </div>
);

export default Controls;
