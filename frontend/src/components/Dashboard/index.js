import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import MusicPlayer from "../MusicPlayer";
import MusicPlayer2 from "../MusicPlayer2";
import Navigation from "../Navigation";
import "./dashboard.css";

function Dashboard({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [trackIndex, setTrackIndex] = useState(0);

  const activeIndex = useSelector((state) => state.song.activeSongId);
  let allSongs = useSelector((state) => state?.song?.songs);
  const song = useSelector((state) => state.song.currentSong);
  console.log(allSongs);

  useEffect(() => {
    dispatch(songs());
    // dispatch(singleSong(song.id));
  }, []);

  useEffect(() => dispatch(singleSong(1)), []);
  // console.log(songsState);

  const handleClick = (idx) => {
    if (document.querySelector(".musicPlayerFooter")) {
      document
        .querySelector(".musicPlayerFooter")
        .classList.remove("musicPlayerFooter");
    }
    setTrackIndex(idx);
  };

  return (
    <div>
      {allSongs.length > 0 && (
        <footer className="musicPlayerFooter">
          <MusicPlayer2
            tracks={allSongs}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
          />
        </footer>
      )}
      <div className="dark-background">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="dashboard">
        <div className="dashboard-main">
          <div className="dashboard-content">
            <h1>More of what you like</h1>
            <p>Suggestions based on what you've liked or played</p>
            <div className="dashboard-weekly">
              <div className="weekly-photo">
                <img className="weekly-photo" src={song?.image} />
              </div>
              <div className="weekly-song-list">
                {allSongs
                  ? allSongs.map((song, idx) => (
                      <button
                        className="more-of-what-you-like-button"
                        onClick={() => handleClick(idx)}
                      >
                        <div className="small-list">
                          <div className="small-image-and-title">
                            <Link to={`/song/${song.id}`}>
                              <img
                                className="small-tile-image"
                                src={song.image}
                              ></img>
                            </Link>
                            <p className="song-title">
                              {song.title} by {song.artistName}
                            </p>
                          </div>
                          <div>
                            <button>
                              <i className="fas fa-heart"></i>
                            </button>
                            <button>
                              <i className="fas fa-retweet"></i>
                            </button>
                            <button>
                              <i className="fas fa-share-square"></i>
                            </button>
                          </div>
                        </div>
                      </button>
                    ))
                  : null}
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Charts: Top 10</h1>
            <p>The latest hits, updated all the time</p>
            <div className="dashboard-top">
              {/* {console.log("FLLLLLAAAAAAAGGGGGG", allSongs)} */}
              {allSongs
                ? allSongs.map((song, idx) => (
                    <div>
                      <div className="button-outer"></div>
                      <div className="tile-outer">
                        <Link
                          className="tile-container"
                          to={`/song/${song.id}`}
                        >
                          <img className="tile-image" src={song.image}></img>
                        </Link>
                        <button
                          // className="tile-container"
                          className="play-button"
                          onClick={() => handleClick(idx)}
                        >
                          <i className="fas fa-play"></i>
                        </button>
                        <p className="song-title">{song.title}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="dashboard-content">
            <h1>Scenes</h1>
            <p>Discover tomorrow's sounds today</p>
            <div className="dashboard-new">
              {allSongs?.map((song, idx) => (
                <div>
                  <div className="button-outer"></div>
                  <div className="tile-outer">
                    <Link className="tile-container" to={`/song/${song.id}`}>
                      <img className="tile-image" src={song.image}></img>
                    </Link>
                    <button
                      // className="tile-container"
                      className="play-button"
                      onClick={() => handleClick(idx)}
                    >
                      <i className="fas fa-play"></i>
                    </button>
                    <p className="song-title">{song.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
