import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { songs } from "../../store/songs";
// import { singleSong } from "../../store/songs";
import Player from "../MusicPlayer/Player";
import "./index.css";

function MusicPlayer() {
  const dispatch = useDispatch();
  const songsState = useSelector((state) => state.song.songs);
  const activeSongId = useSelector((state) => state.song.activeSongId);
  console.log(songsState);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    let index = songsState.findIndex((song) => {
      return song.id === activeSongId;
    });
    setCurrentSongIndex(index);
  }, [activeSongId]);

  useEffect(() => {
    dispatch(songs());
  }, []);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songsState.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  // // console.log(songsState);

  return (
    <div className="music-player">
      <Player
        className="music-player-main"
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songsState}
      />
    </div>
  );
}

export default MusicPlayer;
