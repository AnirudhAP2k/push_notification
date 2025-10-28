import express from "express";
import { saveToken } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, token, platform } = req.body;
  await saveToken(userId, token, platform);
  res.json({ success: true, token, platform });
});

export default router;
