import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import { useEffect } from "react";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import "./dashboard.css";

function Dashboard({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const songsState = useSelector((state) => state.song.songs);
  console.log(songsState);

  useEffect(() => {
    dispatch(songs());
    // dispatch(singleSong(song.id));
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
              {console.log("FLLLLLAAAAAAAGGGGGG", songsState)}
              {songsState
                ? songsState.map((song) => (
                    <ul
                      className="tile-container"
                      onClick={() => {
                        dispatch(singleSong(song.id));
                      }}
                    >
                      <Link to={`/song/${song.id}`}>
                        <img className="tile-image" src={song.image}></img>
                      </Link>
                      <p className="song-title">{song.title}</p>
                    </ul>
                  ))
                : null}
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Scenes</h1>
            <p>Discover tomorrow's sounds today</p>
            <div className="dashboard-new">
              {songsState?.map((song) => (
                <ul
                  className="tile-container"
                  onClick={() => {
                    dispatch(singleSong(song.id));
                  }}
                >
                  <Link to={`/song/${song.id}`}>
                    <img className="tile-image" src={song.image}></img>
                  </Link>
                  <p className="song-title">{song.title}</p>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
