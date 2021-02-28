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
    // console.log("PAAAAAAYLOOOOOAAAAD", payload.comment, payload.userId);

    const comment = await Comment.create({
      body: payload.comment,
      userId: payload.userId,
      songId,
    });

    return res.json({ comment });
  })
);

module.exports = router;

//show the comments for one specific song
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const songId = parseInt(req.params.id);
    const comments = await Comment.findAll({
      where: {
        songId: songId,
      },
    });

    return res.json({ comments });
  })
);

//delete a comment
router.post(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    await Comment.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ status: req.params.id });
  })
);
