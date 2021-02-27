const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Song, Comment } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json({
      comments,
    });
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const { payload } = req.body;
    console.log("PAAAAAAYLOOOOOAAAAD", payload.comment, payload.userId);

    const comment = await Comment.create({
      body: payload.comment,
      userId: payload.userId,
      songId,
    });

    return res.json({ comment });
  })
);

module.exports = router;
