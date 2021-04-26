import React from "react";

const Controls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
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
      onClick={onNextClick}
    >
      <i className="fas fa-step-forward" />
    </button>
  </div>
);

export default Controls;
