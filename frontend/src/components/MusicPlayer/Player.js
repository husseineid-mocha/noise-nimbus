import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import "./index.css";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // console.log(audioEl.current);
    if (isPlaying) {
      audioEl.current?.play();
    } else {
      audioEl.current?.pause();
    }
  }, [isPlaying, audioEl]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  if (!props.songs || !props.songs[props.currentSongIndex]) return null;
  return (
    <div className="c-player">
      <audio
        src={props.songs[props.currentSongIndex].audioFile}
        ref={audioEl}
      ></audio>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <div className="next-up">
        Next up:
        <span>
          {props?.songs[props.nextSongIndex].title} by{" "}
          {props?.songs[props.nextSongIndex].artistName}
        </span>
      </div>
    </div>
  );
}

export default Player;
