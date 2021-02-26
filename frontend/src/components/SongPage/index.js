import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./songpage.css";

function SongPage(props) {
  const [comment, setComment] = useState("");
  const isLoaded = props.isLoaded;
  const dispatch = useDispatch();
  const history = useHistory();
  const songsState = useSelector((state) => state.song.songs);
  const song = useSelector((state) => state.song.songs);
  // const song = useSelector((state) =>
  //   state.song.singleSong(props.match.params.id)
  // );
  // console.log(song.id);

  // console.log(songsState);

  useEffect(() => {
    dispatch(singleSong(props.match.params.id));
  }, []);

  return (
    <div>
      <>
        <Navigation isLoaded={isLoaded} />

        <div className="song-show-page">
          <div className="song-banner">
            <div className="song-show-play">
              {/* <PlayButtonContainer songId={song.id} /> */}
            </div>

            <div className="song-banner-info">
              <div className="song-banner-top">
                <h2 className="song-banner-artist"></h2>
                <h3 className="song-banner-created-at"></h3>
              </div>

              <div className="song-banner-bottom">
                <h1 className="song-banner-title">{song.title}</h1>
              </div>
            </div>

            <div className="song-banner-photo">
              <img src={song.image} />
            </div>
          </div>

          <div className="song-comments">
            <div className="song-comments-container">
              <div className="song-comments-form-container">
                <div className="artist-comment-photo">
                  {/* {currentUser.photoUrl ? (
                    <img src={currentUser.photoUrl} />
                  ) : null} */}
                </div>
                <form
                  className="song-comments-form"
                  // onSubmit={this.handleCommentSubmit}
                >
                  <input
                    type="text"
                    // value={this.state.comment}
                    // onChange={this.update("comment")}
                    placeholder="Write a comment"
                  />
                </form>
              </div>

              <div className="song-comments-stats">
                <div className="song-stats-buttons">
                  <button
                  // className={`song-show-button ${liked}`}
                  // onClick={this.handleLike}
                  >
                    <i class="fas fa-heart"></i>
                    {/* {this.state.liked} */}
                  </button>
                  <button>
                    <i class="fas fa-retweet"></i>
                    Repost
                  </button>
                  <button>
                    <i class="fas fa-share-square"></i>
                    Share
                  </button>
                  <button>
                    <i class="fas fa-bars"></i>
                    Add to Next up
                  </button>
                  <div className="more-dropdown">
                    <button
                    // onClick={this.handleDropdown}
                    // onBlur={this.handleBlur}
                    >
                      <i class="fas fa-ellipsis-h"></i>
                      More
                    </button>
                    {/* {deleteButton} */}
                  </div>
                </div>

                <div className="song-stats">
                  <div>
                    <i class="fas fa-play"></i>
                    <p>400</p>
                  </div>
                  <div>
                    <i class="fas fa-heart"></i>
                    <p>700</p>
                  </div>
                  <div>
                    <i class="fas fa-retweet"></i>
                    <p>8000</p>
                  </div>
                </div>
              </div>

              <div className="song-comments-index">
                <div className="song-comments-artist">
                  {/* <Link to={`/users/${artist.id}`}>
                    <div className="artist-photo">
                      {artist.photoUrl ? <img src={artist.photoUrl} /> : null}
                    </div>
                    <p className="artist-profile">{artist.display_name}</p>
                  </Link> */}
                  <div className="artist-stats">
                    <p>
                      <i class="fas fa-user-friends"></i>
                      12
                    </p>
                    <p>
                      <i class="fas fa-music"></i>
                      144
                    </p>
                  </div>
                  {/* {followButton} */}
                </div>
                <div className="song-desc-and-comments">
                  {/* {description}
                  {commentSection} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      ;
    </div>
  );
}

export default SongPage;
