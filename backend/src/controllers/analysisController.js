const { randomUUID } = require("crypto");

const pool = require("../config/database");
const { analyzeWithAI } = require("../services/aiService");

const analyzeResume = async (req, res) => {
  try {
    const file = req.file;
    const { jobDescription } = req.body;

    if (!file) {
      return res.status(400).json({
        message: "Resume PDF is required"
      });
    }

    if (!jobDescription || !jobDescription.trim()) {
      return res.status(400).json({
        message: "Job description is required"
      });
    }

    const analysis = await analyzeWithAI(
      file.buffer,
      file.originalname,
      jobDescription
    );

    const id = randomUUID();

    const result = await pool.query(
      `
      INSERT INTO analyses (
        id,
        resume_name,
        job_description,
        match_score,
        matched_skills,
        missing_skills,
        suggestions
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *
      `,
      [
        id,
        file.originalname,
        jobDescription,
        analysis.match_score,
        analysis.matched_skills,
        analysis.missing_skills,
        JSON.stringify(analysis.suggestions)
      ]
    );

    res.status(201).json({
      message: "Resume analyzed successfully",
      analysis: result.rows[0]
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Resume analysis failed",
      error: error.message
    });
  }
};

const getAnalysisHistory = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        resume_name,
        match_score,
        matched_skills,
        missing_skills,
        created_at
      FROM analyses
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve analysis history"
    });
  }
};

const getAnalysis = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM analyses
      WHERE id = $1
      `,
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({
        message: "Analysis not found"
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Unable to retrieve analysis"
    });
  }
};

module.exports = {
  analyzeResume,
  getAnalysisHistory,
  getAnalysis
};