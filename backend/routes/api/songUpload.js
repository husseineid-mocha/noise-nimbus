const express = require("express");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");
const { Song } = require("../../db/models");

const router = express.Router();

// Dedicated api route to upload to AWS and generate song URL
router.post(
  "/",
  singleMulterUpload("audio"),
  asyncHandler(async (req, res) => {
    const { title, description, image, artistName, genreId } = req.body;

    const audioFile = await singlePublicFileUpload(req.file);

    const newSong = await Song.create({
      title,
      description,
      audioFile,
      image,
      artistName,
      genreId,
    });

    if (newSong) {
      return res.json({ newSong });
    } else return res.json({});
  })
);

module.exports = router;
