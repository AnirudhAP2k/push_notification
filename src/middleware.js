export default function apiKeyMiddleware(req, res, next) {
  if (req.path.startsWith("/api")) {
    const key = req.headers["x-api-key"];
    if (key !== process.env.PUSH_API_KEY) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
  next();
}
