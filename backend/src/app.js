import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.route.js";
import progressRotuer from "./routes/progress.route.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json());

// =======
// Routes
// =======
app.use("/auth", authRouter);
app.use("/progress", progressRotuer);

const port = process.env.EXPRESS_PORT || 1337;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "testing server",
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
