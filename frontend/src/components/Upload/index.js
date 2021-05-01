import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Navigation from "../Navigation";
import { getGenres } from "../../store/genre";
import { addNewSong } from "../../store/songs";

import "./Upload.css";

function Upload({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  let genres = useSelector((state) => state?.genre?.genres?.genres);

  //   console.log(genres.genres);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genreId, setGenreId] = useState("");
  const [image, setImage] = useState("");
  const [artistName, setArtistName] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [inputErrors, setInputErrors] = useState([]);

  if (sessionUser === undefined) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // VALID FILE EXTENSIONS
    // WAV, FLAC, AIFF, ALAC, OGG, MP2, MP3, AAC, AMR, WMA
    const track = {
      title,
      description,
      imageUrl: image || "/img/trackDefault.jfif",
      artistName,
      audioFile,
      userId: sessionUser.id,
      genreId,
    };
    // console.log(track);

    const songDispatch = await dispatch(addNewSong(track));

    history.push(`/song/${songDispatch.id}`);
  };

  return (
    <>
      <div className="dark-background">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="uploadFormContainer">
        <form onSubmit={handleSubmit} className="uploadForm">
          <label className="uploadTextLabel">
            Title
            <input
              type="text"
              placeholder="Enter the title of the track"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="uploadText"
            />
          </label>
          <label className="uploadDescriptionLabel">
            Description
            <textarea
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="uploadDescription"
            />
          </label>
          <label className="uploadGenreLabel">
            Genre
            {genres && (
              <select
                value={genreId}
                onChange={(e) => setGenreId(e.target.value)}
                required
                className="uploadGenre"
              >
                <option value="" disabled hidden>
                  Choose genre
                </option>
                {genres.map((genre) => {
                  return (
                    <option key={genre.id} value={genre.id}>
                      {genre.genre}
                    </option>
                  );
                })}
              </select>
            )}
          </label>
          <label className="uploadImageLabel">
            Track Image
            <input
              type="text"
              placeholder="Enter the URL for an image (optional)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="uploadImage"
            />
          </label>
          <label className="uploadAudioFileLabel">
            Audio File
            <input
              type="file"
              onChange={(e) => setAudioFile(e.target.files[0])}
              required
              className="uploadAudioFile"
            />
          </label>
          <div className="uploadSubmit">
            <button type="submit" className="uploadSubmitButton">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
