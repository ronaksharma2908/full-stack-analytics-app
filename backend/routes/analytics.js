import express from "express";
import Analytics from "../models/Analytics.js";

const router = express.Router();

// GET all analytics
router.get("/", async (req, res) => {
  try {
    const data = await Analytics.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new analytics entry
router.post("/", async (req, res) => {
  try {
    const newEntry = new Analytics(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
