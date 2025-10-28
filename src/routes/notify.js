import express from "express";
import { sendNotification } from "../firebase/fcm.js";
import { getUserTokens } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, title, body } = req.body;
  const tokens = await getUserTokens(userId);
  if (!tokens || !tokens.length)
    return res.status(404).json({ message: "No tokens found" });

  const payload = { title, body };

  const results = await Promise.all(tokens.map(token => sendNotification(token, payload)));
  res.json({ success: true, results });
});

export default router;
