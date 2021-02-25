import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import { useEffect } from "react";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import "./dashboard.css";

function Dashboard({ isLoaded }) {
  const dispatch = useDispatch();
  const songsState = useSelector((state) => state.song.songs);
  console.log(songsState);

  useEffect(() => {
    dispatch(songs());
  }, []);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <MusicPlayer />
      <div className="dashboard">
        <div className="dashboard-main">
          <div className="dashboard-content">
            <h1>More of what you like</h1>
            <p>Suggestions based on what you've liked or played</p>
            <div className="dashboard-weekly">
              <div className="weekly-photo"></div>
              <div className="weekly-song-list"></div>
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Charts: Top 10</h1>
            <p>The latest hits, updated all the time</p>
            <div className="dashboard-top">
              {songsState.map((song) => (
                <ul
                  className="tile-container"
                  onClick={() => dispatch(singleSong(song.id))}
                >
                  <img className="tile-image" src={song.image}></img>
                  <p className="song-title">{song.title}</p>
                </ul>
              ))}
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Scenes</h1>
            <p>Discover tomorrow's sounds today</p>
            <div className="dashboard-new">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;