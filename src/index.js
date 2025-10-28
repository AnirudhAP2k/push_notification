import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notifyRoutes from "./routes/notify.js";
import tokenRoutes from "./routes/tokens.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Push Service is running! Good Job!");
});

app.use("/api/notify", notifyRoutes);
app.use("/api/tokens", tokenRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Push Service running on port ${process.env.PORT || 4000}`);
});
