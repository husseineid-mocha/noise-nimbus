const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Song, Comment } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

// router.get(
//   "/:id",
//   csrfProtection,
//   asyncHandler(async (req, res) => {
//     const song = await Song.findByPk(req.params.id);
//     return res.json({
//       song,
//     });
//   })
// );

router.post(
  "/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const comment = req.body;

    await Comment.create({
      body: comment,
      userId: res.locals.user.id,
      songId,
    });
  })
);

module.exports = router;
