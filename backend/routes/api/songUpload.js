const express = require("express");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

const router = express.Router();

// Dedicated api route to upload to AWS and generate song URL
router.post(
  "/",
  singleMulterUpload("song"),
  asyncHandler(async (req, res) => {
    const songUrl = await singlePublicFileUpload(req.file);
    return res.json(songUrl);
  })
);

module.exports = router;
