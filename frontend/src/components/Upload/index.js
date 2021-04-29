import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Navigation from "../Navigation";
import { addNewSong } from "../../store/songs";

function Upload({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

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

    const trackDispatch = await dispatch(addNewSong(track));

    history.push(`/tracks/${trackDispatch.id}`);
  };

  return (
    <>
      <div className="dark-background">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="uploadFormContainer">
        <form onsubmit={handleSubmit} className="uploadForm"></form>
      </div>
    </>
  );
}

export default Upload;
