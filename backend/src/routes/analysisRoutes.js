const express = require("express");
const multer = require("multer");

const {
  analyzeResume,
  getAnalysis,
  getAnalysisHistory
} = require("../controllers/analysisController");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024
  },

  fileFilter: (req, file, callback) => {
    if (file.mimetype !== "application/pdf") {
      return callback(new Error("Only PDF resumes are supported"));
    }

    callback(null, true);
  }
});

router.post("/", upload.single("resume"), analyzeResume);

router.get("/", getAnalysisHistory);

router.get("/:id", getAnalysis);

module.exports = router;