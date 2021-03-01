import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songs, singleSong } from "../../store/songs";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import Comment from "../Comment";
import {
  createComment,
  getAllComments,
  getSongComments,
} from "../../store/comment";
import "./songpage.css";

function SongPage(props) {
  const [comment, setComment] = useState("");
  const isLoaded = props.isLoaded;
  const dispatch = useDispatch();
  const history = useHistory();
  const song = useSelector((state) => state.song.currentSong);
  const sessionUser = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comment);
  console.log(comments);

  useEffect(() => {
    dispatch(getSongComments(props.match.params.id));
  }, []);

  console.log(sessionUser);
  useEffect(() => {
    dispatch(singleSong(props.match.params.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      comment: comment,
    };
    // console.log(song.id);
    dispatch(createComment(payload, song.id));
    setComment("");
  };

  const commentSection =
    Object.values(comments).length > 0 ? (
      <div className="comments-section">
        <div className="comments-header">
          <i class="fas fa-comment-alt"></i>
          <div class="comment-count">
            {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </div>
        </div>
        <div>
          {comments.map((comment) => (
            <Comment {...comment} key={comment.id} />
          ))}
        </div>
      </div>
    ) : null;

  return (
    <div>
      <>
        <div className="dark-background">
          <Navigation isLoaded={isLoaded} />
        </div>

        <div className="song-show-page">
          <div className="song-banner">
            <div className="song-show-play">
              {/* <PlayButtonContainer songId={song.id} /> */}
            </div>

            <div className="song-banner-info">
              <div className="song-banner-top">
                <h2 className="song-banner-artist">{song?.artistName}</h2>
                <h3 className="song-banner-created-at"></h3>
              </div>

              <div className="song-banner-bottom">
                <h1 className="song-banner-title">{song?.title}</h1>
              </div>
            </div>

            <div className="song-banner-photo">
              <img src={song?.image} />
            </div>
          </div>

          <div className="song-comments">
            <div className="song-comments-container">
              <div className="song-comments-form-container">
                {/* <div className="artist-comment-photo"></div> */}
                <form onSubmit={handleSubmit} className="song-comments-form">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment"
                  />
                </form>
              </div>

              <div className="song-comments-stats">
                <div className="song-stats-buttons">
                  <button>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button>
                    <i className="fas fa-retweet"></i>
                    Repost
                  </button>
                  <button>
                    <i className="fas fa-share-square"></i>
                    Share
                  </button>
                  <button>
                    <i className="fas fa-bars"></i>
                    Add to Next up
                  </button>
                  <div className="more-dropdown">
                    <button>
                      <i className="fas fa-ellipsis-h"></i>
                      More
                    </button>
                  </div>
                </div>

                <div className="song-stats">
                  <div>
                    <i className="fas fa-play"></i>
                    <p>400</p>
                  </div>
                  <div>
                    <i className="fas fa-heart"></i>
                    <p>700</p>
                  </div>
                  <div>
                    <i className="fas fa-retweet"></i>
                    <p>8000</p>
                  </div>
                </div>
              </div>
              <div className="song-comments-index">
                {/* {comments.map((comment) => (
                  <Comment {...comment} key={comment.id} />
                ))} */}
                {/* <div className="song-comments-artist">
                  <div className="artist-stats"> */}
                {/* <p>
                      <i className="fas fa-user-friends"></i>
                      12
                    </p>
                    <p>
                      <i className="fas fa-music"></i>
                      144
                    </p> */}
              </div>
            </div>
            <div className="song-desc-and-comments">{commentSection}</div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
      ;
    </div>
  );
}

export default SongPage;
