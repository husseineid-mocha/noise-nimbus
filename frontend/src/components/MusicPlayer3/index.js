import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Controls from "./Controls";
import "./MusicPlayer2.css";

const MusicPlayer2 = ({ tracks, trackIndex, setTrackIndex }) => {
  debugger;
  //   const tracks = useSelector((state) => state?.song?.songs);
  //   console.log(tracks);

  //   const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [vol, setVol] = useState(1);

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
    console.log("hello");
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = vol;
  }, [vol]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioFile);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%,
      color-stop(${currentPercentage}, #505050),
      color-stop(${currentPercentage}, #e1e1e1))
  `;
  const curVolPercentage = `${vol * 100}%`;
  const volStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%,
        color-stop(${curVolPercentage}, #505050),
        color-stop(${curVolPercentage}, #e1e1e1))
    `;

  return (
    <footer>
      <div className="music-player-container">
        <div className="music-player-track-info">
          <div className="music-player-art-container">
            {image && (
              <img className="music-player-art" src={image} alt="track art" />
            )}
          </div>
          <div className="music-player-track-details">
            <div className="music-player-title-container">
              <p>{title}</p>
            </div>
            <div className="music-player-artist-container">
              <p>{artistName}</p>
            </div>
          </div>
        </div>
        <div className="music-player-handling-container">
          <div className="music-player-controls-container">
            <Controls
              isPlaying={isPlaying}
              toPrevTrack={toPrevTrack}
              toNextTrack={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
          </div>
          <div className="music-player-progress-container">
            <div className="music-player-progress-start">
              <p>
                {trackProgress
                  ? new Date(trackProgress * 1000).toISOString().substr(15, 4)
                  : "0:00"}
              </p>
            </div>
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              className="progress slider"
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={{ background: trackStyling, height: "4px" }}
            />
            <div className="music-player-progress-end">
              <p>
                {duration
                  ? new Date(duration * 1000).toISOString().substr(15, 4)
                  : "0:00"}
              </p>
            </div>
          </div>
        </div>
        <div className="music-player-volume-container">
          <div className="music-player-vol-icon">
            <i className="fas fa-volume-up" />
          </div>
          <div className="music-player-vol-slider">
            <input
              type="range"
              value={vol}
              step="0.01"
              min="0"
              max="1"
              className="volume slider"
              onChange={(e) => setVol(e.target.value)}
              style={{ background: volStyling, height: "4px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayer2;
