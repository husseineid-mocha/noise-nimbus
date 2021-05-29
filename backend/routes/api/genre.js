const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Genre } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

// Get all genres
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const genres = await Genre.findAll();

    return res.json({ genres });
  })
);

module.exports = router;
