import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import { useEffect } from "react";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
// import "./songpage.css";

function Dashboard(props) {
  const isLoaded = props.isLoaded;
  const dispatch = useDispatch();
  const history = useHistory();
  const songsState = useSelector((state) => state.song.songs);
  console.log(songsState);

  useEffect(() => {
    dispatch(singleSong(props.match.params.id));
  }, []);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <MusicPlayer />
      <div className="dashboard">Hello I have things to do</div>
    </div>
  );
}

export default Dashboard;
