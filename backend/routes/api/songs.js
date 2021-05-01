const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Song } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

router.get(
  "/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    console.log("LAAAABEL", req.params);
    const song = await Song.findByPk(req.params.id);
    return res.json({
      song,
    });
  })
);

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll();

    return res.json({
      songs,
    });
  })
);

module.exports = router;
