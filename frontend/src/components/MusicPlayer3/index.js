import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Controls from "./Controls";
import "./MusicPlayer3.css";

const MusicPlayer3 = ({ trackIndex, setTrackIndex }) => {
  //this is not the index it's the ID
  debugger;

  let tracks = useSelector((state) => state?.song?.songs);
  console.log(tracks);
  console.log(trackIndex);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [vol, setVol] = useState(1);

  // let title, artistName, image, audioFile;

  // if (tracks[trackIndex]) {
  //   title = tracks[trackIndex].title;
  //   artistName = tracks[trackIndex].artistName;
  //   image = tracks[trackIndex].image;
  //   audioFile = tracks[trackIndex].audioFile;
  // }

  let selectedSong = tracks.find((track) => track.id === trackIndex);

  const { title, artistName, image, audioFile } = selectedSong;

  console.log("XZXXXXXXXXXXXXXXXXXXXXXXX", title, audioFile);

  const audioRef = useRef(new Audio(audioFile));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        // toNextTrack();
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
  const trackStyling2 = `
    -webkit-gradient(linear, 0% 0%, 100% 0%,
      color-stop(${currentPercentage}, black),
      color-stop(${currentPercentage}, #e1e1e1))
  `;
  const curVolPercentage = `${vol * 100}%`;
  const volStyling2 = `
      -webkit-gradient(linear, 0% 0%, 100% 0%,
        color-stop(${curVolPercentage}, black),
        color-stop(${curVolPercentage}, #e1e1e1))
    `;

  return (
    <div className="music-player-container2">
      <div className="music-player-handling-container2">
        <div className="music-player-controls-container2">
          <Controls
            isPlaying={isPlaying}
            // toPrevTrack={toPrevTrack}
            // toNextTrack={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
        </div>
        <div className="music-player-progress-container2">
          <div className="music-player-progress-start2">
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
            style={{ background: trackStyling2, height: "4px" }}
          />
          <div className="music-player-progress-end2">
            <p>
              {duration
                ? new Date(duration * 1000).toISOString().substr(15, 4)
                : "0:00"}
            </p>
          </div>
        </div>
      </div>
      <div className="music-player-volume-container2">
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
            style={{ background: volStyling2, height: "4px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer3;
